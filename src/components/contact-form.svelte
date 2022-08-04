<script lang="ts">
  import type { StaffMember } from 'src/types';
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

  const resetFormFields = () => {
    name = '';
    email = '';
    message = '';
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
    submitForm();
    resetFormFields();
    //add in success/error handling/view, then set timeout on onClick() to close modal
    if (onClick) {
      onClick();
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
  <div class="form-group">
    <label for="name">Name</label>
    <input bind:value={name} type="text" class="text" id="name" placeholder="Name" required />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input bind:value={email} type="text" class="text" id="email" placeholder="Email" required />
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
      required
    />
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
        outline: 1px solid colors.$highlight-red;
        box-shadow: 0 0 4px 1px colors.$highlight-red, inset 0 0 4px 1px colors.$highlight-red;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contact-form-container {
      padding: 0.25rem;
    }
  }
</style>
