import type { RequestHandler } from '@sveltejs/kit';
import { getAllStaff, getStaffMemberByID } from './services/staffService';

export const getAllStaffMembers: RequestHandler = async () => {
  const staffMembers = getAllStaff();

  return {
    status: 200,
    body: staffMembers
  };
};

export const getOneStaffMember: RequestHandler = async ({ params }) => {
  const { uuid } = params;

  const staffMember = await getStaffMemberByID(uuid);

  if (staffMember) {
    return {
      body: staffMember
    };
  } else {
    return {
      status: 404
    };
  }
};
