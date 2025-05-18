import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import FiltersDemo from './components/FiltersDemo.jsx';
import Screenshots from './components/Screenshots.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import Responsive from './components/Responsive.jsx';

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <FiltersDemo />
      <Screenshots />
      <Responsive/>
      <Testimonials />
      <Footer />
    </>
  );
}
