import React from 'react'
import { About, Navbar, Hero, Services, MyWork, Star, Contact, Footer } from './Components'
import { ScrollTopButton } from './Components/Specific-Components/ScrollTopButton/impl';



const App = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Star />

      <div className="main">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
        <ScrollTopButton />
      </div>
    </div>

  )
}

export default App