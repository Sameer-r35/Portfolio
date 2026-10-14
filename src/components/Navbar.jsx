import { useState } from 'react'
import { profile } from '../data/profile'

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <a href="#top" className="logo" onClick={close}>
        {profile.name}
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'open' : ''}>
        <a href="#about" onClick={close}>
          About
        </a>
        <a href="#projects" onClick={close}>
          Projects
        </a>
        <a href="#skills" onClick={close}>
          Skills
        </a>
        <a href="#contact" onClick={close}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar