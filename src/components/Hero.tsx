import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="section-wrapper flex flex-col items-start justify-center min-h-[85vh] pt-16 md:pt-28">
      <div className="max-w-2xl">
        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}
        >
          Bhautik Prajapati
        </h1>
        <h2
          className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s', animationDuration: '0.8s' }}
        >
          <span className="relative">
            <span className="text-forest font-medium">Full Stack Developer</span>
          </span>{" "}
          focused on building scalable web applications with clean APIs and intuitive UIs
        </h2>
        <div
          className="flex flex-wrap gap-3 mb-8 md:mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.3s', animationDuration: '0.8s' }}
        >
          <span className="border border-black/20 dark:border-white/20 px-3 py-1 text-sm hover:bg-forest hover:text-white hover:border-forest transition-colors">MERN Stack</span>
          <span className="border border-black/20 dark:border-white/20 px-3 py-1 text-sm hover:bg-forest hover:text-white hover:border-forest transition-colors">Python-Django</span>
        </div>
        <Link
          to="/projects"
          className="flex items-center gap-2 group opacity-0 animate-fade-in"
          style={{ animationDelay: '1.8s', animationDuration: '0.8s' }}
          aria-label="View my work"
        >
          <span className="link-underline">View my work</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;