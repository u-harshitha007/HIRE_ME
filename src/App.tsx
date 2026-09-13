import PageTransition from './components/layout/PageTransition'
import Header from './components/layout/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Hackathons from './components/hackathons/Hackathons'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <PageTransition />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Hackathons />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
