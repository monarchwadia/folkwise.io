<script>
  let team = [
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    },
    {
      name: 'Jean Luc Picard',
      role: 'Captain',
      imgURL:
        'https://i.guim.co.uk/img/media/0d394c339052c8a4e2a67db414464c5b46fd047c/0_303_3196_1917/master/3196.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ee3579511571292440ab7b5afbfcb92'
    }
  ];
</script>

<div class="about-container">
  <section class="values-section">
    <h1>What we value</h1>
    <h2>Above All: To Care for Others</h2>
    <p>First, the users of the product. Second, our respected clients. Third, the Folkwise team.</p>
    <h3>To Teach</h3>
    <p>
      For all developers on the team, 10 hours per week are dedicated to teaching others. This can
      take the form of classes, articles, social media posts, group mentorship, or anything else.
    </p>
    <h3>To Be Uncontrived</h3>
    <p>
      We use the easiest words that convey the meaning and the simplest tools that fit the project.
    </p>
    <h3>To Be Ourselves</h3>
    <p>We put our names next to the work we do.</p>
  </section>
  <section class="mission-section">
    <h1>How We Work</h1>
    <p>
      Everyone codes. Everyone is a decision maker. We agree on goals, and then we over-communicate
      as we drive towards them. There is no daily schedule.
    </p>
  </section>
  <section class="mission-section">
    <h1>Who we are</h1>
    <div class="team-container">
      {#each team as member}
        <div class="team-member-container">
          <img class="team-img" src={member.imgURL} alt="team member" />
          <p>{member.name}</p>
          <p>{member.role}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style type="scss">
  .about-container {
    min-height: 100%;
    padding: 2rem;
  }

  .team-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .team-img {
    max-width: 80%;
  }
</style>
