// /*HELP*/throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

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
