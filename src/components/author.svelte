<script lang="ts">
  import type { Author } from 'src/types';

  export let author: Author;
</script>

<div class="author-container">
  <div class="bio-container">
    <img src={author.imgURL} alt={author.name} class="author-image" />

    <div class="bio">
      <h2>{author.name}</h2>
      <p class="base-text">{author.miniBio}</p>
    </div>
  </div>
  <div class="cta-container">
    <b>{author.projectStatus}</b>
    <a href={author.contactEmail}>Click here to contact {author.name}.</a>
  </div>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .author-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 62.5%;
    margin-top: 1rem;
  }

  .bio-container {
    display: grid;
    grid-template-columns: 25% 60%;
    grid-gap: 0.75rem;
  }

  .bio {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .author-image {
    width: 100%;
  }
</style>
