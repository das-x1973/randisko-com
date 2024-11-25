// /app/actions/userActions.ts
'use server'

import { prisma } from '@/libs/prisma';

export const findOrCreateUser = async (email: string, account: any) => {
  if (!email) throw new Error('No email provided');

  // Find an existing user
  let user = await prisma.user.findUnique({
    where: { email },
    include: { profile: true }
  });

  // If the user exists, link the account or update if needed
  if (user && account) {
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

  // If no existing user, proceed to create a new user along with the profile
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name: account?.name ?? null,
        image: account?.picture ?? null,
        profile: {
          create: {
            isOnboarded: false,
          },
        },
      },
      include: {
        profile: true, // Ensure profile is included in the return object
      },
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
