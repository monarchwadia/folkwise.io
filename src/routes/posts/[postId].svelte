<a href="/" class="read-more">← Read more</a>
{#await post}
  <div>Loading...</div>
{:then} 
  <Post post={post}></Post>  
{:catch}
  <div>An unexpected error occurred.</div>
{/await}

<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import MetatagGenerators from "src/services/preview/metatag-generators";
  
    export const load: Load = async ({ fetch, params }) => {
      // todo: error catching
      const { postId } = params;
      const response = await fetch("/api/posts/" + postId)
      
      if (response.ok) {
        const json = await response.json()
        return {
          props: {
            post: json,
            generators: MetatagGenerators
          }
        }
      } else {
        return {
          status: 404
        }
      }
    }
  
  </script>

<script lang='ts'>
import PostMetatags from "src/components/post.metatags.svelte";
import Post from "src/components/post.svelte";
import type { Post as PostType} from "src/types";
import type { MetatagGenerator } from "src/services/preview/types";

export let generators: MetatagGenerator[];
export let post: PostType;

</script>

<style>
  .read-more {
    font-size: 24px;
  }
</style>
