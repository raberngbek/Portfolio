import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import SelectedWork from '../sections/SelectedWork';
import About from '../sections/About';
import Approach from '../sections/Approach';
import DesignEngineering from '../sections/DesignEngineering';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent/15 selection:text-text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SelectedWork />
        <About />
        <Approach />
        <DesignEngineering />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
