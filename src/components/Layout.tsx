
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ThreeBackground from './ThreeBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="bg-background min-h-screen">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      
      <div className="relative z-10">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
