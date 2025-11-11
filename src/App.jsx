import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Technology from './components/Technology';
import QuoteCard from './ui/QuoteCard';
import Work from './components/Work';
import WorkFlow from './components/WorkFlow';
import TechImpact from './components/TechImpact';
import SkillProof from './components/SkillProof';

const App = () => {
  return (
    <div className="bg-retro-bg text-retro-ink">
      <Header />
      <Hero />
      <QuoteCard />
      <Technology />
      <WorkFlow />
      <SkillProof />
      <Work />
      <About />
      <TechImpact />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
