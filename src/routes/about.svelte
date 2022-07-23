<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { StaffMember as StaffType } from 'src/types';

  export const load: Load = async ({ fetch }) => {
    // todo: error catching
    const staffResponse = await fetch('/api/allStaffController');

    if (staffResponse.ok) {
      const staff = await staffResponse.json();

      return {
        props: {
          staff: staff
        }
      };
    } else {
      return {
        status: 404
      };
    }
  };
</script>

<script lang="ts">
  export let staff: StaffType[];

  interface TeamMember {
    name: string;
    role: string;
    imgURL: string;
    bio: string;
    showBio: boolean;
  }
</script>

<div class="about-container">
  <section class="folkwise-section">
    <h1 class="large-header">Folkwise</h1>
    <p class="base-text">
      We're a community of software developers. We come from many different backgrounds, and we each
      have specialist expertise in different industries and fields.
    </p>
  </section>
  <section class="values-section">
    <h1>What we value</h1>
    <div class="">
      <h2>Above All: To Care for Others</h2>
      <p class="base-text">
        First, the users of the product. Second, our respected clients. Third, the Folkwise team.
      </p>
    </div>
    <div class="">
      <h3>To Teach</h3>
      <p class="base-text">
        For all developers on the team, 10 hours per week are dedicated to teaching others. This can
        take the form of classes, articles, social media posts, group mentorship, or anything else.
      </p>
    </div>
    <div class="">
      <h3>To Be Uncontrived</h3>
      <p class="base-text">
        We use the easiest words that convey the meaning and the simplest tools that fit the
        project.
      </p>
    </div>
    <div class="">
      <h3>To Be Ourselves</h3>
      <p class="base-text">We put our names next to the work we do.</p>
    </div>
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
      {#each staff as member}
        <div class="team-member-container">
          <img class="team-member-img" src={member.imgURL} alt="team member" />

          <div class="team-member-info">
            <h3>{member.name}</h3>
            <p class="bold-text">{member.role}</p>
          </div>
          <div class="team-member-bio">
            <p class="base-text">{member.miniBio}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .about-container {
    min-height: 100%;
    max-width: 750px;
    margin: 1rem auto;
    background-color: colors.$light;

    section {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      padding: 1rem;
      background-color: colors.$white;
    }
  }

  .team-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    text-align: center;
  }

  .team-member-container {
    display: flex;
    flex-direction: column;
    background-color: colors.$white;
    color: colors.$white;
    transition: all 300ms;
  }

  .team-member-img {
    max-width: 100%;
    box-shadow: 0 0 4px 0 colors.$dark;
  }

  .team-member-info {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 300ms;

    h3,
    p {
      margin: 0;
      padding: 0.25rem 0;
      color: colors.$dark;
    }
  }

  .team-member-bio {
    color: colors.$white;
  }

  @media screen and (max-width: 768px) {
    .about-container {
      margin: 0.75rem auto;
      padding: 0.75rem 0;
      max-width: 100%;

      section {
        padding: 0.75rem;
      }
    }

    .team-container {
      grid-template-columns: 1fr;
    }
  }
</style>
