<script lang='ts'>
  import type { Metatag, MetatagGenerator } from "src/services/preview/types";
  import { page } from '$app/stores';
  import { getPostbyId } from "src/services/posts";
  import generators from "src/services/preview/metatag-generators";

  let metatags: Metatag[] = [];
  const { postId } = $page.params;
  const post = postId && getPostbyId(postId);

  if (post) {
    metatags = generators.flatMap(generator => generator.metatags(post));
  }
</script>

<svelte:head>
  {#each metatags as props}
    <metatag {...props} />
  {/each}
</svelte:head>
