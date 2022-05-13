<div class="post">
  {@html post.html}
  <a href={post.slug}>Link</a>
</div>

<script lang='ts'>
import type { Post } from "src/types";

export let post: Post;
</script>

<style lang="scss">
@use "src/styles/colors" as colors;

.post {
  border-bottom: 3px solid colors.$dark;
  padding: 20px 60px 60px 60px;
  background-color: colors.$light;
}
</style> 