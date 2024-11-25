// src/libs/resetDatabase.js
// node src/libs/resetDatabase.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    // Delete all data from each table
    await prisma.userActivity.deleteMany();
    await prisma.userBadge.deleteMany();
    await prisma.userImage.deleteMany();
    await prisma.userVideo.deleteMany();
    await prisma.userInterest.deleteMany();
    await prisma.match.deleteMany();
    await prisma.conversationParticipant.deleteMany();
    await prisma.message.deleteMany();
    await prisma.conversation.deleteMany();
    await prisma.groupMember.deleteMany();
    await prisma.eventParticipant.deleteMany();
    await prisma.speedDatingEvent.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.userProfile.deleteMany();
    await prisma.user.deleteMany();
    await prisma.verificationToken.deleteMany();

    console.log('All data has been erased from the database.');
  } catch (error) {
    console.error('Error deleting data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();
