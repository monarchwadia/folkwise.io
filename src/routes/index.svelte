<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { Post as PostType } from 'src/types';
  import Podcast from 'src/components/podcast.svelte';

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
  import UserMessage from 'src/components/user-message.svelte';

  export let posts: PostType[];
</script>

<div class="home">
  <Hero />
  <section class="blog-snippets-section">
    <!-- <UserMessage isError={false} message="What an informative message!" />
    <UserMessage isError={true} message="What a catastrophic error!" /> -->
    <div class="blog-snippets-container">
      {#each posts as post}
        <div class="blog-snippet">
          <div class="text-container">
            <h4>{post.title}</h4>
            <p class="date">
              {new Date(post.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p class="base-text">{post.excerpt}</p>
          </div>
          <a class="snippet-read-more" href={post.slug}>read more →</a>
        </div>
      {/each}
    </div>
  </section>
  <section class="podcast-section">
    <div class="playlist-container">
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
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
  }

  .blog-snippet {
    display: flex;
    align-items: left;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    background-color: colors.$light;
    // box-shadow: 0 0 3px 0 colors.$dark;
    transition: all 400ms;

    .date {
      margin-bottom: 1rem;
      font-size: 0.875rem;
      font-style: italic;
    }

    p {
      font-size: 0.875rem;
    }

    .text-container {
      max-width: 60%;
    }

    .snippet-read-more {
      position: relative;
      display: none;
      width: fit-content;
      font-size: 0.875rem;
      font-weight: 500;
      font-variant: small-caps;
      color: colors.$highlight-green;
      text-decoration: none;
      transition: all 300ms;
      align-self: center;
      transition: all 300ms;

      &:hover {
        color: colors.$dark;

        &::after {
          opacity: 1;
        }
      }

      &::after {
        position: absolute;
        bottom: -3px;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background-color: colors.$dark;
        opacity: 0;
        transition: all 300ms;
      }
    }

    &:hover {
      background-color: colors.$white;
      margin: 0 -4rem;
      padding: 1.5rem 5rem;
      .snippet-read-more {
        display: block;
        transition: all 300ms;
      }
    }
  }

  .podcast-section {
    position: relative;
    margin: 0 -1rem;
    padding: 1rem 0;
    background-image: radial-gradient(
      farthest-corner at 850px 400px,
      colors.$dark-50 0%,
      colors.$dark 70%
    );
    background-size: 120%;
  }

  .podcast-section::before {
    content: '';
    position: absolute;
    background-image: url('/assets/kikko-optimized.svg');
    background-size: 110%;
    background-position: -20% 20%;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.25;
  }

  .playlist-container {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .blog-snippets-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>
