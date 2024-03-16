import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './components/Aboutme/Aboutme';
import Letter from './components/Letter/Letter';
import Portfolio from './components/Portfolio/Portfolio';
import AnimatedCursor from 'react-animated-cursor';
import './App.css'
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='0, 65, 125'
          outerAlpha={0.2}
          innerScale={1.5}
          outerStyle={{
            border: '3px solid #fff'
          }}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <Routes>
          <Route path="/" element={<Letter />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
