<section class="hero">
  <div class="hero-container">
    <div class="hero-text-container">
      <h1>We're a community of software developers.</h1>
      <p class="bold-text">
        We're custom software developers with deep expertise in a variety of industries.
      </p>
    </div>
    <div class="hero-cta-container">
      <a class="hero-cta" href="/contact">Let's grow.</a>
    </div>
  </div>
</section>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .hero {
    width: 100%;
    background-color: colors.$medium;
    background-image: url('/kikko-light-optimized.svg'),
      linear-gradient(to left, colors.$white, colors.$white, colors.$light);
    background-size: 90%, 100%;
    background-position: -50% 50%, 100% 100%;
    background-repeat: no-repeat;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 60% 40%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    background-color: rbga(0 0 0 0.5);
    p {
      margin: 0;
    }
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
      background-image: linear-gradient(to top, colors.$white, colors.$white, colors.$light);
      background-size: 100%;
    }

    .hero-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }

    .hero-text-container {
      padding: 0;
    }
  }
</style>
