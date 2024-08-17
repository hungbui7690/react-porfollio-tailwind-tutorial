/*
  Skills
  - explore skills array in data.jsx

  1. create Skills - SkillsCard - SectionTitle components


****************************

  Smooth Scroll 
  - click on Navbar to go to section#ID

  2. index.html
  -> <html lang="en" class="bg-slate-50 scroll-smooth"></html>


****************************

  About
  - create About component and render in App.jsx


****************************

  Projects
  - explore "projects" array in data.jsx
  - create Projects and ProjectsCard components
  - setup return and render in App.jsx


*/

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  )
}

export default App
