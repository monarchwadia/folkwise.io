<script>
  let blogSnippets = [
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    },
    {
      title: 'Some Title',
      path: '/',
      text: `Travel time to the nearest starbase? Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Why don't we just give everybody a promotion and call it a night - 'Commander'?`
    }
  ];
</script>

<div class="home">
  <section class="hero">
    <div class="hero-text-container">
      <h1 class="hero-title">Established approaches with fresh perspectives</h1>
      <p>We make apps and websites.</p>
      <p>We hire developers with cross-disciplinary experience.</p>
      <p>Our developers share their skills and knowledge to help our industry grow.</p>
    </div>
    <div class="hero-cta-container">
      <a class="hero-cta" href="/">Create and learn with us</a>
    </div>
  </section>
  <section class="blog-snippets-section">
    <div class="blog-snippets-container">
      {#each blogSnippets as blogSnippet}
        <div class="blog-snippet">
          <h3>{blogSnippet.title}</h3>
          <p>{blogSnippet.text}</p>
          <a href={blogSnippet.path}>Read more -></a>
        </div>
      {/each}
    </div>
  </section>
  <section class="services-section">
    <h1 class="title">What we do</h1>
    <div class="services-container">
      {#each blogSnippets as blogSnippet}
        <div class="service-item">
          <h3>{blogSnippet.title}</h3>
          <p>{blogSnippet.text}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .hero {
    display: grid;
    grid-template-columns: 70% 30%;
    max-width: 100%;
    background-color: colors.$highlight;
    // background-image: url('https://media.istockphoto.com/vectors/oriental-clouds-pattern-vector-id957116264?k=20&m=957116264&s=612x612&w=0&h=dnDU0u2-MY_HAne5e5UZo0WVjpKOAV3ijEJewnZ6q1U=');
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: rbga(0 0 0 0.5);
    p {
      margin: 0;
    }
  }

  .hero-cta {
    padding: 1rem;
    color: colors.$highlight;
    background-color: colors.$dark;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      color: colors.$light;
    }
  }

  .hero-title {
    margin: 0;
  }

  .hero-cta-container {
    padding: 2rem;
  }

  .blog-snippets-section {
    padding: 1rem 2rem;
  }

  .blog-snippets-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 100%;
    padding: 2rem 0;
  }

  .blog-snippet,
  .service-item {
    padding: 1rem;
    background-color: colors.$light;
  }

  .blog-snippet {
    box-shadow: 0 0 4px 0 colors.$dark;
    transition: all 300ms;

    &:hover {
      transform: scale(1.025);
      box-shadow: 0 0 8px 0 colors.$dark;
    }
  }

  .services-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: colors.$medium;
  }

  .services-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .service-item {
    text-align: center;
  }
</style>
