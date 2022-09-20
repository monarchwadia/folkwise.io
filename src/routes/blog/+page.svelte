<!-- <script context="module" lang="ts">
  /*done, I think*/ throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import type { Load } from '@sveltejs/kit';
  // 

  // export const load: Load = async ({ fetch }) => {
  //   // todo: error catching
  //   const [postsResponse, staffResponse] = await Promise.all([
  //     fetch('/api/posts'),
  //     fetch('/api/allStaffController')
  //   ]);

  //   if (postsResponse.ok && staffResponse.ok) {
  //     const posts = await postsResponse.json();
  //     const staff = await staffResponse.json();

  //     return {
  //       props: {
  //         posts: posts,
  //         staff: staff
  //       }
  //     };
  //   } else {
  //     return {
  //       status: 404
  //     };
  //   }
  // };
</script> -->
<script lang="ts">
  throw new Error(
   /*HELP*/ '@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
  );
  import Post from '$lib/post.svelte';
  import { staffMembers } from '../../data/staffData';
  import type { Post as PostType, StaffMember as StaffType } from '../../types';

  interface Data {
    posts: PostType[];
    staff: StaffType[];
  }

  export let data: Data;
  // export let posts: PostType[];
  // export let staff: StaffType[];
</script>

{#await data.posts}
  <div>Loading...</div>
{:then data}
  <div class="blog-posts">
    {#each data as post}
      {@const staffMember = data.staff.find((s) => s.username === post.username)}
      {#if staffMember}
        <Post {post} {staffMember} />
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
