<script lang="ts">
  import type { Post } from 'src/types';

  export let post: Post;
</script>

<div class="post">
  {@html post.html}
  <br />
  <a href={post.slug}>Link</a>
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
</style>
