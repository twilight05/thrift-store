import React from 'react';
import Button from '../Button/Button';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Your No.1 plug for thrifts</h1>
      <p className="hero-text">Purchase all kinds of thrift wears here at affordable prices</p>
      <Button text="Explore" className="btn-primary" />
    </div>
  </section>
);

export default HeroSection;
