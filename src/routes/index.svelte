<script>
  let blogSnippets = [
    { title: 'Some Title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { title: 'Some Title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { title: 'Some Title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
  ];
</script>

<div class="home">
  <section class="hero">
    <h1 class="hero-title">Established approaches with fresh perspectives</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deserunt molestias
      blanditiis delectus provident necessitatibus cupiditate facere tenetur perferendis autem culpa
      in illum quibusdam, soluta possimus. Aspernatur explicabo saepe minima.
    </p>
  </section>
  <section class="blog-snippets-section">
    <h1 class="title">Wisdom Bites</h1>
    <div class="blog-snippets-container">
      {#each blogSnippets as blogSnippet}
        <div class="blog-snippet">
          <h3>{blogSnippet.title}</h3>
          <p>{blogSnippet.text}</p>
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
    padding: 2rem;
    max-width: 100%;
    height: 20vh;
    background-color: colors.$highlight;
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
