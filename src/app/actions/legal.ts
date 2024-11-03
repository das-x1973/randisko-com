// src/app/actions/legal.ts
'use server'

import { revalidatePath } from 'next/cache'

import { z } from 'zod'


import type { Prisma } from '@prisma/client'

import { prisma } from '@/libs/prisma'


// Types
const CompanyInfoSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  legalName: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  postcode: z.string().min(1),
  country: z.string().min(1),
  emailGeneral: z.string().email(),
  emailPrivacy: z.string().email(),
  emailLegal: z.string().email(),
  phone: z.string().min(1),
  registrationNo: z.string().min(1),
  vatId: z.string().min(1),
  socialFacebook: z.string().url().optional(),
  socialInstagram: z.string().url().optional(),
  socialTwitter: z.string().url().optional()
})

const LegalDocumentSchema = z.object({
  type: z.enum(['privacy', 'terms', 'cookies']),
  title: z.string().min(1),
  content: z.any(), // Adjusted to z.any() for compatibility
  isActive: z.boolean().default(false)
})

type CompanyInfoInput = z.infer<typeof CompanyInfoSchema>
type LegalDocumentInput = z.infer<typeof LegalDocumentSchema>

// Actions
export async function getCompanyInfo() {
  try {
    const info = await prisma.companyInfo.findFirst({
      orderBy: { updatedAt: 'desc' }
    })
    return info
  } catch (error) {
    console.error('Error fetching company info:', error)
    return null
  }
}

export async function getLegalDocument(type: string) {
  try {
    const document = await prisma.legalDocument.findFirst({
      where: {
        type,
        isActive: true
      },
      orderBy: {
        version: 'desc'
      }
    })
    return document
  } catch (error) {
    console.error('Error fetching legal document:', error)
    return null
  }
}

export async function updateCompanyInfo(input: CompanyInfoInput) {
  try {
    // Validate input
    const data = CompanyInfoSchema.parse(input)

    const updated = await prisma.companyInfo.upsert({
      where: { id: data.id || 'default' },
      update: data,
      create: data
    })

    revalidatePath('/privacy')
    revalidatePath('/terms')

    return { success: true, data: updated }
  } catch (error) {
    console.error('Error updating company info:', error)
    return { success: false, error: 'Failed to update company information' }
  }
}

export async function updateLegalDocument(input: LegalDocumentInput) {
  try {
    // Validate input
    const data = LegalDocumentSchema.parse(input)

    // Deactivate current active version if new one is active
    if (data.isActive) {
      await prisma.legalDocument.updateMany({
        where: {
          type: data.type,
          isActive: true
        },
        data: {
          isActive: false
        }
      })
    }

    const nextVersion = await getNextVersion(data.type)

    // Ensure content is typed as Prisma.InputJsonValue
    const updated = await prisma.legalDocument.create({
      data: {
        ...data,
        version: nextVersion,
        publishedAt: data.isActive ? new Date() : null,
        content: data.content as Prisma.InputJsonValue // Cast to Prisma.InputJsonValue
      }
    })

    revalidatePath(`/${data.type}`)

    return { success: true, data: updated }
  } catch (error) {
    console.error('Error updating legal document:', error)
    return { success: false, error: 'Failed to update legal document' }
  }
}

async function getNextVersion(type: string): Promise<number> {
  const latest = await prisma.legalDocument.findFirst({
    where: { type },
    orderBy: { version: 'desc' }
  })

  return (latest?.version || 0) + 1
}
