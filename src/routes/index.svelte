{#await posts}
<div>Loading...</div>
{ posts }
{:then data}
  {#each data as post}
    {@html post.html}
  {/each}
{:catch error}
  <div>Oops! An error occurred while loading the posts.</div>
{/await}

<script>
  export let posts;
</script>
