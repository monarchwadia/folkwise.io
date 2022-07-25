<section class="contact-section">
  <div class="contact-container">
    <form class="contact-form-container">
      <h1>Get in touch with us</h1>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="text" id="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" required />
      </div>

      <button type="submit">Send</button>
    </form>
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
    margin: 1rem auto;
    background-color: colors.$white;
  }

  .contact-form-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1rem;
    width: 100%;
    max-width: 700px;
    padding: 2rem 1rem;

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
</style>
