{#await post}
  <div>Loading...</div>
{:then} 
  <Post post={post}></Post>  
{:catch}
  <div>An unexpected error occurred.</div>
{/await}

<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  
    export const load: Load = async ({ fetch, params }) => {
      // todo: error catching
      const { id } = params;
      const response = await fetch("/api/posts/" + id)
      
      if (response.ok) {
        const json = await response.json()
        return {
          props: {
            post: json
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
  import Post from "../../components/post.svelte"
  export let post;
</script>

