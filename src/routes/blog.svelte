<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { Post as PostType, StaffMember as StaffType } from 'src/types';

  export const load: Load = async ({ fetch }) => {
    // todo: error catching
    const [postsResponse, staffResponse] = await Promise.all([
      fetch('/api/posts'),
      fetch('/api/allStaffController')
    ]);

    if (postsResponse.ok && staffResponse.ok) {
      const posts = await postsResponse.json();
      const staff = await staffResponse.json();

      return {
        props: {
          posts: posts,
          staff: staff
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
import { staffMembers } from 'src/data/staffData';

  export let posts: PostType[];
  export let staff: StaffType[];
</script>

{#await posts}
  <div>Loading...</div>
{:then data}
  <div class="blog-posts">
    {#each data as post}
      {@const staffMember = staff.find((s) => s.username === post.username) }
        {#if staffMember}
          <Post {post} staffMember={staffMember} />
        {/if}
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
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
  }
</style>
