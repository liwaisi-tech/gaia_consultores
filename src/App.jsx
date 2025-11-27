import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Impact from './pages/Impact';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/impacto" element={<Impact />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
