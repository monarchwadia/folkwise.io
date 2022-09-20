/*HELP*/ throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import type { RequestHandler } from '@sveltejs/kit';
import config from 'src/lib/server/config';

export const post: RequestHandler = async ({ request }: { request: Request }) => {
  try {
    const { name, email, message, response: hCaptchaClientResponse } = request.body;

    const secret: string = config.hCaptchaSecret as string;
    const siteKey: string = config.hCaptchaSiteKey;
    const body = new URLSearchParams({ response: hCaptchaClientResponse, secret, siteKey });

    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString()
    });

    const data = await response.json();
    const { success } = data;
    console.log(`data: `, data);
    if (success) {
      console.log('hCaptcha success!');
    } else {
      console.log('hCaptcha failure!');
    }

    //send email

    return {
      status: 200
    };
  } catch (error) {
    console.log(error);
    //update notification store with error information
    return {
      status: 500,
      error
    };
  }
};
