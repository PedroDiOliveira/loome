export interface CaseStudy {
  id: string
  clinicName: string
  segment: string
  description: string
  screenshotUrl: string
  liveUrl?: string
}

export const cases: CaseStudy[] = []
