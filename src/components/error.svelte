<script lang="ts">
  import Xmark from './icons/xmark.svelte';

  export let errorMessage: string;
</script>

<div class="error-container">
  <button class="close-button">
    <Xmark />
  </button>

  <h3>Whoops!</h3>
  <p>{errorMessage}</p>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .error-container {
    position: relative;
    max-width: 750px;
    margin: 1rem auto;
    padding: 1rem;
    background-color: colors.$white;
    border-bottom: 16px solid colors.$highlight-red;
    box-shadow: 0 2px 4px 1px colors.$dark;

    h3 {
      color: colors.$highlight-red;
    }
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    display: flex;
    width: 0.875rem;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;

    :global(#close-button) {
      fill: colors.$white;
      margin: 0;
      padding: 0;
    }
  }
</style>
