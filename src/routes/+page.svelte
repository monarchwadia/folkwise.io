<script lang="ts">
  import type { Post as PostType } from '../types';
  import Podcast from '$lib/podcast.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const posts: PostType[] = data.posts;
</script>

<div class="home">
  <div class="blog-snippets-container">
    <div class="blog-header">What we belive in:</div>
    {#each posts as post}
      <div class="blog-snippet">
        <div class="text-container">
          <h3>{post.title}</h3>
          <p class="base-text">{post.excerpt}</p>
        </div>
        <a class="snippet-read-more" href={post.slug}>Read more →</a>
      </div>
    {/each}
  </div>
  <section class="podcast-section">
    <div class="playlist-container">
      <h1>The Folkwise Podcast</h1>
      <Podcast />
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;
  @use 'src/styles/sizing' as sizing;


  .blog-header {
    padding: 1rem sizing.$gutters;
    font-size: 2rem;
    font-weight: 700;
    background: colors.$white;
  }

  .blog-snippets-container {
    display: flex;
    flex-direction: column;
  }

  .blog-snippet {
    display: flex;
    flex-direction: row;
    gap: 0;
    align-items: left;
    justify-content: space-between;
    padding: 2rem sizing.$gutters;
    background-color: colors.$lightgrey;
    transition: all ease-in 1s;
    &:hover {
      background-color: colors.$white;
    }
    &:hover .snippet-read-more {
      opacity: 1;
    }
  }

  .snippet-read-more {
    opacity: 0;
    position: relative;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    transition: all 2s;
    justify-self: flex-end;
    padding-top: 1rem;
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
</style>
