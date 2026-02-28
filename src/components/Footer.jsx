import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { doctorInfo, hospitalInfo } from '../mock/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCall = () => {
    window.location.href = `tel:${doctorInfo.phone}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VNH</span>
              </div>
              <h3 className="text-white font-bold text-lg">{hospitalInfo.name}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing quality healthcare services with compassion and expertise. 
              Your health is our priority.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-teal-500" />
              <span className="text-gray-400">Trusted Healthcare Provider</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call Us</p>
                  <button
                    onClick={handleCall}
                    className="text-white hover:text-teal-400 transition-colors font-medium"
                  >
                    {doctorInfo.phone}
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white text-sm leading-relaxed">
                    {hospitalInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Clinic Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-sm">Morning Session</p>
                    <p className="text-white font-medium">{hospitalInfo.workingHours.morning}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Evening Session</p>
                    <p className="text-white font-medium">{hospitalInfo.workingHours.evening}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">
                      {hospitalInfo.workingHours.days}
                    </p>
                    <p className="text-red-400 text-sm">
                      Closed on {hospitalInfo.workingHours.off}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center space-y-2">
            <h4 className="text-white font-semibold text-lg">
              {doctorInfo.name} ({doctorInfo.namehindi})
            </h4>
            <p className="text-gray-400">
              {doctorInfo.qualification} • {doctorInfo.designation}
            </p>
            <p className="text-gray-500 text-sm">Registration No: {doctorInfo.regNo}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {hospitalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Quality Healthcare • Compassionate Care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
