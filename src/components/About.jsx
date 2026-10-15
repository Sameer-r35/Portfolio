import { profile } from '../data/profile'
import Reveal from './Reveal'

function About() {
  return (
    <section id="about">
      <Reveal as="h2">About</Reveal>
      <Reveal as="p" delay={80}>
        {profile.intro}
      </Reveal>
      <Reveal as="p" delay={160}>
        <strong>{profile.education.degree}</strong>
        <br />
        {profile.education.school}
      </Reveal>
    </section>
  )
}

export default About