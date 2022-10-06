import type { ToastNotification } from './types';

const notifications: ToastNotification[] = [
  {
    type: 'error',
    header: 'Whoops!',
    message: 'Please check that all fields have been filled out properly.'
  },
  { type: 'success', header: 'Success!', message: 'Your message has been sent.' }
];

export const getNotification = (type: string) => {
  return notifications.find((notification) => notification.type === type);
};
