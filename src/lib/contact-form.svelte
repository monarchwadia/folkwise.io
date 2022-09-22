<script lang="ts">
  import type { StaffMember } from '../types';
  import { showNotification } from '../stores/showNotification';
  import Notification from './notification.svelte';
  import Captcha from './captcha.svelte';
  import { getNotification } from '../notifications';

  // Default undefined to prevent errors on the contact page
  export let staffMember: StaffMember | undefined = undefined;
  export let onClick: Function | undefined = undefined;

  let name = '';
  let email = '';
  let message = '';
  let username: string;

  if (staffMember) {
    username = staffMember.username;
  } else {
    username = 'monarchwadia';
  }

  // Validation
  let errors = {
    name: '',
    email: '',
    message: ''
  };

  let valid = true;

  const validateForm = (name: string, email: string, message: string) => {
    // const validation = [
    //   {
    //     type: 'name',
    //     valid: true,
    //     error: 'contactName'
    //   },
    //   {
    //     type: 'email',
    //     valid: true,
    //     error: 'contactEmail'
    //   },
    //   {
    //     type: 'message',
    //     valid: true,
    //     error: 'contactMessage'
    //   }
    // ];

    // // check validations for validation object, if not valid set valid to false for each and then getNotification(error)
    // validation.forEach((item) => {
    //   if (!item.valid) {
    //     valid = false;
    //     errors[item.type] = getNotification(item.error);
    //   }
    // });

    if (name.trim() === '') {
      valid = false;
      showNotification.set(true);
      const errorType = getNotification('contactName');
      if (errorType) errors.name = errorType.message;
    } else {
      errors.name = '';
    }

    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
      valid = false;
      showNotification.set(true);
      const errorType = getNotification('contactEmail');
      if (errorType) errors.email = errorType.message;
    } else {
      errors.email = '';
    }

    if (message.length < 10) {
      valid = false;
      showNotification.set(true);
      const errorType = getNotification('contactMessage');
      if (errorType) errors.message = errorType.message;
    } else {
      errors.message = '';
    }

    if (valid) {
      showNotification.set(false);
      return getNotification('success');
    }
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
  };

  const handleSubmit = () => {
    validateForm(name, email, message);
    if (valid) {
      submitForm();
      name = '';
      email = '';
      message = '';
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
  {#if $showNotification}
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
