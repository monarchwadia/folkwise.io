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

<script context="module">
  export async function load() {
    const url = `http://localhost:3000/posts`;
    const response = await fetch(url);

    if (!response.ok) {
      return {
        status: response.status
      }
    }

    const posts = await response.json()

    console.log("JSON", posts);

    return {
      status: response.status,
      props: {
        posts
      }
    }
  }
</script>

<script>
  export /**
* @type {any}
*/
   let posts;
</script>