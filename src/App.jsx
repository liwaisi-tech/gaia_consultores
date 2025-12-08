import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Lazy load de las páginas - solo se cargan cuando se visitan
const Home = lazy(() => import('./pages/Home'));
const Impact = lazy(() => import('./pages/Impact'));
const Contact = lazy(() => import('./pages/Contact'));

// Componente de carga mientras se importa la ruta
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    padding: '2rem'
  }}>
    <p>Cargando...</p>
  </div>
);

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impacto" element={<Impact />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
