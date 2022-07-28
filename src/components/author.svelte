<script lang="ts">
  import Icon from './icon.svelte';
  import LinkedinSquare from './icons/linkedin-square.svelte';
  import TwitterSquare from './icons/twitter-square.svelte';
  import Email2 from './icons/email2.svelte';
  import type { StaffMember } from 'src/types';
  import Modal from './modal.svelte';
  import ContactForm from './contact-form.svelte';

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

  const keyPress = (event: KeyboardEvent) => {
    if (event.key == 'Escape') {
      isOpen = false;
    }
  };

  let onClick = () => {
    isOpen = !isOpen;

    if (isOpen === true) {
      window.addEventListener('keydown', keyPress);
      document.body.style.overflow = 'hidden';
    } else if (isOpen === false) {
      window.removeEventListener('keydown', keyPress);
      document.body.style.overflow = '';
    }
  };

  let isOpen = false;
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
        {#if option.hasProperty && typeof option.hasProperty != 'boolean'}
          <a href={option.hasProperty} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svelte:component this={option.component} />
            </Icon>
          </a>
        {:else if option.hasProperty === true}
          <button on:click={onClick}>
            <Icon>
              <svelte:component this={option.component} />
            </Icon>
          </button>
        {/if}
      {/each}
    </div>
    {#if isOpen}
      <Modal {isOpen} {onClick}>
        <ContactForm staffMember={author} {onClick} />
      </Modal>
    {/if}
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

    button {
      padding: 0;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  .author-image {
    width: 100%;
    box-shadow: 0 0 3px 1px colors.$dark;
  }

  .accepting {
    color: colors.$highlight-green;
  }

  .not-accepting {
    color: colors.$grey;
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
