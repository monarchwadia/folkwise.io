<script lang="ts">
  import ContactForm from '../../lib/contact-form.svelte';
</script>

<div class="contact-container">
  <section class="contact-section">
    <ContactForm />
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 1rem auto;
    background-color: colors.$white;
  }

  @media screen and (max-width: 768px) {
    .contact-section {
      padding: 0.75rem;
    }
  }
</style>
