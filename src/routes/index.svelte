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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deserunt molestias
        blanditiis delectus provident necessitatibus cupiditate facere tenetur perferendis autem
        culpa in illum quibusdam, soluta possimus. Aspernatur explicabo saepe minima.
      </p>
    </div>
    <div class="hero-cta-container">
      <a class="hero-cta" href="/">Create with us</a>
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
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    p {
      margin: 0;
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
    background-color: colors.$light;
  }

  .blog-snippets-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    padding: 2rem 0;
  }

  .blog-snippet,
  .service-item {
    padding: 1rem;
  }

  .services-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: colors.$highlight-red;
  }

  .service-item {
    text-align: center;
  }
</style>
