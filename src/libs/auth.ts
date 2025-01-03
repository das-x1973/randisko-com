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
      server: process.env.EMAIL_SERVER as string,
      from: process.env.EMAIL_FROM as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // Example: Add custom logic if needed
      return true; // Allow all sign-ins
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      // Attach token to session
      session.user.id = token.sub; // Ensure `id` is available in session
      return session;
    },
    async jwt({ token, user, account }) {
      // Add account information to JWT if needed
      if (account) {
        token.provider = account.provider;
      }
      return token;
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
