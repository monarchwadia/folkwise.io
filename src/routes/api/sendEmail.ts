import * as sgMail from '@sendgrid/mail';
import type { RequestHandler } from '@sveltejs/kit';
import type { StaffMemberRaw } from 'src/data/staffData';
import { getStaffMemberByID } from '../../services/staffDAO';

import config from 'src/components/server/config';

const sendgrid = config.sendgridSecret as string;

console.log(sendgrid); //returns undefined

sgMail.setApiKey(sendgrid);

export const post: RequestHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  const uuid = body.uuid;

  const messageObject = {
    name: body.name,
    email: body.email,
    message: body.message
  };

  sendEmail(messageObject, uuid);

  return {
    body: messageObject
  };
};

const sendEmail = async (formObject: Record<string, string>, uuid: string) => {
  const staffMember: StaffMemberRaw = getStaffMemberByID(uuid);

  const message = {
    to: staffMember.contactEmail,
    from: 'contact@jojawhi.com',
    subject: `Message from ${formObject.name} via Folkwise.io`,
    text: `
    Sender: ${formObject.name};
    Sender email: ${formObject.email};
    Message: ${formObject.message}
    `
  };

  sgMail
    .send(message)
    .then(() => console.log('Email sent successfully'))
    .catch((error) => console.log(error.message));
};
