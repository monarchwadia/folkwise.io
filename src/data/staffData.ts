import type { StaffMember } from '../types';

//UUIDs generated here: https://www.uuidgenerator.net/version4

//allows hiding the contact email
interface StaffMemberRaw extends Omit<StaffMember, 'hasEmail'> {
  contactEmail?: string;
}

export const staffMembers: StaffMemberRaw[] = [
  {
    uuid: '9bc0c49c-2ffa-4b90-a379-bcfddf27badc',
    name: 'Monarch Wadia',
    role: 'CEO & Software Engineer',
    imgURL: '/assets/monarch-optimized.jpg',
    miniBio:
      'Monarch is a senior software developer and startup CEO, and his work centers around the intersection of software engineering and online community building.',
    projectStatus: 'Monarch is currently accepting new projects.',
    linkedInURL: 'https://www.linkedin.com/in/monarchwadia/',
    twitterURL: 'https://twitter.com/monarchwadia?s=20&t=4RbdZOP3xW64QcN3zwViwg',
    contactEmail: 'test@test.ca'
  },
  {
    uuid: '6a409855-e835-4ddf-b7ff-93cbc17ef453',
    name: 'David Marshall',
    role: 'Software Engineer',
    imgURL: '/assets/david-optimized.jpg',
    miniBio:
      'David is a software engineer who works at Folkwise. His cross-disciplinary expertise includes the automotive industry, sales, and rocking out as a touring musician.',
    projectStatus: 'David is not currently accepting new projects.',
    linkedInURL: 'https://www.linkedin.com/in/thehenshincoder/',
    contactEmail: 'test@test.ca'
  },
  {
    uuid: '208a1658-e940-4bd1-bad7-10f0d090243e',
    name: 'Josh White',
    role: 'Software Engineer',
    imgURL: '/assets/josh.jpg',
    miniBio:
      'Josh is a software engineer who works at Folkwise. His cross-disciplinary expertise includes the education industry, linguistics, and English as an Additional Language (EAL).',
    projectStatus: 'Josh is currently accepting new projects.',
    linkedInURL: 'https://www.linkedin.com/in/jojawhi/',
    contactEmail: 'jojawhi@gmail.com'
  }
];
