import { profile } from '../data/profile'
import Reveal from './Reveal'

function Skills() {
  return (
    <section id="skills">
      <Reveal as="h2">Skills</Reveal>
      {profile.skills.map((g, i) => (
        <Reveal
          key={g.group}
          className="skill-group"
          delay={Math.min(i + 1, 4) * 80}
        >
          <h3>{g.group}</h3>
          <p>
            {g.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </p>
        </Reveal>
      ))}
    </section>
  )
}

export default Skills