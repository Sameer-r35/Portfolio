import { profile } from '../data/profile'

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>{profile.intro}</p>
      <p>
        <strong>{profile.education.degree}</strong>
        <br />
        {profile.education.school}
      </p>
    </section>
  )
}

export default About