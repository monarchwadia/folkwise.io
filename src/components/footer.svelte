<script>
  import { ffEnableEmailForms } from './client/config';
</script>

<footer class="footer">
  <div class="footer-content-container">
    <h3 class="footer-heading">Folkwise</h3>
    <div class="company-container">
      <ul>
        <li><a class="footer-link" href="/">Home</a></li>
        <li><a class="footer-link" href="/about">About</a></li>
        <li><a class="footer-link" href="/blog">Blog</a></li>
        {#if ffEnableEmailForms}
          <li><a class="footer-link" href="/contact">Contact</a></li>
        {/if}
      </ul>
    </div>
    <div class="other-container">
      <ul>
        <li>
          <a
            class="footer-link"
            href="https://www.termsfeed.com/live/c9f4b307-4183-40e6-a29b-6c4dc5183b4b"
            target="_blank"
            rel="noopener noreferrer">Terms & Conditions</a
          >
        </li>
        <li>
          <a
            class="footer-link"
            href="https://www.termsfeed.com/live/41d7490d-b01f-4b82-ac49-01af97aefddd"
            target="_blank"
            rel="noopener noreferrer">Privacy</a
          >
        </li>
      </ul>
    </div>
  </div>
  <p class="copyright">© Copyright 2022 Zero Projects Inc.</p>
</footer>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .footer {
    padding: 2rem 1rem;
    background-color: colors.$dark;
    // background-image: url('/assets/kikko-optimized.svg'),
    //   linear-gradient(to left, colors.$medium, colors.$dark, colors.$dark, colors.$dark);
    // background-repeat: no-repeat;
    // background-size: 60%, 100%;
    // background-position: 108% 7%, 0 0;
  }

  .footer-content-container {
    display: grid;
    grid-template-columns: 20% 25%;
    grid-template-areas:
      'heading heading'
      'company other';
    max-width: 750px;
    margin: 0 auto;

    .footer-heading {
      grid-area: heading;
    }

    .company-container {
      grid-area: company;
    }

    .other-container {
      grid-area: other;
    }

    .company-container,
    .other-container {
      ul {
        display: flex;
        gap: 0.25rem;
        flex-direction: column;
        padding: 0;
      }
    }

    h3 {
      color: colors.$light;
    }

    .footer-link {
      position: relative;
      color: colors.$highlight;
      text-decoration: none;
      list-style: none;

      &:hover {
        color: colors.$light;

        &::after {
          opacity: 1;
        }
      }

      &::after {
        position: absolute;
        bottom: -1px;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background-color: colors.$light;
        opacity: 0;
        transition: all 300ms;
      }
    }
  }

  .copyright {
    max-width: 750px;
    margin: 0 auto;
    color: colors.$white;
    font-size: 0.875rem;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    .footer {
      background-image: url('/assets/kikko-optimized.svg'),
        linear-gradient(to left, colors.$medium, colors.$dark, colors.$dark, colors.$dark);
      background-size: 150%, 100%;
      background-position: 70% 30%, 0 0;
    }
  }
</style>
