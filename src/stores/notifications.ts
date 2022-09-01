import { writable } from 'svelte/store';
// import type { Notification } from 'src/types';

// const createNotificationStore = (timeout: number) => {
//   const _notifications = writable([]);

//   const send = (message: string, type = 'default', timeout:number) => {
//     _notifications.update((state) => {
//       return [...state, { type, message, timeout }];
//     });
//   };

//   let timers = [];

//   const notifications = derived(_notifications, ($_notifications, set) => {
//     set($_notifications);
//     if ($_notifications.length > 0) {
//       const timer = setTimeout(() => {
//         _notifications.update((state) => {
//           state.shift();
//           return state;
//         }, $_notifications[0].timeout)
//         return clearTimeout(timer);
//       })
//     }
//   })

// };

// export const notifications = createNotificationStore();

export const notificationStore = writable([]);
// {
//   type: 'error',
//   header: 'Whoops!',
//   message: 'There was an error'
// }
