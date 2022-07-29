//pull any secret env variables into the config object with process.env, and then import config where you need to access them

import 'dotenv/config';
import { browser } from '$app/env';

if (browser) {
  throw new Error('import of server config from browser');
}

const config = {
  debug: process.env.DEBUG,
  sendgridSecret: process.env.SENDGRID_SECRET,
  hCaptchaSecret: process.env.HCAPTCHA_SECRET
};

export default config;
