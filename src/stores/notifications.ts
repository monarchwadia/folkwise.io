import { writable, type Updater, type Writable } from 'svelte/store';
import type { ToastNotification } from '../types';

// Structure inspired by https://svelte.dev/repl/2254c3b9b9ba4eeda05d81d2816f6276?version=3.32.2

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

type NotificationStore = {
  subscribe: Writable<ToastNotification[] | []>['subscribe'];
  set: (this: void, value: never[]) => void;
  update: (this: void, updater: Updater<never[]>) => void;
};

const createNotificationStore = (): NotificationStore => {
  const { subscribe, set, update } = writable([]);

  return { subscribe, set, update };
};

export const notifications = createNotificationStore();

// {
//   type: 'error',
//   header: 'Whoops!',
//   message: 'There was an error'
// }
