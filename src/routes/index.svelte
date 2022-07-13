<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { Post as PostType } from 'src/types';

  export const load: Load = async ({ fetch }) => {
    // todo: error catching
    const response = await fetch('/api/posts');

    if (response.ok) {
      const json = await response.json();
      return {
        props: {
          posts: json
        }
      };
    } else {
      return {
        status: 404
      };
    }
  };
</script>

<script lang="ts">
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
  export let posts: PostType[];
</script>

<div class="home">
  <section class="hero">
    <div class="hero-text-container">
      <h1 class="hero-title">We build software that grows your tribe.</h1>
      <p>We're custom software developers who understand revenue growth and marketing.</p>
    </div>
    <div class="hero-cta-container">
      <a class="hero-cta" href="/">Let's grow.</a>
    </div>
  </section>
  <section class="blog-snippets-section">
    <div class="blog-snippets-container">
      {#each posts as post}
        <div class="blog-snippet">
          <h3>{post.title}</h3>
          <p>{post.excerpt} ...</p>
          <a href={post.slug}>Read more →</a>
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
    grid-template-columns: 60% 40%;
    max-width: 100%;
    background-color: colors.$medium;
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
    box-shadow: 0 0 3px 0 colors.$dark;
    transition: all 300ms;

    &:hover {
      transform: scale(1.025);
      box-shadow: 0 0 6px 0 colors.$dark;
    }
  }

  .services-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: transparent;
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
