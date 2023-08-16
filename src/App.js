import React from 'react';
import './styles/main.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

const App = () => {
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
