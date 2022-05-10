{#await posts}
<div>Loading...</div>
{:then data}
<div class="posts">
  {#each data as post}
    <Post post={post} />
  {/each}
</div>
{:catch error}
  <div>Oops! An error occurred while loading the posts.</div>
{/await}

<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    // todo: error catching
    const response = await fetch("/api/posts")
    
    if (response.ok) {
      const json = await response.json()
      return {
        props: {
          posts: json
        }
      }
    } else {
      return {
        status: 404
      }
    }
  }

</script>

<script>
  import Post from "../components/post.svelte";
  export let posts;
</script>

<style lang="scss">
  .posts {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
</style> 