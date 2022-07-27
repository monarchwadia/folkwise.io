<script context="module" lang="ts">
  interface ModalMap {
    [key: string]: {
      open: Function;
      close: Function;
    };
  }

  let onTop: Node;
  const modals: ModalMap = {};

  export const getModal = (id: string = '') => {
    return modals[id];
  };
</script>

<script lang="ts">
  import Icon from './icon.svelte';
  import Xmark from './icons/xmark.svelte';
  import { onDestroy } from 'svelte';

  let topDiv: Node;
  let visible = false;
  let prevOnTop: Node;
  let closeCallback: Function;

  export let id = '';

  const keyPress = (event: KeyboardEvent) => {
    if (event.key == 'Escape' && onTop == topDiv) {
      close();
    }
  };

  /** API **/
  const open = (callback: Function) => {
    closeCallback = callback;
    if (visible) return;
    prevOnTop = onTop;
    onTop = topDiv;
    window.addEventListener('keydown', keyPress);
    document.body.style.overflow = 'hidden';
    visible = true;
    document.body.appendChild(topDiv);
  };

  const close = (retVal = undefined) => {
    if (!visible) return;
    window.removeEventListener('keydown', keyPress);
    onTop = prevOnTop;
    if (onTop == null) document.body.style.overflow = '';
    visible = false;
    if (closeCallback) closeCallback(retVal);
  };

  modals[id] = { open, close };

  onDestroy(() => {
    delete modals[id];
    window.removeEventListener('keydown', keyPress);
  });
</script>

<div class="modal-background" class:visible bind:this={topDiv} on:click={() => close()}>
  <div class="modal" on:click|stopPropagation={() => {}}>
    <div class="close" on:click={() => close()}>
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
    background-color: colors.$dark-50;
  }

  .modal {
    position: relative;
    width: 75%;
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
</style>
