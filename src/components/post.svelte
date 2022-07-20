<script lang="ts">
  import type { Post } from 'src/types';
  export let post: Post;

  import { getStaffMemberByID } from 'src/services/staffService';
  import type { StaffMember } from 'src/types';
  import Author from './author.svelte';

  export let author: StaffMember = getStaffMemberByID(post.uuid);
</script>

<div class="post">
  {@html post.html}
  <br />
  <div>
    <Author {author} />
  </div>
  <br />
  <a class="post-link" href={post.slug}>Link to this post</a>
</div>

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .post {
    max-width: 1000px;
    border-bottom: 3px solid colors.$dark;
    margin: 1rem 0;
    padding: 2rem;
    background-color: colors.$white;

    a {
      color: colors.$highlight-red;
    }
  }

  .post-link {
    position: relative;
    font-weight: 600;
    text-decoration: none;
    transition: all 300ms;

    &:hover {
      color: colors.$dark;

      &::after {
        opacity: 1;
      }
    }

    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background-color: colors.$dark;
      opacity: 0;
      transition: all 300ms;
    }
  }

  @media screen and (max-width: 768px) {
    .post {
      padding: 1rem;
    }
  }
</style>
