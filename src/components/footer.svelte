<footer>
  <div class="company-container">
    <h3>Company</h3>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>
  <div class="education-container">
    <h3>Education</h3>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>
</footer>

<style type="scss">
  @use 'src/styles/colors' as colors;

  footer {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: colors.$dark;

    .company-container,
    .education-container {
      ul {
        display: flex;
        flex-direction: column;
        padding: 0;
      }
    }

    h3 {
      color: colors.$light;
    }

    a {
      text-decoration: none;
      list-style: none;
    }
  }
</style>
