<script lang="ts">
  //dummy values for testing
  let name = 'Josh';
  let email = 'jojawhi+test@gmail.com';
  let message = 'Test message oh yeah!';

  const submitForm = async () => {
    const response = await fetch('/api/emailSubmit', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data));
  };

  const handleSubmit = () => {
    submitForm();
    name = '';
    email = '';
    message = '';
  };
</script>

<form class="contact-form-container" method="POST" on:submit|preventDefault={handleSubmit}>
  <h1>Get in touch with us</h1>
  <div class="form-group">
    <label for="name">Name</label>
    <input bind:value={name} type="text" class="text" id="name" required />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input bind:value={email} type="text" class="text" id="email" required />
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea bind:value={message} name="message" id="message" cols="30" rows="10" required />
  </div>

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

      &:hover {
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
