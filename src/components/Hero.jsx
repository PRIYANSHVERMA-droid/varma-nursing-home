import React from 'react';
import { Phone, MessageCircle, MapPin, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { doctorInfo, hospitalInfo } from '../mock/data';

const Hero = () => {
  const handleCall = () => {
    window.location.href = `tel:${doctorInfo.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${doctorInfo.whatsapp}`, '_blank');
  };

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Trusted Healthcare Provider</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Expert Medical Care <br />
              <span className="text-teal-600">For Your Health</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive treatment for Chest Diseases, Heart Diseases, Diabetes, High Blood Pressure, and more. 
              Experience compassionate care from a trusted physician with extensive experience.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{hospitalInfo.address}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToAppointment}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 transition-all shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </Button>
              <Button
                onClick={handleCall}
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content - Doctor Card */}
          <div className="relative">
            <Card className="p-8 bg-white shadow-xl border-0 overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Doctor Image */}
                <div className="w-48 h-70 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center p-3">
                  <img
                    src={doctorInfo.image || '/default-avatar.svg'}
                    alt={`${doctorInfo.name} photo`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ objectPosition: '50% 20%' }}
                    onError={(e) => {
                      try {
                        const el = e.currentTarget;
                        if (!el.dataset.fallback) {
                          el.dataset.fallback = '1';
                          el.src = '/default-avatar.svg';
                        }
                      } catch (err) {
                        /* ignore */
                      }
                    }}
                  />
                </div>

                {/* Doctor Info */}
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">{doctorInfo.name}</h2>
                  <p className="text-xl text-gray-600">{doctorInfo.namehindi}</p>
                  <p className="text-lg text-teal-600 font-semibold">{doctorInfo.qualification}</p>
                  <p className="text-gray-600">{doctorInfo.qualificationHindi}</p>
                  <div className="pt-2">
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                      {doctorInfo.designation}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Reg. No: {doctorInfo.regNo}</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-teal-600">20+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-teal-600">6</p>
                    <p className="text-sm text-gray-600">Specializations</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
