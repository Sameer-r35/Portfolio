import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <p className="eyebrow">{p.category}</p>
            <h3>{p.title}</h3>
            <p>{p.hook}</p>
            <ul>
              {p.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="stack">
              {p.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </p>
            <div className="actions">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects