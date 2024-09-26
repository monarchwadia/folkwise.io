<script lang="ts">
  import ContactForm from '../../lib/contact-form.svelte';
</script>

<div class="contact-container">
  <section class="contact-section">
    <div class="form-container">
      <ContactForm />
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .contact-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 2rem auto;
  }

  .contact-section {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .contact-section {
      padding: 0.5rem;
    }
  }
</style>
