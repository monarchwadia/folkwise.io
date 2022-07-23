<script lang="ts">
  import Icon from './icon.svelte';
  import LinkedinSquare from './icons/linkedin-square.svelte';
  import TwitterSquare from './icons/twitter-square.svelte';
  import Email2 from './icons/email2.svelte';

  import type { StaffMember } from 'src/types';

  export let author: StaffMember;

  let iconOptions = [
    {
      type: 'linkedin',
      hasProperty: author.linkedInURL
    },
    {
      type: 'twitter',
      hasProperty: author.twitterURL
    },
    {
      type: 'email',
      hasProperty: author.hasEmail
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
      <p class="bold-text teal">{author.firstName} is accepting new projects!</p>
    {:else}
      <p class="bold-text red">{author.firstName} isn't currently accepting new projects.</p>
    {/if}
    <div class="social-container">
      <p class="bold-text">Contact {author.firstName}:</p>

      {#each iconOptions as option}
        {#if option.hasProperty}
          {#if option.type === 'linkedin'}
            <a href={author.linkedInURL} target="_blank" rel="noopener noreferrer">
              <Icon>
                <LinkedinSquare />
              </Icon>
            </a>
          {:else if option.type === 'twitter'}
            <a href={author.twitterURL} target="_blank" rel="noopener noreferrer">
              <Icon>
                <TwitterSquare />
              </Icon>
            </a>
          {:else if option.type === 'email'}
            <a href="/contact">
              <Icon>
                <Email2 />
              </Icon>
            </a>
          {/if}
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
    gap: 0.5rem;
    align-items: center;
  }

  .author-image {
    width: 100%;
    box-shadow: 0 0 3px 1px colors.$dark;
  }

  .teal {
    color: colors.$highlight-green;
  }

  .red {
    color: colors.$highlight-red;
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
