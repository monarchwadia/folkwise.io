import type { RequestHandler } from '@sveltejs/kit';
import { getStaffMemberByID } from '../../services/staffDAO';

export const get: RequestHandler = async ({ params }) => {
  const { uuid } = params;

  console.log(`Handler: ${uuid}`);

  const staffMember = getStaffMemberByID(uuid);

  if (staffMember) {
    return {
      status: 200,
      body: staffMember
    };
  } else {
    return {
      status: 404
    };
  }
};
