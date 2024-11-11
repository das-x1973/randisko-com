// src/app/actions/companyInfo.ts


'use server'

import { revalidatePath } from 'next/cache'

import { z } from 'zod'

import { prisma } from '@/libs/prisma'

// Schema Definitions
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

type CompanyInfoInput = z.infer<typeof CompanyInfoSchema>

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

export async function updateCompanyInfo(input: CompanyInfoInput) {
  try {
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
