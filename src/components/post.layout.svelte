<script>
  // This file is specified in svelte.config.js
  export let title;
  export let date;
</script>

<div class="post">
  <h1>{ title }</h1>
  <p class="date">on: {date}</p>
  <slot></slot>
</div>
