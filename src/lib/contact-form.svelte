<script lang="ts">
  import type { StaffMember } from '../types';
  import { notifications } from '../stores/notifications';
  import Notification from './notification.svelte';
  import Captcha from './captcha.svelte';

  //default undefined to prevent errors on the contact page
  export let staffMember: StaffMember | undefined = undefined;
  export let onClick: Function | undefined = undefined;

  let name = '';
  let email = '';
  let message = '';
  let username: string;
  // let notVerified = true;

  if (staffMember) {
    username = staffMember.username;
  } else {
    username = 'monarchwadia';
  }

  //Validation

  let errors = {
    name: '',
    email: '',
    message: ''
  };

  let valid = false;

  const validateForm = (name: string, email: string, message: string) => {
    valid = true;

    if (name.trim() === '') {
      valid = false;
      errors.name = 'Please enter your name';
      notifications.update(() => {
        return [
          {
            type: 'error',
            header: 'Whoops!',
            message: 'Please check that all fields have been filled out properly.'
          }
        ];
      });
      console.log(errors.name);
      console.log($notifications);
    } else {
      errors.name = '';
      // notificationStore.update(() => undefined);
    }

    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
      valid = false;
      errors.email = 'Please enter a valid email';
      notifications.update(() => {
        return [
          {
            type: 'error',
            header: 'Whoops!',
            message: 'Please check that all fields have been filled out properly.'
          }
        ];
      });
      console.log(errors.email);
      console.log($notifications);
    } else {
      errors.email = '';
      // notificationStore.update(() => undefined);
    }

    if (message.length < 10) {
      valid = false;
      errors.message = 'Message must be at least 10 characters long.';
      notifications.update(() => {
        return [
          {
            type: 'error',
            header: 'Whoops!',
            message: 'Please check that all fields have been filled out properly.'
          }
        ];
      });
      console.log(errors.message);
      console.log($notifications);
    } else {
      errors.message = '';
      // notificationStore.update(() => undefined);
    }

    if (valid) {
      console.log('Validation successful.');
      notifications.update(() => {
        return [{ type: 'success', header: 'Success!', message: 'Your message has been sent.' }];
      });
      setTimeout(() => notifications.set([]), 5000);
      //set timeout to update to []
    }

    return valid;
  };

  const submitForm = async () => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
        username
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data));
  };

  const handleSubmit = () => {
    const validation = validateForm(name, email, message);

    if (valid) {
      submitForm();
      name = '';
      email = '';
      message = '';
      valid = false;
      //add in success/error handling/view, then set timeout on onClick() to close modal
      if (onClick) {
        onClick();
      }
    }
  };
</script>

<form
  id="contact-form"
  class="contact-form-container"
  method="POST"
  on:submit|preventDefault={handleSubmit}
>
  {#if staffMember}
    <h1>Contact {staffMember.firstName}</h1>
  {:else}
    <h1>Get in touch with us</h1>
  {/if}
  {#if $notifications[0]}
    <div class="notification">
      <Notification />
    </div>
  {/if}
  <div class="form-group">
    <label for="name">Name</label>
    <input bind:value={name} type="text" class="text" id="name" placeholder="Name" novalidate />
    {#if errors.name}
      <div class="validation">{errors.name}</div>
    {/if}
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input bind:value={email} type="text" class="text" id="email" placeholder="Email" novalidate />
    {#if errors.email}
      <div class="validation">{errors.email}</div>
    {/if}
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea
      bind:value={message}
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="Type your message"
      novalidate
    />
    {#if errors.message}
      <div class="validation">{errors.message}</div>
    {/if}
  </div>
  <Captcha />
  <button type="submit">Send</button>
</form>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .contact-form-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1rem;
    padding: 1rem;

    button {
      padding: 0.75rem 1.5rem;
      color: colors.$highlight;
      background-color: colors.$dark;
      font-weight: 700;
      text-decoration: none;
      border-radius: 4px;
      border: none;
      outline: none;
      transition: all 300ms;

      &:disabled {
        color: colors.$medium;
        background-color: colors.$grey;
      }

      &:not(:disabled):hover {
        color: colors.$dark;
        background-color: colors.$highlight;
      }
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.875rem;
    }

    input,
    textarea {
      color: colors.$white;
      background-color: colors.$dark-50;
      outline: none;
      border: none;
      padding: 0.5rem;
      transition: all 300ms;
      margin: 0.25rem 0;
      border-radius: 3px;

      &::placeholder {
        color: colors.$medium;
      }

      &:focus {
        background-color: colors.$dark;
        outline: 1px solid colors.$highlight-green;
        box-shadow: 0 0 4px 1px colors.$highlight-green, inset 0 0 4px 2px colors.$highlight-green;
      }
    }
  }

  .validation {
    color: colors.$highlight-red;
    font-size: 0.625rem;
  }

  @media screen and (max-width: 768px) {
    .contact-form-container {
      padding: 0.25rem;
    }
  }
</style>
