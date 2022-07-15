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
  import Hero from '../components/hero.svelte';

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
    }
  ];
  export let posts: PostType[];
</script>

<div class="home">
  <Hero />
  <section class="blog-snippets-section">
    <div class="blog-snippets-container">
      {#each posts as post}
        <div class="blog-snippet">
          <div class="text-container">
            <h3>{post.title}</h3>
            <p class="base-text">{post.excerpt} ...</p>
          </div>
          <a class="snippet-read-more" href={post.slug}>Read more →</a>
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
          <p class="base-text">{blogSnippet.text}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .blog-snippets-section {
    margin: 0 auto;
    padding: 2rem 0;
  }

  .blog-snippets-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .blog-snippet,
  .service-item {
    padding: 1rem;
    background-color: colors.$white;
  }

  .blog-snippet {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: left;
    justify-content: space-between;
    box-shadow: 0 0 3px 0 colors.$dark;
    transition: all 300ms;

    h3,
    p {
      margin: 0 0 1rem 0;
    }
    // &:hover {
    //   transform: scale(1.025);
    //   box-shadow: 0 0 6px 0 colors.$dark;
    // }
  }

  .snippet-read-more {
    position: relative;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    transition: all 300ms;
    justify-self: flex-end;

    &:hover {
      color: colors.$dark;

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
      background-color: colors.$dark;
      opacity: 0;
      transition: all 300ms;
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
    max-width: 1000px;
    margin: 0 auto;
  }

  .service-item {
    text-align: center;
  }
</style>
