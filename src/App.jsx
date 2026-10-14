import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Scroll reveal: fade elements in as they enter the screen
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll(
      'section:not(.hero) h2, #about p, .project-card, .skill-group, #contact p, #contact .actions'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          el.classList.add('visible')
          observer.unobserve(el)
          // Remove the reveal classes afterwards so normal hover effects work again
          setTimeout(() => {
            el.classList.remove('reveal', 'visible')
            el.style.transitionDelay = ''
          }, 1000)
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => {
      const index = Array.from(el.parentElement.children).indexOf(el)
      el.style.transitionDelay = `${Math.min(index, 4) * 80}ms`
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App