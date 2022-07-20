<script lang="ts">
  import LinkedinSquare from './icons/linkedin-square.svelte';
  import TwitterSquare from './icons/twitter-square.svelte';
  import Email2 from './icons/email2.svelte';

  import type { StaffMember } from 'src/types';
  export let author: StaffMember;
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
    <div class="social-container">
      <p class="base-text">Contact {author.name}:</p>
      <LinkedinSquare size="1.25rem" fillColor="#0b2647" hoverColor="#ffce5c" />
      <TwitterSquare size="1.25rem" fillColor="#0b2647" hoverColor="#ffce5c" />
      <Email2 size="1.25rem" fillColor="#0b2647" hoverColor="#ffce5c" />
    </div>
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

  .social-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .author-image {
    width: 100%;
    box-shadow: 0 0 3px 1px colors.$dark;
  }

  @media screen and (max-width: 768px) {
    .author-container {
      width: 100%;
    }
  }

  @media screen and (max-width: 440px) {
    .bio {
      justify-content: flex-end;

      p {
        display: none;
      }
    }
  }
</style>
