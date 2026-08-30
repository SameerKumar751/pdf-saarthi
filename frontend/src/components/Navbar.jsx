import { useEffect, useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('pdf-saarthi-theme') === 'dark';
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);

    localStorage.setItem(
      'pdf-saarthi-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* Brand */}

        <a
          href="#top"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-symbol">
            ✦
          </div>

          <div className="brand-content">
            <div className="brand-text">
              PDF Saarthi
            </div>

            <div className="brand-subtitle">
              Intelligent document companion
            </div>
          </div>
        </a>


        {/* Desktop Navigation */}

        <div className="nav-links">

          <a href="#how-it-works">
            How it works
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#about">
            About
          </a>

        </div>


        {/* Right Actions */}

        <div className="nav-actions">

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            <span className="theme-icon">
              {darkMode ? '☾' : '☼'}
            </span>
          </button>


          <a
            href="#workspace"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get Started
            <span>→</span>
          </a>

        </div>


        {/* Mobile Menu */}

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? 'open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation */}

      <div
        className={`mobile-nav ${
          menuOpen ? 'show' : ''
        }`}
      >

        <a
          href="#how-it-works"
          onClick={closeMenu}
        >
          How it works
        </a>

        <a
          href="#features"
          onClick={closeMenu}
        >
          Features
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#workspace"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Get Started
          <span>→</span>
        </a>

        {/* Mobile Theme Toggle */}

        <button
          type="button"
          className="mobile-theme-toggle"
          onClick={toggleTheme}
        >
          <span>
            {darkMode ? '☀' : '☾'}
          </span>

          {darkMode
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode'}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;