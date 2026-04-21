import { z } from 'zod'

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long'),

  company: z.string().trim().max(100).optional().default(''),
  phone:   z.string().trim().max(30).optional().default(''),

  service: z
    .enum([
      'Staffing, VA & Recruitment',
      'Data & Excel Automation',
      'QA Testing — App & Web',
      'Data Engineering & Visualizations',
      'Multiple Services',
      'Not sure yet',
      '',
    ])
    .optional()
    .default(''),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),

  /** Honeypot — bots fill this, humans leave it empty */
  _hp: z.string().max(0, 'Bot detected').optional().default(''),
})

export type ContactInput = z.infer<typeof ContactSchema>

export type ApiError = {
  success: false
  error: string
  fields?: Record<string, string[]>
}

export type ApiSuccess = {
  success: true
  message: string
}

export type ApiResponse = ApiError | ApiSuccess
