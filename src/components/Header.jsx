import { Link } from 'react-router-dom'
import { ExperienceTimer } from './EffectsManager'

export default function Header() {
  return(
    <>
      <header className="header">
        <div className="container">
          <nav className="flex gap-20">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <span className="logo">SG</span>
            <Link to="/education">Education</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
          </nav>

          {/* <ExperienceTimer /> */}
        </div>
      </header>
    </>
  );
}