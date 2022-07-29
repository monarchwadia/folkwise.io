<script lang="ts">
  let source: string;
</script>

<div class="podcast-container">
  <div class="player-container">
    <img
      class="podcast-thumb"
      src="/assets/podcast-thumb-rough.jpg"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut labore praesentium. Sequi
        officia veritatis molestias. Animi fugit laboriosam sunt fugiat nesciunt? Corporis iste
        animi veritatis
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
    padding: 1rem;
    max-width: 750px;
    margin: 0 auto;
    border-radius: 25px;
    background-image: linear-gradient(
      to right,
      colors.$dark,
      colors.$dark-50,
      colors.$dark,
      colors.$dark
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: 120%, 120%;

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
    gap: 0.5rem;
    align-items: center;
    text-align: center;

    img {
      width: 80%;
      border-radius: 50%;
    }

    p {
      font-size: 0.875rem;
    }
  }
</style>
