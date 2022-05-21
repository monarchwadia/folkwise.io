<div class="navbar">
	<ul>
		<li class="blog-name">Monarch Wadia</li>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
	</ul>
</div>

<style type="scss">
	@use 'src/styles/colors' as colors;

	.navbar {
		background-color: colors.$dark;

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: row;
			list-style: none;
			gap: 10px;

			li {
				&.blog-name {
					color: white;
					font-weight: bolder;
				}
			}
		}
	}
</style>
