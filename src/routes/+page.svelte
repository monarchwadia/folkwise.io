<!-- <script context="module" lang="ts">
  throw new Error(
    /*Done, I think*/ '@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)'
  );

  import type { Load } from '@sveltejs/kit';

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
</script> -->

<script lang="ts">
  import type { Post as PostType } from '../types';
  import Hero from '$lib/hero.svelte';
  import Podcast from '$lib/podcast.svelte';

  // throw new Error(
  //  /*Done, I think*/ '@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
  // );

  interface Data {
    posts: PostType[];
  }
  export let data: Data;
</script>

<div class="home">
  <Hero />
  <section class="blog-snippets-section">
    <div class="blog-snippets-container">
      {#each data.posts as post}
        <div class="blog-snippet">
          <div class="text-container">
            <h3>{post.title}</h3>
            <p class="base-text">{post.excerpt}</p>
          </div>
          <a class="snippet-read-more" href={post.slug}>Read more →</a>
        </div>
      {/each}
    </div>
  </section>
  <section class="podcast-section">
    <div class="playlist-container">
      <h1>The Folkwise Podcast</h1>
      <Podcast />
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
  }

  .blog-snippet {
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
  }

  .snippet-read-more {
    position: relative;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    transition: all 300ms;
    justify-self: flex-end;
    padding-top: 1rem;

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

  .podcast-section {
    margin: 0 auto;
    padding: 2rem 0;
  }

  .playlist-container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0;

    h1 {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .blog-snippets-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>
