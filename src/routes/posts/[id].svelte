<svelte:head>
  <PostMetatags post={post} />
</svelte:head>
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

<script lang='ts'>
  import PostMetatags from "src/components/post.metatags.svelte";
import { createHtmlMetadata } from "src/services/preview/create-html-metadata";
import Post from "src/components/post.svelte";
import type { Post as PostType} from "src/types";
export let post: PostType;

const metadata = createHtmlMetadata(post);

</script>

<style>
  .read-more {
    font-size: 24px;
  }
</style>
