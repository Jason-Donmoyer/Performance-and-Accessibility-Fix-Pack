import React from 'react'
import './App.css'

const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const Services = React.lazy(() => import('./components/Services'))
const Contact= React.lazy(() => import('./components/Contact'))


function App() {

  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </React.Suspense>
    </main>
  )
}

export default App
