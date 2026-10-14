import { profile } from '../data/profile'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {profile.skills.map((g) => (
        <div key={g.group} className="skill-group">
          <h3>{g.group}</h3>
          <p>
            {g.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Skills