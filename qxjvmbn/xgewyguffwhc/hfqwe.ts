export type Certification = {
  name: string
  issuer: string
  year: string
  href?: string
}

export const certifications: Certification[] = [
  { name: 'Cybersecurity Fundamentals', issuer: 'IBM', year: 'Oct 2025' },
  { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM', year: '2025' },
  { name: 'Building AI-Powered Search with MongoDB Vector Search', issuer: 'MongoDB', year: 'Jun 2025' },
  { name: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM', year: '2025' },
  { name: 'Certified Cybersecurity Educator Professional', issuer: 'Professional certification', year: '2025' },
  { name: 'Ethical Hacking / Cybersecurity Training', issuer: 'Training program', year: '2025' },
  { name: 'DevOps Training / Internship Certification', issuer: 'Training provider', year: '2025' },
  { name: 'Android & AI Internship Certification', issuer: 'Internship provider', year: '2025' },
  { name: 'Cybersecurity Awareness: Cybersecurity Terminology', issuer: 'LinkedIn Learning', year: 'Aug 2024' },
  { name: 'The Cybersecurity Threat Landscape', issuer: 'LinkedIn Learning', year: 'Aug 2025' },
  { name: 'SkillsBuild — Customer Engagement: Communication and Personality Dynamics', issuer: 'IBM SkillsBuild', year: '2025' },
  { name: 'SkillsBuild — Customer Engagement: Problem Solving and Process Controls', issuer: 'IBM SkillsBuild', year: '2025' },
  { name: 'DevOps Engineering', issuer: 'Cloud Institution', year: 'Jun 2025' },
]
