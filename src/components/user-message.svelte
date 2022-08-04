<script lang="ts">
  import Xmark from './icons/xmark.svelte';
  import Error from './error.svelte';
  import Success from './success.svelte';

  export let message: string;
  export let isError: boolean;
</script>

{#if !isError}
  <Success {message} />
{:else}
  <Error {message} />
{/if}
