import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-dark-900">

      

      {/* 🌸 Background layer */}
      <div
        className="fixed inset-0 z-0 bg-center bg-no-repeat bg-contain opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/images/flower.png')"
        }}
      />

      {/* Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-20">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  )
}
