<script lang="ts">
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import Xmark from './icons/xmark.svelte';
  import { getNotification } from '../errors';
  // import { notifications } from '../stores/notifications';

  // export let message: string;
  // export let isError: boolean;

  // export let types = {
  //   default: '#0b2467',
  //   error: '#cc3e28',
  //   warning: '#ffce5c',
  //   success: '#00b0b6'
  // };
</script>

<!-- {#each $notifications as notification (1)} -->
<div class="notification" transition:fly={{ y: -30 }}>
  <button class="close-button">
    <div class="close-button">
      <Xmark />
    </div>
  </button>

  <h4>{getNotification('error').header}</h4>
  <p>{getNotification('error').message}</p>
</div>

<!-- {/each} -->
<style type="scss">
  @use 'src/styles/colors' as colors;

  .notification {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: colors.$white;
    box-shadow: 0 2px 4px 1px colors.$dark;

    p {
      font-size: 0.875rem;
    }
  }

  .default {
    border-bottom: 8px solid colors.$dark;

    h4 {
      color: colors.$dark;
    }
  }

  .success {
    border-bottom: 8px solid colors.$highlight-green;

    h4 {
      color: colors.$highlight-green;
    }
  }

  .warning {
    border-bottom: 8px solid colors.$highlight;

    h4 {
      color: colors.$highlight;
    }
  }

  .error {
    border-bottom: 8px solid colors.$highlight-red;

    h4 {
      color: colors.$highlight-red;
    }
  }

  .close-button {
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
