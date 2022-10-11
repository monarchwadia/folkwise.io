// import 'dotenv/config';
// import { browser } from '$app/environment';

// if (browser) {
//   throw new Error('import of server config from browser');
// }

const clientConfig = {
  hCaptchaVerifyURL: import.meta.env.VITE_HCAPTCHA_VERIFY_URL,
  //remove _TEST for production
  hCaptchaSiteKey: import.meta.env.VITE_HCAPTCHA_SITE_KEY_TEST,
  ffEnableEmailForms: import.meta.env.VITE_FF_ENABLE_EMAIL_FORMS
};

export default clientConfig;
