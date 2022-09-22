const notifications = [
  {
    type: 'error',
    header: 'Whoops!',
    message: 'Please check that all fields have been filled out properly.'
  },
  { type: 'success', header: 'Success!', message: 'Your message has been sent.' },
  { type: 'contactName', message: 'Please enter your name' },
  { type: 'contactMessage', message: 'Message must be at least 10 characters long.' },
  { type: 'contactEmail', message: 'Please enter a valid email' }
];

export const getNotification = (type: string) => {
  return notifications.find((notification) => notification.type === type);
};
