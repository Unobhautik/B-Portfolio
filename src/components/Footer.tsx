
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-6 lg:px-12 border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        <div className="text-sm text-muted-foreground order-2 md:order-1">
          © {currentYear} Bhautik Prajapati. All rights reserved.
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 order-1 md:order-2">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <Link to="/about" className="hover:text-forest transition-colors">About</Link>
          <Link to="/projects" className="hover:text-forest transition-colors">Projects</Link>
          <Link to="/experience" className="hover:text-forest transition-colors">Experience</Link>
          <Link to="/contact" className="hover:text-forest transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
