<script lang="ts">
  import { ffEnableEmailForms } from './client/config';
</script>

<section class="hero">
  <div class="hero-container">
    <div class="hero-text-container">
      <h1 class="hero-title">We build vibrant communities around ethical software.</h1>
      <p class="bold-text">
        We write software that respects users' rights, design audience journeys that empower your
        users, and grow communities full of fans.
      </p>
    </div>
    {#if ffEnableEmailForms}
      <div class="hero-cta-container">
        <a class="hero-cta" href="/contact">Let's grow.</a>
      </div>
    {/if}
  </div>
</section>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .hero {
    position: relative;
    margin-inline: -1rem;
    background-image: radial-gradient(
      farthest-corner at 750px 175px,
      colors.$dark-50 0%,
      colors.$dark 75%
    );
    background-size: 110%;
    // background-color: colors.$medium;
    // background-image: url('/assets/kikko-light-optimized.svg'),
    //   linear-gradient(to left, colors.$white, colors.$white, colors.$light);
    // background-size: 90%, 100%;
    // background-position: -50% 50%, 100% 100%;
    // background-repeat: no-repeat;
  }

  .hero::before {
    content: '';
    position: absolute;
    background-image: url('/assets/kikko-optimized.svg');
    background-size: 110%;
    background-position: 20% 20%;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.25;
  }

  .hero-container {
    position: relative;
    display: grid;
    grid-template-columns: 60% 40%;
    max-width: 750px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    background-color: rbga(0 0 0 0.5);
    p {
      margin: 0;
      color: colors.$white;
    }
  }

  .hero-title {
    color: colors.$white;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }

  .hero-cta-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-cta {
    padding: 1rem 1.5rem;
    color: colors.$highlight;
    background-color: colors.$dark;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    transition: all 300ms;

    &:hover {
      color: colors.$dark;
      background-color: colors.$highlight;
    }
  }

  .hero-cta-container {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    .hero {
      margin-inline: -0.75rem;
      background-image: linear-gradient(to top, colors.$white, colors.$white, colors.$light);
      background-size: 100%;
    }

    .hero-container {
      display: flex;
      flex-direction: column;
      padding: 2rem 0.75rem 0 0.75rem;
    }

    .hero-text-container {
      padding: 0;
    }

    .hero-title {
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
  }
</style>
