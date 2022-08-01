import type { StaffMember } from '../types';

//allows hiding the contact email
export interface StaffMemberRaw extends Omit<StaffMember, 'hasEmail'> {
  contactEmail?: string;
}

export const staffMembers: StaffMemberRaw[] = [
  {
    username: 'monarchwadia',
    firstName: 'Monarch',
    lastName: 'Wadia',
    role: 'CEO & Software Engineer',
    imgURL: '/assets/monarch-optimized.jpg',
    miniBio:
      'Monarch is a senior software developer and startup CEO, and his work centers around the intersection of software engineering and online community building.',
    isAcceptingProjects: true,
    linkedInURL: 'https://www.linkedin.com/in/monarchwadia/',
    twitterURL: 'https://twitter.com/monarchwadia',
    contactEmail: 'monarch@zeroprojects.ca'
  },
  {
    username: 'dlmarshall3',
    firstName: 'David',
    lastName: 'Marshall',
    role: 'Software Engineer',
    imgURL: '/assets/david-optimized.jpg',
    miniBio:
      'David is a software engineer who works at Folkwise. His cross-disciplinary expertise includes the automotive industry, sales, and rocking out as a touring musician.',
    isAcceptingProjects: false,
    linkedInURL: 'https://www.linkedin.com/in/thehenshincoder/',
    contactEmail: 'test@test.ca'
  },
  {
    username: 'jojawhi',
    firstName: 'Josh',
    lastName: 'White',
    role: 'Software Engineer',
    imgURL: '/assets/josh.jpg',
    miniBio:
      'Josh is a software engineer who works at Folkwise. His cross-disciplinary expertise includes the education industry, linguistics, and English as an Additional Language (EAL).',
    isAcceptingProjects: true,
    linkedInURL: 'https://www.linkedin.com/in/jojawhi/',
    contactEmail: 'jojawhi@gmail.com'
  }
];
