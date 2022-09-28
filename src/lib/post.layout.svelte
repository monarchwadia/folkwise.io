<script lang="ts">
  // This file is specified in svelte.config.js
  export let title: string;
  export let date: Date;
</script>

<div class="post-content-container">
  <h1>{title}</h1>
  <em class="date">
    {new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </em>
  <slot />
</div>

<style lang="scss">
  .post-content-container {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin: 0 auto;
    width: 100%;
  }
  /* For some reason, SCSS doesn't work in this file. */
</style>
