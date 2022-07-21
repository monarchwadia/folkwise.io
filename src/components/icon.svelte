<div class="icon-container">
  <slot />
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .icon-container {
    width: 1.25rem;
    padding: 0 0.5rem;

    :global(path) {
      fill: colors.$dark;
      transition: all 300ms;
    }

    &:hover {
      :global(path) {
        fill: colors.$highlight;
      }
    }
  }
</style>
