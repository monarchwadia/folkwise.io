<script lang="ts">
  import Post from '$lib/post.svelte';
  import type { Post as PostType, StaffMember as StaffType } from '../../types';
  import type { PageData } from './$types';

  export let data: PageData;

  let staff: StaffType[] = data.staff;
  let posts: PostType[] = data.posts;
</script>

{#await posts}
  <div>Loading...</div>
{:then posts}
  <div class="blog-posts">
    {#each posts as post}
      {@const staffMember = staff.find((s) => s.username === post.username)}
      {#if staffMember}
        <Post {post} {staffMember} />
      {/if}
    {/each}
  </div>
{:catch error}
  <div>Oops! An error occurred while loading the posts.</div>
  <div>{error.message}</div>
{/await}

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .blog-posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 1rem auto;
  }
</style>
