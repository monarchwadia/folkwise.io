<div class="navbar">
  <h2 class="blog-name">Folkwise</h2>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .navbar {
    background-color: colors.$dark;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .blog-name {
      color: white;
      font-size: 2rem;
      font-weight: bolder;
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
          text-decoration: none;
          color: colors.$highlight;

          &:hover {
            color: colors.$highlight-red;
          }
        }
      }
    }
  }
</style>
