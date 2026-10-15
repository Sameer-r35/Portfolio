import { profile } from '../data/profile'
import Reveal from './Reveal'

function Contact() {
  return (
    <section id="contact">
      <Reveal as="h2">Contact</Reveal>
      <Reveal as="p" delay={80}>
        Open to frontend, full-stack and software engineering internships. If
        you're building something interesting, I'd love to hear about it.
      </Reveal>
      <Reveal className="actions" delay={160}>
        <a href={`mailto:${profile.email}`}>Email me</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </Reveal>
    </section>
  )
}

export default Contact