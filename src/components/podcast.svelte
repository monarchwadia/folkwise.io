<script lang="ts">
  let source: string;
</script>

<div class="podcast-container">
  <div class="player-container">
    <img
      class="podcast-thumb"
      src="/assets/Folkwise_podcast_cover.png"
      alt="people around a gold sphere"
      srcset=""
    />
    <audio controls>
      <source src="/assets/audio/takeone.mp3" />
    </audio>
  </div>
  <div class="info-container">
    <div class="episode-info">
      <h2>Episode 1</h2>
      <p>
        Meet the host, and meet the team! David moderates a great discussion where Monarch breaks
        down what he thinks is missing in the tech industry and the gang gets sidetracked
        reminiscing about old video games.
      </p>
    </div>
    <div class="guests-container">
      <div class="guest">
        <p class="bold-text">Host</p>
        <img src="/assets/david-optimized.jpg" alt="host david" />
        <p>David Marshall</p>
      </div>
      <div class="guest">
        <p class="bold-text">Guest</p>
        <img src="/assets/monarch-optimized.jpg" alt="host david" />
        <p>Monarch Wadia</p>
      </div>
      <div class="guest">
        <p class="bold-text">Guest</p>
        <img src="/assets/josh.jpg" alt="host david" />
        <p>Josh White</p>
      </div>
    </div>
  </div>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .podcast-container {
    display: flex;
    gap: 1rem;
    padding: 3rem 2rem;
    max-width: 750px;
    margin: 0 auto;
    border-radius: 25px;
    background-image: linear-gradient(
        to right,
        colors.$dark,
        colors.$dark-50,
        colors.$dark,
        colors.$dark
      ),
      url('/assets/kikko-light-optimized.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 175%, 120%;

    :global(h2),
    :global(p) {
      color: colors.$white;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    justify-content: space-between;
  }

  .podcast-thumb {
    width: 100%;
    box-shadow: 0 0 6px 2px colors.$medium;
  }

  audio {
    width: 100%;
    margin-top: 1rem;
  }

  .guests-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }

  .guest {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    text-align: center;

    img {
      width: 70%;
      border-radius: 50%;
    }

    p {
      font-size: 0.75rem;
    }
  }
</style>
