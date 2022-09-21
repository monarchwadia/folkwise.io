import type { RequestHandler } from './$types';
import { getAllStaff } from '../../../services/staffDAO';

// staff endpoint
export const GET: RequestHandler = async () => {
  const staffMembers = getAllStaff();

  return new Response(JSON.stringify(staffMembers), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
