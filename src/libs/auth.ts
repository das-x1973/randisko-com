// src/libs/auth.ts
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'
import InstagramProvider from 'next-auth/providers/instagram'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

const prisma = new PrismaClient()

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
    async signIn({ user, account, profile }) {
      try {
        if (!user?.email) {
          console.error('No email provided by', account?.provider)
          return false
        }

        if (!user?.id) {
          console.error('No user ID provided')
          return false
        }

        // Create or update UserProfile
        const userProfile = await prisma.userProfile.upsert({
          where: {
            id: user.id
          },
          create: {
            id: user.id,
            has_logged_in: true,
            wizard_step_completed: 0,
            image: user.image || null,
            nick: user.name || null,
            status: 'active'
          },
          update: {
            has_logged_in: true,
            image: user.image || undefined, // Only update if exists
            nick: user.name || undefined // Only update if exists
          }
        })

        console.log('UserProfile created/updated:', userProfile)
        return true
      } catch (error) {
        console.error('Error in signIn callback:', error)
        return false
      }
    },

    async session({ session, token }) {
      // Add user id to session
      if (session?.user) {
        session.user.id = token.sub as string
      }
      return session
    },

    async jwt({ token, user, account }) {
      // Pass user id to token
      if (user) {
        token.id = user.id
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

  debug: process.env.NODE_ENV === 'development',

  events: {
    async signIn(message: any) {
      // Use `any` if unsure of exact type
      console.log('User signed in:', message)
    },
    async createUser(message: any) {
      console.log('User created:', message)
    },
    async linkAccount(message: any) {
      console.log('Account linked:', message)
    }
  }
}
