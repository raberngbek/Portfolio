import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import SelectedWork from '../sections/SelectedWork';
import About from '../sections/About';
import DesignEngineering from '../sections/DesignEngineering';
import DesignProcess from '../sections/DesignProcess';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SelectedWork />
        <About />
        <DesignEngineering />
        <DesignProcess />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
