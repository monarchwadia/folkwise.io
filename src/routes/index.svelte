{#await posts}
<div>Loading...</div>
{ posts }
{:then data}
<div class="posts">
  {#each data as post}
  <div class="post">
    {@html post.html}
  </div>
  {/each}
</div>
{:catch error}
  <div>Oops! An error occurred while loading the posts.</div>
{/await}

<script>
  export let posts;
</script>

<style lang="scss">
  @use "../styles/colors" as colors;

  .posts {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .post {
    border-radius: 0px 100px 100px 100px;
    border: 10px solid darken(colors.$light, 30);
    padding: 90px 60px;
    background-color: colors.$light;
  }
</style> 