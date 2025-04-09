import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Bhautik_resume.pdf'; // Updated path to your actual file
    link.download = 'Bhautik_Prajapati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 px-4 md:px-6 lg:px-12 py-4 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tighter z-40"
          onClick={handleNavLinkClick}
        >
          bhautik.dev
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="link-underline" onClick={handleNavLinkClick}>
            About
          </Link>
          <Link to="/projects" className="link-underline" onClick={handleNavLinkClick}>
            Projects
          </Link>
          <Link to="/experience" className="link-underline" onClick={handleNavLinkClick}>
            Experience
          </Link>
          <button 
            onClick={() => {
              handleResumeDownload();
              handleNavLinkClick();
            }} 
            className="link-underline"
          >
            Resume
          </button>
          <Link 
            to="/contact" 
            className="bg-forest text-white px-4 py-2 hover:bg-forest-light transition-colors"
            onClick={handleNavLinkClick}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2 z-40">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-md z-20 animate-fade-in">
            <div className="flex flex-col gap-6 h-full justify-center items-center">
              <Link to="/about" className="py-3 px-4 text-xl link-underline" onClick={closeMobileMenu}>
                About
              </Link>
              <Link to="/projects" className="py-3 px-4 text-xl link-underline" onClick={closeMobileMenu}>
                Projects
              </Link>
              <Link to="/experience" className="py-3 px-4 text-xl link-underline" onClick={closeMobileMenu}>
                Experience
              </Link>
              <button 
                onClick={() => {
                  handleResumeDownload();
                  closeMobileMenu();
                }} 
                className="py-3 px-4 text-xl link-underline"
              >
                Resume
              </button>
              <Link to="/contact" className="bg-forest text-white px-6 py-3 hover:bg-forest-light transition-colors text-center text-xl mt-4" onClick={closeMobileMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;