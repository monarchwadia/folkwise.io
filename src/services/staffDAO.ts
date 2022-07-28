import type { StaffMember } from 'src/types';
import { staffMembers, type StaffMemberRaw } from 'src/data/staffData';

export const getAllStaff = () => {
  const staffArray: StaffMember[] = staffMembers.map((staffMember) => {
    const uuid = staffMember.uuid;
    const firstName = staffMember.firstName;
    const lastName = staffMember.lastName;
    const role = staffMember.role;
    const imgURL = staffMember.imgURL;
    const miniBio = staffMember.miniBio;
    const isAcceptingProjects = staffMember.isAcceptingProjects;
    const linkedInURL = staffMember.linkedInURL;
    const twitterURL = staffMember.twitterURL;
    const hasEmail = staffMember.contactEmail ? true : false;

    return {
      uuid,
      firstName,
      lastName,
      role,
      imgURL,
      miniBio,
      isAcceptingProjects,
      linkedInURL,
      twitterURL,
      hasEmail
    };
  });

  return staffArray;
};

export const getStaffMemberByID = (uuid: string): StaffMemberRaw => {
  const staff: StaffMemberRaw[] = staffMembers;
  const staffMember = staff.find((s) => s.uuid === uuid);
  return staffMember as StaffMemberRaw;
};
