<div class="icon-container">
  <slot />
</div>

<!-- Svelte docs for :global() selector: https://svelte.dev/docs#component-format-style -->

<!-- add class="icon" to the path of an SVG you want to use in this component -->
<style type="scss">
  @use 'src/styles/colors' as colors;

  .icon-container {
    width: 1.25rem;
    padding: 0 0.5rem;
    cursor: pointer;

    :global(.icon) {
      fill: colors.$dark;
      transition: all 300ms;
    }

    &:hover {
      :global(.icon) {
        fill: colors.$highlight-red;
      }
    }
  }
</style>
