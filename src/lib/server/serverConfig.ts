import { HCAPTCHA_SECRET_TEST } from '$env/static/private';
import { HCAPTCHA_SECRET } from '$env/static/private';
import { SENDGRID_SECRET } from '$env/static/private';
import { SENDGRID_SENDER_EMAIL } from '$env/static/private';

//import any secret env variables into this file and then assign them to the config object
//then import serverConfig where you need to access them

// import 'dotenv/config';
import { browser } from '$app/environment';

if (browser) {
  throw new Error('import of server config from browser');
}

const serverConfig = {
  sendgridSecret: SENDGRID_SECRET,
  sendgridSenderEmail: SENDGRID_SENDER_EMAIL,
  hCaptchaSecret: HCAPTCHA_SECRET,
  hCaptchaSecretTest: HCAPTCHA_SECRET_TEST
};

export default serverConfig;
