<div class="navbar">
  <a href="/" class="logo-link"><img class="logo-img" src="/wordmark.png" alt="logo" /></a>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .navbar {
    background-color: transparent;
    display: flex;
    gap: 2rem;
    justify-content: left;
    align-items: baseline;
    max-width: 1000px;
    margin: 0 auto;

    .logo-img {
      max-width: 8rem;
      margin: 0;
      padding-top: 1rem;
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: baseline;
      list-style: none;
      gap: 1.25rem;

      li {
        a {
          position: relative;
          text-decoration: none;
          color: colors.$highlight;
          transition: all 300ms;

          &:hover {
            color: colors.$light;

            &::after {
              opacity: 1;
            }
          }

          &::after {
            position: absolute;
            bottom: -4px;
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
    }
  }
</style>
