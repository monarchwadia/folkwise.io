<script>
  // This file is specified in svelte.config.js
  export let title;
  export let date;
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
  /* For some reason, SCSS doesn't work in this file. */
</style>
