<script lang="ts">
  interface TeamMember {
    name: string;
    role: string;
    imgURL: string;
    bio: string;
    showBio: boolean;
  }

  let team: TeamMember[] = [
    {
      name: 'Monarch Wadia',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92',
      bio: 'Monarch bio text',
      showBio: false
    },
    {
      name: 'David Marshall',
      role: 'Engineering Officer',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92',
      bio: 'David bio text',
      showBio: false
    },
    {
      name: 'Josh White',
      role: 'Engineering Crewman',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92',
      bio: 'Josh bio text',
      showBio: false
    }
  ];
</script>

<div class="about-container">
  <section class="values-section">
    <h1>What we value</h1>
    <h2>Above All: To Care for Others</h2>
    <p class="base-text">
      First, the users of the product. Second, our respected clients. Third, the Folkwise team.
    </p>
    <h3>To Teach</h3>
    <p class="base-text">
      For all developers on the team, 10 hours per week are dedicated to teaching others. This can
      take the form of classes, articles, social media posts, group mentorship, or anything else.
    </p>
    <h3>To Be Uncontrived</h3>
    <p class="base-text">
      We use the easiest words that convey the meaning and the simplest tools that fit the project.
    </p>
    <h3>To Be Ourselves</h3>
    <p class="base-text">We put our names next to the work we do.</p>
  </section>
  <section class="mission-section">
    <h1>How We Work</h1>
    <p class="base-text">
      Everyone codes. Everyone is a decision maker. We agree on goals, and then we over-communicate
      as we drive towards them. There is no daily schedule.
    </p>
  </section>
  <section class="team-section">
    <h1>Who we are</h1>
    <div class="team-container">
      {#each team as member}
        <div class="team-member-container" on:click={() => (member.showBio = !member.showBio)}>
          <div class="img-info-container">
            <img class="team-member-img" src={member.imgURL} alt="team member" />
            <div class="team-member-info hidden">
              <h3>{member.name}</h3>
              <p class="base-text">{member.role}</p>
            </div>
          </div>

          {#if member.showBio}
            <div class="team-member-bio">
              <p class="base-text">{member.bio}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .about-container {
    min-height: 100%;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 1rem;
    background-color: colors.$white;
  }

  .team-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    text-align: center;
    // background-color: colors.$white;
  }

  .team-member-container {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: colors.$light;
    cursor: pointer;
    transition: all 300ms;

    &:hover {
      box-shadow: 0 0 6px 0 colors.$dark;

      .team-member-info {
        display: flex;
      }
    }
  }

  .img-info-container {
    position: relative;
  }

  .team-member-img {
    max-width: 100%;
    height: 100%;
  }

  .team-member-info {
    position: absolute;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(11, 36, 103, 0.6);
    transition: all 300ms;

    h3,
    p {
      margin: 0;
      padding-top: 1rem;
      color: colors.$light;
    }
  }

  .team-member-bio {
    background-color: colors.$white;
  }

  .hidden {
    display: none;
    transition: all 300ms;
  }
</style>
