<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, params }) => {
    // todo: error catching
    const { postId } = params;
    const response = await fetch('/api/posts/' + postId);

    if (response.ok) {
      const json = await response.json();
      return {
        props: {
          post: json
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
  import Post from 'src/components/post.svelte';
  import type { Post as PostType } from 'src/types';
  export let post: PostType;
</script>

<div class="single-post-container">
  <a href="/" class="read-more">← Read more</a>
  {#await post}
    <div>Loading...</div>
  {:then}
    <Post {post} />
  {:catch}
    <div>An unexpected error occurred.</div>
  {/await}
</div>

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .single-post-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .read-more {
    position: relative;
    width: fit-content;
    margin: 2rem 0 1rem 0;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    transition: all 300ms;

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
</style>
