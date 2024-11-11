// src/types/randisko/next-auth.d.ts



import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string
      email?: string | null
      name?: string | null
      image?: string | null
      role?: string // Add role to Session.user
    }
  }

  interface User {
    id: string // Define this for JWT callback usage
    role?: string // Add role to User
  }
}
