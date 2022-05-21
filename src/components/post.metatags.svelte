<script lang="ts">
  import type { Metatag } from 'src/services/preview/types';
  import { page } from '$app/stores';
  import { getPostbyId } from 'src/services/posts';
  import generators from 'src/services/preview/metatag-generators';

  let metatags: Metatag[] = [];
  const { postId } = $page.params;
  const post = postId && getPostbyId(postId);

  if (post) {
    metatags = generators.flatMap((generator) => generator.metatags(post));

    // some simple sanity checks
    const checks: { [key: string]: (val: string) => boolean } = {
      'og:description': (val: string) => val?.length > 100 // LinkedIn needs 100+ length
    };

    metatags.forEach(({ key, content }) => {
      if (checks[key] && !checks[key](content)) {
        console.warn(
          `WARNING! Frontmatter validation failed for post [${post.id}], metatag property [${key}]`
        );
      }
    });
  }
</script>

<svelte:head>
  {#each metatags as metatag}
    <meta
      {...{
        /* we're just spreading the props here.. nothing special */
        [metatag.type]: metatag.key,
        content: metatag.content
      }}
    />
  {/each}
</svelte:head>
