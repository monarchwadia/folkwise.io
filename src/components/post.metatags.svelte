<script lang='ts'>
import { createHtmlMetadata } from "src/services/preview/create-html-metadata";

import type { Post } from "src/types";

export let post: Post;
const metadata = createHtmlMetadata(post);
</script>


<meta property="og:image" content={metadata["og:image"]} />
<meta property="og:title" content={metadata["og:title"]} />
<meta property="og:url" content={metadata["og:url"]} />
<meta property="og:type" content={metadata["og:type"]} />
