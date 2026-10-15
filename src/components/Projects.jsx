import { projects } from '../data/projects'
import Reveal from './Reveal'

function Projects() {
  return (
    <section id="projects">
      <Reveal as="h2">Projects</Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            as="article"
            className="project-card"
            delay={Math.min(i, 4) * 80}
          >
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects