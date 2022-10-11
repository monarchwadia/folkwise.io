// import { HCAPTCHA_SECRET } from '$env/static/private';
// import { SENDGRID_SECRET } from '$env/static/private';
// import { SENDGRID_SENDER_EMAIL } from '$env/static/private';

const HCAPTCHA_SECRET = (await import('$env/static/private')).HCAPTCHA_SECRET;
const SENDGRID_SECRET = (await import('$env/static/private')).SENDGRID_SECRET;
const SENDGRID_SENDER_EMAIL = (await import('$env/static/private')).SENDGRID_SENDER_EMAIL;

// **** New import method for .env variables not currently supported by Vercel
// **** These will work in dev mode, but for production, process.env will pull
// **** the variables that you enter into Vercel's Environment Variable UI

// import 'dotenv/config';
import { browser } from '$app/environment';

if (browser) {
  throw new Error('import of server config from browser');
}

const getEnvValue = (key: string) => {
  let value;
  try {
    value = process.env[key];
  } catch (e) {
    try {
      value = key;
    } catch (e) {
      return undefined;
    }
  }
  return value;
};

const serverConfig = {
  sendgridSecret: getEnvValue(SENDGRID_SECRET),
  sendgridSenderEmail: getEnvValue(SENDGRID_SENDER_EMAIL),
  hCaptchaSecret: getEnvValue(HCAPTCHA_SECRET)
};

export default serverConfig;
