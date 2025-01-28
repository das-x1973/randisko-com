// src/types/randisko/next-auth.d.ts

import type { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id?: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      role?: string;
      isNewUser?: boolean;
      emailVerified?: Date | null; // Add emailVerified to Session user
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string;
    role?: string;
    emailVerified?: Date | null; // Add emailVerified to User
    isNewUser?: boolean; // Add isNewUser to User
  }
}


