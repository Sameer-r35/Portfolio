import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}

export default Footer