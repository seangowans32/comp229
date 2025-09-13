import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'

const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default MainRouter