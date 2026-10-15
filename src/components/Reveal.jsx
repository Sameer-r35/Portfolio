import { useReveal } from '../hooks/useReveal'

// Wrap any element to fade it in when it scrolls into view.
// Usage: <Reveal as="h2" delay={80}>Title</Reveal>
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, phase] = useReveal()

  const revealClass =
    phase === 'hidden' ? 'reveal' : phase === 'visible' ? 'reveal visible' : ''

  const style = phase === 'done' ? undefined : { transitionDelay: `${delay}ms` }

  return (
    <Tag
      ref={ref}
      className={`${className} ${revealClass}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal