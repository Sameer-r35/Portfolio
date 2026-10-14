import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Open to frontend, full-stack and software engineering internships. If
        you're building something interesting, I'd love to hear about it.
      </p>
      <div className="actions">
        <a href={`mailto:${profile.email}`}>Email me</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact