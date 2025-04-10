import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of your resume PDF
    link.href = '/Bhautik_resume.pdf'; // This assumes you'll add the PDF to the public folder
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
        <Link to="/" className="text-xl font-medium tracking-tighter">
          bhautik.dev
        </Link>
        
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 ml-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            
            {mobileMenuOpen && (
              <div className="fixed inset-x-0 top-16 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-md z-20 p-4 animate-fade-in">
                <div className="flex flex-col gap-4">
                  <Link to="/about" className="py-2 link-underline" onClick={closeMobileMenu}>
                    About
                  </Link>
                  <Link to="/projects" className="py-2 link-underline" onClick={closeMobileMenu}>
                    Projects
                  </Link>
                  <Link to="/experience" className="py-2 link-underline" onClick={closeMobileMenu}>
                    Experience
                  </Link>
                  <button 
                    onClick={() => {
                      handleResumeDownload();
                      closeMobileMenu();
                    }} 
                    className="py-2 text-left link-underline"
                  >
                    Resume
                  </button>
                  <Link to="/contact" className="bg-forest text-white px-4 py-2 hover:bg-forest-light transition-colors text-center" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <Link to="/about" className="link-underline">
              About
            </Link>
            <Link to="/projects" className="link-underline">
              Projects
            </Link>
            <Link to="/experience" className="link-underline">
              Experience
            </Link>
            <button 
              onClick={handleResumeDownload} 
              className="link-underline"
            >
              Resume
            </button>
            <Link to="/contact" className="bg-forest text-white px-4 py-2 hover:bg-forest-light transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
