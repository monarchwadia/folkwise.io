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

<a href="/" class="read-more">← Read more</a>
{#await post}
  <div>Loading...</div>
{:then}
  <Post {post} />
{:catch}
  <div>An unexpected error occurred.</div>
{/await}

<style>
  .read-more {
    font-size: 24px;
    margin: 2rem 0 1rem 2.5rem;
  }
</style>
