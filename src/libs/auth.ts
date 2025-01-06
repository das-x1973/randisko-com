// src/libs/auth.ts

// NextAuth imports
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';
import EmailProvider from 'next-auth/providers/email';
import type { NextAuthOptions, Account, Profile } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';

// Prisma imports
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/libs/prisma';

// Nodemailer imports
import { createTransport } from 'nodemailer';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // Facebook Provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),

    // Apple Provider
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),

    // Magic Link (Email) Provider
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER as string,
        port: 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER as string,
          pass: process.env.EMAIL_SERVER_PASSWORD as string,
        },
      },
      from: process.env.EMAIL_FROM as string,
      sendVerificationRequest: ({ identifier, url, provider }) => {
        const { host } = new URL(url);
        const transport = createTransport(provider.server);
        transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Sign in to ${host}`,
          text: `Sign in to ${host}\n\n${url}\n\n`,
        });
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/auth/login', // Custom login page
    verifyRequest: '/auth/verify-email', // Magic Link verification
  },

  events: {
    async signIn({ user, account }) {
      // Log user sign-in activity if needed
      console.log(`User ${user.email} signed in with ${account?.provider}.`);
    },
  },

  debug: process.env.NODE_ENV === 'development',
};
