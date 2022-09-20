import type { RequestHandler } from '@sveltejs/kit';
import { getAllStaff } from '../../services/staffDAO';

// staff endpoint
export const get: RequestHandler = async () => {
  const staffMembers = getAllStaff();

  // console.log(`All staff handler: ${staffMembers}`);

  return {
    status: 200,
    body: staffMembers
  };
};
