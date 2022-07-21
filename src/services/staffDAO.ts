import type { StaffMember } from 'src/types';
import { staffMembers } from 'src/data/staffData';

export const getAllStaff = () => {
  const staffArray: StaffMember[] = staffMembers.map((staffMember) => {
    const uuid = staffMember.uuid;
    const name = staffMember.name;
    const imgURL = staffMember.imgURL;
    const miniBio = staffMember.miniBio;
    const projectStatus = staffMember.projectStatus;
    const linkedInURL = staffMember.linkedInURL;
    const twitterURL = staffMember.twitterURL;
    const hasEmail = staffMember.contactEmail ? true : false;

    return {
      uuid,
      name,
      imgURL,
      miniBio,
      projectStatus,
      linkedInURL,
      twitterURL,
      hasEmail
    };
  });

  return staffArray;
};

export const getStaffMemberByID = (uuid: string): StaffMember => {
  const staff: StaffMember[] = getAllStaff();
  const staffMember = staff.find((s) => s.uuid === uuid);
  return staffMember as StaffMember;
};
