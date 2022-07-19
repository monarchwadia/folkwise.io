import type { StaffMember } from 'src/types';
import { staffMembers } from 'src/staff';

export const getAllStaff = () => {
  const staffArray: StaffMember[] = staffMembers.map((staffMember) => {
    const uuid = staffMember.uuid;
    const name = staffMember.name;
    const imgURL = staffMember.imgURL;
    const miniBio = staffMember.miniBio;
    const projectStatus = staffMember.projectStatus;
    const contactEmail = staffMember.contactEmail;

    return {
      uuid,
      name,
      imgURL,
      miniBio,
      projectStatus,
      contactEmail
    };
  });

  return staffArray;
};

export const getStaffMemberByID = (uuid: string) => {
  const staff = getAllStaff();
  const staffMember = staff.find((s) => s.uuid === uuid);
  return staffMember;
};
