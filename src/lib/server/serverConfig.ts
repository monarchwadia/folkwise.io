//pull any secret env variables into the config object with process.env, and then import config where you need to access them

// import 'dotenv/config';
// import { browser } from '$app/env';

// if (browser) {
//   throw new Error('import of server config from browser');
// }

const serverConfig = {
  sendgridSecret: process.env.SENDGRID_SECRET,
  sendgridSenderEmail: process.env.SENDGRID_SENDER_EMAIL,
  hCaptchaSecret: process.env.HCAPTCHA_SECRET,
  hCaptchaSecretTest: process.env.HCAPTCHA_SECRET_TEST
};

export default serverConfig;
