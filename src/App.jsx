import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <main style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
