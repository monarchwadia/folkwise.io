// import { HCAPTCHA_SECRET } from '$env/static/private';
// import { SENDGRID_SECRET } from '$env/static/private';
// import { SENDGRID_SENDER_EMAIL } from '$env/static/private';

// **** New import method for .env variables not currently supported by Vercel
// **** These will work in dev mode, but for production, process.env will pull
// **** the variables that you enter into Vercel's Environment Variable UI

//import any secret env variables into this file and then assign them to the config object
//then import serverConfig where you need to access them

// import 'dotenv/config';
import { browser } from '$app/environment';

if (browser) {
  throw new Error('import of server config from browser');
}

const serverConfig = {
  sendgridSecret: process.env.SENDGRID_SECRET,
  sendgridSenderEmail: process.env.SENDGRID_SENDER_EMAIL,
  hCaptchaSecret: process.env.HCAPTCHA_SECRET
};

export default serverConfig;
