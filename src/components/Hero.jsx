import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="top" className="hero">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-headline">{profile.headline}</p>
      <div className="actions">
        <a href="#projects">View Projects</a>
        <a href="#contact">Get in Touch</a>
        {profile.cv && (
          <a href={profile.cv} download>
            Download CV
          </a>
        )}
      </div>
    </section>
  )
}

export default Hero