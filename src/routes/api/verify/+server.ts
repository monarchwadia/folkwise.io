import type { RequestHandler } from './$types';
import type { StaffMemberRaw } from 'src/data/staffData';
import serverConfig from '$lib/server/serverConfig';
import clientConfig from '$lib/client/clientConfig';
import sgMail from '@sendgrid/mail';
import { getStaffMemberByUsername } from '../../../services/staffDAO';
// import { getNotification } from '../../../notifications';
// import { showNotification } from '../../../stores/showNotification';
// import type { ToastNotification } from 'src/types';

// let notification: ToastNotification | undefined;

const sendgrid = serverConfig.sendgridSecret as string;

console.log('Sendgrid key:', sendgrid);

sgMail.setApiKey(sendgrid);

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
  try {
    const {
      username,
      name,
      email,
      message,
      response: hCaptchaClientResponse
    } = await request.json();

    console.log('Server response:', hCaptchaClientResponse);

    const messageObject = {
      name,
      email,
      message
    };

    //Prod values
    const secret: string = serverConfig.hCaptchaSecret as string;
    const siteKey: string = clientConfig.hCaptchaSiteKey;
    const hCaptchaBody = new URLSearchParams({ response: hCaptchaClientResponse, secret, siteKey });

    //Test values
    // const secret: string = serverConfig.hCaptchaSecretTest as string;
    // const siteKey: string = clientConfig.hCaptchaSiteKeyTest;
    // const hCaptchaBody = new URLSearchParams({ response: hCaptchaClientResponse, secret, siteKey });

    console.log('Request sent');

    const verifyResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: hCaptchaBody.toString()
    });

    const data = await verifyResponse.json();
    const { success } = data;
    console.log(`data: `, data);
    if (success) {
      console.log('hCaptcha success!');
      // send email if hCaptcha responds with success
      sendEmail(messageObject, username);
    } else {
      console.log('hCaptcha failure!');
      // showNotification.set(true);
      // notification = getNotification('error');
    }

    return new Response('OK');
  } catch (error) {
    console.log(error);
    //update notification store with error information
    throw error;
  }
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
    .then(() => {
      // showNotification.set(true);
      // notification = getNotification('success');
      console.log('Email sent successfully');
    })
    .catch((error) => {
      // showNotification.set(true);
      // notification = getNotification('error');
      console.log(error.message);
    });

  sgMail
    .send(confirmationMessage)
    .then(() => console.log('Confirmation sent.'))
    .catch((error) => console.log(error.message));
};
