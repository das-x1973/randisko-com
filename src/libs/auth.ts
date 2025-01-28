// src/libs/auth.ts

import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';
import EmailProvider from 'next-auth/providers/email';
import type { NextAuthOptions, User } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/libs/prisma';

import { createTransport } from 'nodemailer';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),
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
    async signIn({ user, account }) {
      if (!user || !account) return false;

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      if (!existingUser) {
        // If user does not exist, mark as new user and add an activity
        await prisma.userActivity.create({
          data: {
            userId: user.id,
            type: 'USER_CREATED',
            provider: account.provider,
            isNewUser: true,
          },
        });
      } else {
        // If user exists, update last login activity
        await prisma.userActivity.create({
          data: {
            userId: user.id,
            type: 'SIGN_IN',
            provider: account.provider,
            isNewUser: false,
          },
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        const userActivity = await prisma.userActivity.findFirst({
          where: {
            userId: user.id,
            type: 'USER_CREATED',
          },
          orderBy: { createdAt: 'desc' },
        });

        token.isNewUser = userActivity?.isNewUser ?? false;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.isNewUser = token.isNewUser as boolean | undefined;
      return session;
    },
  },

  pages: {
    signIn: '/auth/login',
    verifyRequest: '/auth/verify-email',
    newUser: '/onboarding',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  debug: process.env.NODE_ENV === 'development',
};

