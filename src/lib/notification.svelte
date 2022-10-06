<script lang="ts">
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import Xmark from './icons/xmark.svelte';
  import { getNotification } from '../notifications';
  import { showNotification } from '../stores/showNotification';
  import type { ToastNotification } from 'src/types';
  // import { notifications } from '../stores/notifications';

  // export let message: string;
  // export let isError: boolean;

  // export let types = {
  //   default: '#0b2467',
  //   error: '#cc3e28',
  //   warning: '#ffce5c',
  //   success: '#00b0b6'
  // };

  export let notification: ToastNotification | undefined = undefined;
</script>

<!-- {#each $notifications as notification (1)} -->
<div
  class={notification ? `notification ${notification.type}` : 'notification'}
  transition:fly={{ y: -30 }}
>
  <button
    type="button"
    class="close-button"
    on:click={() => {
      showNotification.set(false);
    }}
  >
    <div class="close-button">
      <Xmark />
    </div>
  </button>

  <h4>{notification ? notification.header : ''}</h4>
  <p>{notification ? notification.message : ''}</p>
</div>

<!-- {/each} -->
<style type="scss">
  @use 'src/styles/colors' as colors;

  .notification {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: colors.$white;
    box-shadow: 0 3px 6px 0 colors.$medium;

    p {
      font-size: 0.875rem;
    }
  }

  .default {
    border-bottom: 6px solid colors.$dark;

    h4 {
      color: colors.$dark;
    }
  }

  .success {
    border-bottom: 6px solid colors.$highlight-green;

    h4 {
      color: colors.$highlight-green;
    }
  }

  .warning {
    border-bottom: 6px solid colors.$highlight;

    h4 {
      color: colors.$highlight;
    }
  }

  .error {
    border-bottom: 6px solid colors.$highlight-red;

    h4 {
      color: colors.$highlight-red;
    }
  }

  .close-button {
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    display: flex;
    width: 0.75rem;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;

    :global(#close-button) {
      fill: colors.$dark;
      margin: 0;
      padding: 0;
    }
  }
</style>
