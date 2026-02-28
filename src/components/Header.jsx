import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { doctorInfo, hospitalInfo } from '../mock/data';

const Header = () => {
  const handleCall = () => {
    window.location.href = `tel:${doctorInfo.phone}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">VNH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{hospitalInfo.name}</h1>
              <p className="text-xs text-gray-600">Quality Healthcare Since Years</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('specialties')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Specialties
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Appointment
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-teal-600" />
              <span>{hospitalInfo.workingHours.morning}</span>
            </div>
            <Button
              onClick={handleCall}
              className="bg-teal-600 hover:bg-teal-700 text-white transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
