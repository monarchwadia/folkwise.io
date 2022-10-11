import type { ToastNotification } from './types';

const notifications: ToastNotification[] = [
  {
    type: 'error',
    header: 'Whoops!',
    message: 'Something went wrong. Please try again.'
  },
  {
    type: 'form-error',
    header: 'Whoops!',
    message: 'Please check that all fields have been filled out properly.'
  },

  { type: 'form-success', header: 'Success!', message: 'Your message has been sent.' }
];

export const getNotification = (type: string) => {
  return notifications.find((notification) => notification.type === type);
};
