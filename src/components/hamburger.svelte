<script lang="ts">
  export let onClick: () => void;
  export let isOpen: boolean;
  const handleClick = (e: Event) => {
    e.preventDefault();

    onClick();
  };
</script>

<!-- Source code inspired by: https://codepen.io/designcouch/pen/ExvwPY -->

<div
  id="nav-icon2"
  class={isOpen === true ? 'open hidden-hamburger' : 'hidden-hamburger'}
  on:click={handleClick}
>
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  #nav-icon2 {
    position: relative;
    width: 1.25rem;
    height: 1rem;
    cursor: pointer;
  }

  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 2px;
    width: 50%;
    background: colors.$highlight;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon2 span:nth-child(even) {
    left: 50%;
  }

  #nav-icon2 span:nth-child(odd) {
    left: 0;
  }

  #nav-icon2 span:nth-child(1),
  #nav-icon2 span:nth-child(2) {
    top: 0;
  }

  #nav-icon2 span:nth-child(3),
  #nav-icon2 span:nth-child(4) {
    top: 0.4375rem;
  }

  #nav-icon2 span:nth-child(5),
  #nav-icon2 span:nth-child(6) {
    top: 0.875rem;
  }

  #nav-icon2.open span:nth-child(1),
  #nav-icon2.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon2.open span:nth-child(2),
  #nav-icon2.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon2.open span:nth-child(1) {
    left: 2.5px;
    top: 0.25rem;
  }

  #nav-icon2.open span:nth-child(2) {
    left: calc(50% - 2.5px);
    top: 0.25rem;
  }

  #nav-icon2.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(5) {
    left: 2.5px;
    top: 0.625rem;
  }

  #nav-icon2.open span:nth-child(6) {
    left: calc(50% - 2.5px);
    top: 0.625rem;
  }

  .hidden-hamburger {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    .hidden-hamburger {
      display: none;
    }
  }
</style>
