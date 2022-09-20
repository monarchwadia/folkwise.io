<script lang="ts">
  import { page } from '$app/stores';

  // eslint-disable-next-line
  const gtag: any = typeof window !== 'undefined' && (<any>window).gtag;

  $: {
    if (gtag) {
      gtag('config', 'G-8L122FC7R2', {
        page_path: $page.url
      });
    }
  }
</script>
