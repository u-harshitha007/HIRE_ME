import PageTransition from './components/layout/PageTransition'
import Header from './components/layout/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'
import AiChat from './components/ai-chat/AiChat'

export default function App() {
  return (
    <>
      <PageTransition />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AiChat />
    </>
  )
}
