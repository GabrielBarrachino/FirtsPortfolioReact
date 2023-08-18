import React from 'react';
import './styles/main.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualifaction';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
