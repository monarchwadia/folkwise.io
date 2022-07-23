<section class="contact-section">
  <div class="contact-container">
    <h1>Get in touch with us</h1>
    <div class="contact-form-container">
      <label for="name">Name</label>
      <input type="text" class="text" id="name" />
      <label for="email">Email</label>
      <input type="text" class="text" id="email" />
      <label for="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10" />
    </div>
  </div>
</section>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 750px;
    padding: 1rem;
    margin: 1rem auto;
    background-color: colors.$white;

    h1 {
      margin-left: 1rem;
    }
  }

  .contact-form-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    max-width: 500px;
    padding: 1rem;

    label {
      margin-top: 1rem;
    }

    input,
    textarea {
      color: colors.$white;
      background-color: colors.$dark;
      outline: none;
      border: none;
      padding: 0.5rem;
    }
  }
</style>
