import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Specialties />
          <Experience />
          <AppointmentForm />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
