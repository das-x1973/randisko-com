// src/app/actions/legal.ts

'use server'

import { revalidatePath } from 'next/cache'

import { z } from 'zod'

import type { Prisma } from '@prisma/client'

import { prisma } from '@/libs/prisma'

// Schema Definitions
const LegalDocumentSchema = z.object({
  type: z.enum(['privacy', 'terms', 'pricing']),
  region: z.string().min(2), // Country code like "UK", "IE", etc.
  language: z.string().optional().default('en'), // Language support if needed
  title: z.string().min(1),
  content: z.any(), // Adjusted to z.any() for compatibility
  isActive: z.boolean().default(false)
})

type LegalDocumentInput = z.infer<typeof LegalDocumentSchema>

// Utility Function to Get Next Version
async function getNextVersion(type: string, region: string): Promise<number> {
  const latest = await prisma.legalDocument.findFirst({
    where: { type, region },
    orderBy: { version: 'desc' }
  })

  return (latest?.version || 0) + 1
}

// Actions
export async function getLegalDocument(type: string, region: string, language: string = 'en') {
  try {
    const document = await prisma.legalDocument.findFirst({
      where: {
        type,
        region,
        language,
        isActive: true
      },
      orderBy: { version: 'desc' }
    })
    return document
  } catch (error) {
    console.error('Error fetching legal document:', error)
    return null
  }
}

export async function createLegalDocument(input: LegalDocumentInput) {
  try {
    const data = LegalDocumentSchema.parse(input)

    // Deactivate existing active document for the same type and region if new one is active
    if (data.isActive) {
      await prisma.legalDocument.updateMany({
        where: {
          type: data.type,
          region: data.region,
          isActive: true
        },
        data: { isActive: false }
      })
    }

    const nextVersion = await getNextVersion(data.type, data.region)

    // Create the new legal document with the specified data
    const createdDocument = await prisma.legalDocument.create({
      data: {
        ...data,
        version: nextVersion,
        publishedAt: data.isActive ? new Date() : null,
        content: data.content as Prisma.InputJsonValue // Cast to Prisma.InputJsonValue
      }
    })

    // Revalidate path for the specific document type and region
    revalidatePath(`/${data.region}/${data.type}`)

    return { success: true, data: createdDocument }
  } catch (error) {
    console.error('Error creating legal document:', error)
    return { success: false, error: 'Failed to create legal document' }
  }
}

export async function updateLegalDocument(input: LegalDocumentInput) {
  try {
    const data = LegalDocumentSchema.parse(input)

    // Deactivate existing active document for the same type and region if new one is active
    if (data.isActive) {
      await prisma.legalDocument.updateMany({
        where: {
          type: data.type,
          region: data.region,
          isActive: true
        },
        data: { isActive: false }
      })
    }

    const nextVersion = await getNextVersion(data.type, data.region)

    // Ensure content is typed as Prisma.InputJsonValue
    const updated = await prisma.legalDocument.create({
      data: {
        ...data,
        version: nextVersion,
        publishedAt: data.isActive ? new Date() : null,
        content: data.content as Prisma.InputJsonValue
      }
    })

    revalidatePath(`/${data.region}/${data.type}`)

    return { success: true, data: updated }
  } catch (error) {
    console.error('Error updating legal document:', error)
    return { success: false, error: 'Failed to update legal document' }
  }
}
