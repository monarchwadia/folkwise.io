<!-- Original modal architecture inspired by: https://svelte.dev/repl/514f1335749a4eae9d34ad74dc277f20?version=3.37.0 -->
<script lang="ts">
  import Icon from './icon.svelte';
  import Xmark from './icons/xmark.svelte';

  export let onClick: () => void;
  export let isOpen: boolean;

  const handleClick = (event: Event) => {
    event.preventDefault();

    onClick();
  };
</script>

<div
  class={isOpen === true ? 'modal-background visible' : 'modal-background'}
  on:click={handleClick}
>
  <div class="modal" on:click|stopPropagation={() => {}}>
    <div class="close" on:click={handleClick}>
      <Icon>
        <Xmark />
      </Icon>
    </div>
    <div class="modal-content">
      <slot />
    </div>
  </div>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .modal-background {
    visibility: hidden;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: colors.$dark-85;
  }

  .modal {
    position: relative;
    width: 85%;
    max-width: 500px;
    padding: 1rem;
    background-color: colors.$white;
    filter: drop-shadow(0 4px 4px colors.$dark);
  }

  .visible {
    visibility: visible;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;

    :global(#close-button) {
      transition: all 300ms;
    }

    &:hover {
      :global(#close-button) {
        fill: colors.$highlight-red;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .modal {
      padding: 0.75rem;
    }

    .close {
      top: 0.75rem;
      right: 0.75rem;

      :global(#close-button) {
        transform: scale(0.85);
      }
    }
  }
</style>
