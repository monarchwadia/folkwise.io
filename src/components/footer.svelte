<footer>
  <div class="footer-content-container">
    <div class="company-container">
      <h3>Folkwise</h3>
      <ul>
        <li><a class="footer-link" href="/">Home</a></li>
        <li><a class="footer-link" href="/about">About</a></li>
        <li><a class="footer-link" href="/blog">Blog</a></li>
        <li><a class="footer-link" href="/contact">Contact</a></li>
        <li><a class="footer-link" href="/contact">Careers</a></li>
      </ul>
    </div>
    <div class="education-container">
      <h3>Community</h3>
      <ul>
        <li><a class="footer-link" href="/">Mentorship</a></li>
        <li><a class="footer-link" href="/">Open Source</a></li>
      </ul>
    </div>
  </div>
</footer>

<style type="scss">
  @use 'src/styles/colors' as colors;

  footer {
    padding: 2rem;
    background-color: colors.$dark;
    background-image: url('/kikko.svg'),
      linear-gradient(to left, colors.$medium, colors.$dark, colors.$dark, colors.$dark);
    background-repeat: no-repeat;
    background-size: 60%, 100%;
    background-position: 108% 7%, 0 0;
  }

  .footer-content-container {
    display: flex;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;

    .company-container,
    .education-container {
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
</style>
