import * as sgMail from '@sendgrid/mail';
import type { RequestHandler } from '@sveltejs/kit';
import type { StaffMemberRaw } from 'src/data/staffData';
import { getStaffMemberByUsername } from '../../../services/staffDAO';

import config from 'src/lib/server/config';

const sendgrid = config.sendgridSecret as string;

console.log(sendgrid); //returns undefined

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
  const staffMember: StaffMemberRaw = getStaffMemberByUsername(username);

  const message = {
    // to: staffMember.contactEmail, //production
    to: 'jojawhi@gmail.com', //testing purposes
    // from: 'noreply@folkwise.io', // production, once we get this email setup
    from: 'contact@jojawhi.com', //testing purposes
    subject: `Message from ${formObject.name} via Folkwise.io`,
    text: `
    Sender: ${formObject.name};
    Sender email: ${formObject.email};
    Message: ${formObject.message}
    `
  };

  const confirmationMessage = {
    to: formObject.email,
    // from: 'noreply@folkwise.io', // production, once we get this email setup
    from: 'contact@jojawhi.com', //testing purposes
    subject: 'Thank you for your message!',
    text: `
    Thank you so much for contacting Folkwise. We've received your message, and we will get back to you as soon as we can.

    Regards,

    The Folkwise team
    `
  };

  sgMail
    .send(message)
    .then(() => console.log('Email sent successfully'))
    .catch((error) => console.log(error.message));

  sgMail
    .send(confirmationMessage)
    .then(() => console.log('Confirmation sent.'))
    .catch((error) => console.log(error.message));
};
