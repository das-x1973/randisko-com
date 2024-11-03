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
    async signIn({ user, account, profile }) {
      try {
        // Ensure email is defined as string or undefined (no null)
        const email = user?.email ?? undefined

        if (!email) {
          console.error('No email provided by', account?.provider)
          return false
        }

        // Create or update UserProfile
        await prisma.$transaction(async tx => {
          // First ensure user exists
          const dbUser = await tx.user.upsert({
            where: { email },
            create: {
              email,
              name: user.name,
              image: user.image,
              role: 'user'
            },
            update: {
              name: user.name || undefined,
              image: user.image || undefined,
              lastLoginAt: new Date()
            }
          })

          // Then create/update profile linked to userId
          await tx.userProfile.upsert({
            where: { userId: dbUser.id },
            create: {
              userId: dbUser.id,
              has_logged_in: true,
              wizard_step_completed: 0,
              image: user.image || null,
              nick: user.name || null,
              status: 'active'
            },
            update: {
              has_logged_in: true,
              image: user.image || undefined,
              nick: user.name || undefined,
              lastActive: new Date()
            }
          })
        })

        return true
      } catch (error) {
        console.error('Error in signIn callback:', error)
        return false
      }
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
        token.role = user.role // Directly use role from User
      }
      return token
    }
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  pages: {
    signIn: '/login',
    verifyRequest: '/verify-email'
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
