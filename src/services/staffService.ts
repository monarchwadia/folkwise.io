import type { StaffMember } from 'src/types';
import { staffMembers } from 'src/staff';

export const getAllStaff = () => {
  const staffArray: StaffMember[] = staffMembers.map((staffMember) => {
    const uuid = staffMember.uuid;
    const name = staffMember.name;
    const imgURL = staffMember.imgURL;
    const miniBio = staffMember.miniBio;
    const projectStatus = staffMember.projectStatus;
    const twitterURL = staffMember.twitterURL;
    const contactEmail = staffMember.contactEmail;

    return {
      uuid,
      name,
      imgURL,
      miniBio,
      projectStatus,
      twitterURL,
      contactEmail
    };
  });

  return staffArray;
};

export const getStaffMemberByID = (uuid: string): StaffMember => {
  const staff: StaffMember[] = getAllStaff();
  const staffMember = staff.find((s) => s.uuid === uuid);
  return staffMember as StaffMember;
};
