import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'
import InstagramProvider from 'next-auth/providers/instagram'
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthOptions, Account, Profile } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

import { prisma } from '@/libs/prisma'
import { findOrCreateUser } from '@/app/actions/userActions';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: '2.0'
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID as string,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!user?.email) {
          throw new Error('No email provided by the provider');
        }

        const registeredUser = await findOrCreateUser(user.email, account);

        if (!registeredUser) {
          throw new Error('User registration or retrieval failed');
        }

        // Check if onboarding is complete
        if (registeredUser.profile?.isOnboarded) {
          return '/dashboard';
        } else {
          return '/onboarding';
        }
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  pages: {
    signIn: '/auth/login',
    verifyRequest: '/auth/verify-email'
  },

  events: {
    async signIn({ user, account, isNewUser }) {
      await prisma.userActivity.create({
        data: {
          userId: user.id,
          type: 'SIGN_IN',
          provider: account?.provider || 'unknown',
          isNewUser: !!isNewUser
        }
      })
    },

    async createUser({ user }) {
      await prisma.userActivity.create({
        data: {
          userId: user.id,
          type: 'USER_CREATED',
          provider: 'system'
        }
      })
    },

    async linkAccount({ user, account }) {
      await prisma.userActivity.create({
        data: {
          userId: user.id,
          type: 'ACCOUNT_LINKED',
          provider: account.provider
        }
      })
    }
  },

  debug: process.env.NODE_ENV === 'development'
}
