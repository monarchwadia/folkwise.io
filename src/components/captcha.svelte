<script lang="ts">
</script>

<svelte:head>
  <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<div
  class="h-captcha"
  data-sitekey="20000000-ffff-ffff-ffff-000000000002"
  data-size="normal"
  data-theme="dark"
/>

<style type="scss">
  .h-captcha {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 750px;
  }
</style>
