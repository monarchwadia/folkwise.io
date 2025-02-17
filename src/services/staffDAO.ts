import type { StaffMember } from '../types';
import { staffMembers, type StaffMemberRaw } from '../data/staffData';

export const getAllStaff = () => {
  const staffArray: StaffMember[] = staffMembers.map((staffMember) => {
    const {
      username,
      firstName,
      lastName,
      role,
      imgURL,
      miniBio,
      isAcceptingProjects,
      linkedInURL,
      twitterURL 
    } = staffMember;

    return {
      username,
      firstName,
      lastName,
      role,
      imgURL,
      miniBio,
      isAcceptingProjects,
      linkedInURL,
      twitterURL,
      hasEmail: !!staffMember.contactEmail
    };
  });

  return staffArray;
};

export const getStaffMemberByUsername = (username: string): StaffMemberRaw => {
  const staff: StaffMemberRaw[] = staffMembers;
  const staffMember = staff.find((s) => s.username === username);
  return staffMember as StaffMemberRaw;
};
