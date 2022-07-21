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

  export let posts: PostType[];
  export let staff: StaffType[];
</script>

{#await posts}
  <div>Loading...</div>
{:then data}
  <div class="blog-posts">
    {#each data as post}
      <Post {post} staffMember={staff.find((s) => s.uuid === post.uuid)} />
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
    gap: 0;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 1rem;
    padding-inline: 1rem;
  }

  @media screen and (max-width: 440px) {
    .blog-posts {
      padding-inline: 0;
    }
  }
</style>
