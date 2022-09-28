<script lang="ts">
  import type { Post as PostType } from '../types';
  import Podcast from '$lib/podcast.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const posts: PostType[] = data.posts;
</script>

<div class="home">
  <div class="blog-snippets-container">
    {#each posts as post}
      <div class="blog-snippet">
        <div class="text-container">
          <h3 class="title">{post.title}</h3>
          <em class="date">
            {new Date(post.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </em>
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

  // .blog-header {
  //   padding: 1rem sizing.$gutters;
  //   font-size: 2rem;
  //   font-weight: 700;
  //   background: colors.$white;
  // }

  .blog-snippets-container {
    display: flex;
    flex-direction: column;
  }

  .blog-snippet {
    display: grid;
    grid-template-columns: 80% 1fr;
    gap: 0;
    align-items: center;
    justify-content: space-between;
    padding: 2rem sizing.$gutters;
    background-color: colors.$light;
    transition: all ease-in 300ms;
    &:hover {
      background-color: colors.$white;
    }
    &:hover .snippet-read-more {
      opacity: 1;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 0;
    }
    .date {
      margin-bottom: 0.75rem;
    }
  }

  .snippet-read-more {
    opacity: 0;
    position: relative;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    transition: all 300ms;
    justify-self: flex-end;
    padding-top: 1rem;

    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background-color: colors.$highlight-red;
      opacity: 0;
      transition: all 300ms;
    }

    &:hover {
      color: colors.$highlight-red;

      &::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background-color: colors.$highlight-red;
        opacity: 1;
        transition: all 300ms;
      }
    }
  }

  .podcast-section {
    margin: 0 auto;
    padding: 2rem 0;
    // background-color: colors.$dark;
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
