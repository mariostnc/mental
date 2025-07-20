import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Conditions from './components/Conditions';
import Helplines from './components/Helplines';
import FAQ from './components/FAQ';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h3>Meniu</h3>
            <button className="mobile-menu-close" onClick={closeMenu}>
              ✕
            </button>
          </div>
          
          <nav className="mobile-navigation">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              🏠 Acasă
            </Link>
            <Link 
              to="/conditions" 
              className={`mobile-nav-link ${isActive('/conditions') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              🔬 Tulburări
            </Link>
            <Link 
              to="/helplines" 
              className={`mobile-nav-link ${isActive('/helplines') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              📞 Linii de Ajutor
            </Link>
            <Link 
              to="/faq" 
              className={`mobile-nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ❓ FAQ
            </Link>
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-contact-info">
              <h4>Contact Rapid</h4>
              <p>📧 info@mentalhealth.ro</p>
              <p>📞 021 123 45 67</p>
              <p>🕒 Luni-Vineri 9:00-17:00</p>
            </div>
            
            <div className="mobile-emergency">
              <h4>Urgențe</h4>
              <p>🚨 Pentru situații urgente:</p>
              <a href="tel:112" className="emergency-link">📞 112 - Servicii de Urgență</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="navigation desktop-navigation">
        <Link 
          to="/" 
          className={`nav-button ${isActive('/') ? 'active' : ''}`}
        >
          Acasă
        </Link>
        <Link 
          to="/conditions" 
          className={`nav-button ${isActive('/conditions') ? 'active' : ''}`}
        >
          Tulburări
        </Link>
        <Link 
          to="/helplines" 
          className={`nav-button ${isActive('/helplines') ? 'active' : ''}`}
        >
          Linii de Ajutor
        </Link>
        <Link 
          to="/faq" 
          className={`nav-button ${isActive('/faq') ? 'active' : ''}`}
        >
          FAQ
        </Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <Link to="/" className="logo-link">
                <h1>MentalHealth.ro</h1>
                <span className="tagline">Sănătate Mentală pentru Toți</span>
              </Link>
            </div>
            <Navigation />
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/helplines" element={<Helplines />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Despre Noi</h4>
              <p>Resurse educaționale pentru sănătatea mentală, bazate pe informații științifice actualizate. Oferim informații, suport și resurse pentru o sănătate mentală optimă.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@mentalhealth.ro</p>
              <p>Telefon: 021 123 45 67</p>
              <p>Program: Luni-Vineri 9:00-17:00</p>
            </div>
            <div className="footer-section">
              <h4>Important</h4>
              <p>Acest site oferă informații educaționale și nu înlocuiește consultul medical. Pentru probleme urgente, contactează serviciile de urgență (112) sau un specialist în sănătate mentală.</p>
            </div>
            <div className="footer-section">
              <h4>Link-uri Rapide</h4>
              <ul className="footer-links">
                <li><Link to="/conditions">Tulburări Mentale</Link></li>
                <li><Link to="/helplines">Linii de Ajutor</Link></li>
                <li><Link to="/faq">Întrebări Frecvente</Link></li>
                <li><a href="https://www.who.int/mental_health" target="_blank" rel="noopener noreferrer">WHO Mental Health</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MentalHealth.ro - Toate drepturile rezervate | Sănătate Mentală pentru Toți</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
