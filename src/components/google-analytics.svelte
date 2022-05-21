<script>
	import { page } from '$app/stores';

	$: {
		// @ts-ignore
		if (typeof window !== 'undefined' && window.gtag) {
			// @ts-ignore
			gtag('config', 'G-8L122FC7R2', {
				page_path: $page.url
			});
		}
	}
</script>
