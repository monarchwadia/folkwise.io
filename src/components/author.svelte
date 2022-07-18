<script lang="ts">
  import type { Author } from 'src/types';

  export let author: Author;
</script>

<div class="author-container">
  <h2>{author.name}</h2>
  <img src={author.imgURL} alt={author.name} class="author-image" />
  <p>{author.miniBio}</p>
  <b>{author.projectStatus}</b>
  <br />
  <a href={author.contactEmail}>Click here to contact {author.name}.</a>
</div>

<style type="scss">
  .author-container {
    display: flex;
    flex-direction: column;
  }

  .author-image {
    width: 200px;
    height: 200px;
  }
</style>
