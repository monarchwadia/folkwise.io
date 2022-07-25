<script lang="ts">
  import Icon from './icon.svelte';
  import LinkedinSquare from './icons/linkedin-square.svelte';
  import TwitterSquare from './icons/twitter-square.svelte';
  import Email2 from './icons/email2.svelte';

  import type { StaffMember } from 'src/types';

  export let author: StaffMember;

  let iconOptions = [
    {
      hasProperty: author.linkedInURL,
      component: LinkedinSquare
    },
    {
      hasProperty: author.twitterURL,
      component: TwitterSquare
    },
    {
      hasProperty: author.hasEmail,
      component: Email2
    }
  ];
</script>

<br />
<div class="author-container">
  <div class="bio-container">
    <img src={author.imgURL} alt={author.firstName} class="author-image" />

    <div class="bio">
      <h3>{author.firstName} {author.lastName}</h3>
      <p>{author.miniBio}</p>
    </div>
  </div>
  <div class="cta-container">
    {#if author.isAcceptingProjects === true}
      <p class="bold-text accepting">{author.firstName} is accepting new projects!</p>
    {:else}
      <p class="bold-text not-accepting">
        {author.firstName} isn't currently accepting new projects.
      </p>
    {/if}
    <div class="social-container">
      <p class="bold-text">Contact {author.firstName}:</p>

      {#each iconOptions as option}
        {#if option.hasProperty}
          <a
            href={option.hasProperty === true ? '/contact' : option.hasProperty}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <svelte:component this={option.component} />
            </Icon>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .author-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }

  .bio-container {
    display: grid;
    grid-template-columns: 20% 70%;
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
    gap: 1rem;
    align-items: center;
  }

  .author-image {
    width: 100%;
    box-shadow: 0 0 3px 1px colors.$dark;
  }

  .accepting {
    color: colors.$highlight-green;
  }

  .not-accepting {
    color: colors.$medium;
  }

  @media screen and (max-width: 768px) {
    .author-container {
      width: 100%;
    }
  }

  @media screen and (max-width: 440px) {
    .author-image {
      display: none;
    }

    .bio-container {
      grid-template-columns: 1fr;
    }

    .bio {
      justify-content: flex-end;

      p {
        display: none;
      }
    }
  }
</style>
