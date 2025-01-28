// /app/actions/userActions.ts


'use server';

import { prisma } from '@/libs/prisma';

export const findOrCreateUser = async (email: string, account: any) => {
  if (!email) throw new Error('No email provided');

  // Attempt to find the user by email
  let user = await prisma.user.findUnique({
    where: { email },
    include: { profile: true },
  });

  if (user) {
    // If user exists, update or link the account
    if (account) {
      await prisma.account.upsert({
        where: {
          provider_providerAccountId: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        },
        create: {
          userId: user.id,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          type: 'oauth',
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
        update: {},
      });
    }
  } else {
    // If no user exists, create a new one
    user = await prisma.user.create({
      data: {
        email,
        name: account?.name ?? null,
        image: account?.picture ?? null,
        emailVerified: new Date(), // Mark email as verified
        profile: {
          create: {
            isOnboarded: false,
          },
        },
      },
      include: { profile: true },
    });
  }

  return user;
};



export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true }
  });
};



