import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Features from './components/Features.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import FirebaseDebug from './components/FirebaseDebug.tsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
      <FirebaseDebug />
    </div>
  )
}

export default App
