import * as sgMail from '@sendgrid/mail';
import type { RequestHandler } from '@sveltejs/kit';
import type { StaffMemberRaw } from 'src/data/staffData';
import { getStaffMemberByUsername } from '../../services/staffDAO';

import config from 'src/components/server/config';

const sendgrid = config.sendgridSecret as string;

sgMail.setApiKey(sendgrid);

export const post: RequestHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  const username = body.username;

  const messageObject = {
    name: body.name,
    email: body.email,
    message: body.message
  };

  sendEmail(messageObject, username);

  return {
    body: messageObject
  };
};

const sendEmail = async (formObject: Record<string, string>, username: string) => {
  try {
    const staffMember: StaffMemberRaw = getStaffMemberByUsername(username);

    const message = {
      to: staffMember.contactEmail,
      from: 'noreply@folkwise.io',
      subject: `Message from ${formObject.name} via Folkwise.io`,
      text: `
    Sender: ${formObject.name};
    Sender email: ${formObject.email};
    Message: ${formObject.message}
    `
    };

    sgMail
      .send(message)
      .then(() =>
        console.log(`Your message has been received! Thanks for getting in touch with us!`)
      )
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(`sendEmail error: ${error}`);
  }
};
