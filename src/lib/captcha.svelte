<script lang="ts">
  export let handleSubmit: () => void;
</script>

<svelte:head>
  <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<div
  id="hcaptcha"
  class="h-captcha"
  data-sitekey="20000000-ffff-ffff-ffff-000000000002"
  data-size="invisible"
  data-callback={handleSubmit}
/>

<style type="scss">
  .h-captcha {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 750px;
  }
</style>
