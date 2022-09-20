throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import type { RequestHandler } from '@sveltejs/kit';
import { getAllStaff } from '../../../services/staffDAO';

// staff endpoint
export const get: RequestHandler = async () => {
  const staffMembers = getAllStaff();

  // console.log(`All staff handler: ${staffMembers}`);

  return {
    status: 200,
    body: staffMembers
  };
};
