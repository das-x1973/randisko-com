import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'
import InstagramProvider from 'next-auth/providers/instagram'
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthOptions, Account, Profile } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

import { prisma } from '@/libs/prisma'

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
      const email = user?.email ?? undefined
      if (!email) {
        console.error('No email provided by', account?.provider)
        return false
      }

      // Find an existing user with the same email
      const existingUser = await prisma.user.findUnique({ where: { email } })
      if (existingUser && account) {
        // Link this OAuth account to the existing user
        await prisma.account.upsert({
          where: {
            provider_providerAccountId: { provider: account.provider, providerAccountId: account.providerAccountId }
          },
          create: {
            userId: existingUser.id,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            type: 'oauth', // Add type property (e.g., 'oauth' for social providers)
            access_token: account.access_token,
            refresh_token: account.refresh_token,
            expires_at: account.expires_at,
            token_type: account.token_type,
            scope: account.scope,
            id_token: account.id_token,
            session_state: account.session_state
          },
          update: {}
        })
        return true
      }

      // If no existing user, proceed with creating a new user
      return true
    },
    
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as string | undefined
      }
      return session
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    }
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
