<script lang="ts">
  let podcastURLs = [
    {
      liveURL: 'https://podcasts.apple.com/us/podcast/the-folkwise-podcast/id1636400853',
      imgURL: '/assets/apple-podcasts-badge.svg'
    },
    {
      liveURL:
        'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5yZWRjaXJjbGUuY29tLzZlNGU2NzFkLTFhMDEtNGNmYi05ODBmLWY5YWVjMGRkZWZkYg==',
      imgURL: '/assets/google-podcasts-badge.svg'
    },
    {
      liveURL: 'https://www.stitcher.com/show/the-folkwise-podcast',
      imgURL: '/assets/stitcher-podcasts-badge.png'
    },
    {
      liveURL: 'https://radiopublic.com/the-folkwise-podcast-6rXjAa',
      imgURL: '/assets/radiopublic-podcasts-badge.png'
    }
  ];
</script>

<div class="podcast-container">
  <div class="top-container">
    <img
      class="thumb"
      src="/assets/Folkwise_podcast_cover.png"
      alt="a community of people sitting around a gold ball"
    />
    <div class="info-container">
      <h2>The Folkwise Podcast</h2>

      <div class="host">
        <img src="/assets/david-optimized.jpg" alt="host david" />
        <p>Hosted by David Marshall</p>
      </div>
      <div class="listen-info">
        <p>Check out the latest episode on Spotify:</p>
        <iframe
          style="border-radius:12px; box-shadow: 0 0 2px 0 white"
          src="https://open.spotify.com/embed/show/73RAoxiaE3Qs08EvePd8io?utm_source=generator&theme=0"
          width="100%"
          height="auto"
          title="folkwise podcast"
          frameBorder="0"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <!-- <p>Listen wherever you get your podcasts:</p> -->
        <!-- <div class="listen-links-container">
          {#each podcastURLs as podcastURL}
            <div class="listen-link">
              <a href={podcastURL.liveURL} target="_blank" rel="noopener noreferrer">
                <img src={podcastURL.imgURL} alt="podcast provider badge" srcset="" />
              </a>
            </div>
          {/each}
        </div> -->
      </div>
    </div>
  </div>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .podcast-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-width: 750px;
    margin: 0 auto;
    border-radius: 25px;

    :global(h2),
    :global(p) {
      color: colors.$white;
    }
  }

  .top-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .thumb {
    width: 100%;
    border-radius: 20px;
  }

  .info-container {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .host {
    display: grid;
    grid-template-columns: 25% 30%;
    gap: 0.75rem;
    align-items: center;

    img {
      width: 100%;
      border-radius: 50%;
    }

    p {
      font-size: 0.75rem;
    }
  }

  .listen-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    p {
      font-size: 0.75rem;
    }
  }

  // .listen-links-container {
  //   display: grid;
  //   grid-template-columns: 8.75rem 8.75rem;
  //   grid-template-rows: 1fr 1fr;
  //   align-items: center;
  // }

  // .listen-link {
  //   img {
  //     max-width: 8rem;
  //   }
  // }

  @media screen and (max-width: 520px) {
    .podcast-container {
      background-image: linear-gradient(
          to bottom,
          colors.$dark,
          colors.$dark-50,
          colors.$dark,
          colors.$dark
        ),
        url('/assets/kikko-light-optimized.svg');
    }

    .info-container {
      display: flex;
      flex-direction: column;
    }

    .host {
      padding: 1rem 0;
      border-top: solid 1px colors.$white;
      border-bottom: solid 1px colors.$white;

      img {
        width: 45%;
      }
    }

    .listen-info {
      text-align: center;
    }

    // .listen-links-container {
    //   display: flex;
    //   flex-direction: column;
    // }
  }
</style>
