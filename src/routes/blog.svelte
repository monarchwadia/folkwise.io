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
  import Post from 'src/components/post.svelte';
  export let posts: PostType[];
</script>

{#await posts}
  <div>Loading...</div>
{:then data}
  <div class="blog-posts">
    {#each data as post}
      <Post {post} />
    {/each}
  </div>
{:catch error}
  <div>Oops! An error occurred while loading the posts.</div>
{/await}

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .blog-posts {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 1rem;
    padding-inline: 1rem;
  }
</style>
