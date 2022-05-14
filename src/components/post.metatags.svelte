<script lang='ts'>
import type { MetatagGenerator } from "src/services/preview/types";

import type { Post } from "src/types";

export let post: Post;
export let generators: MetatagGenerator[];

const metatags = generators.flatMap(generator => generator.metatags(post));

</script>

<svelte:head>

  {#each metatags as props}
    <metatag {...props}></metatag>
  {/each}
</svelte:head>
