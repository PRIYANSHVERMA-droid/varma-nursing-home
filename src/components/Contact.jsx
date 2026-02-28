import React from 'react';
import { Card } from './ui/card';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { doctorInfo, hospitalInfo } from '../mock/data';

const Contact = () => {
  const handleCall = () => {
    window.location.href = `tel:${doctorInfo.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${doctorInfo.whatsapp}`, '_blank');
  };

  const handleDirections = () => {
    window.open(hospitalInfo.googleMapsLink, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch / <span className="text-teal-600">संपर्क करें</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us or reach out for any medical consultation. We're here to help you with your healthcare needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-gray-100 hover:border-teal-200 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{hospitalInfo.address}</p>
                  <Button
                    onClick={handleDirections}
                    variant="outline"
                    size="sm"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-100 hover:border-teal-200 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                  <p className="text-gray-600 mb-3">Call us for appointments or emergencies</p>
                  <Button
                    onClick={handleCall}
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {doctorInfo.phone}
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-100 hover:border-green-200 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">WhatsApp</h3>
                  <p className="text-gray-600 mb-3">Quick messaging for appointment booking</p>
                  <Button
                    onClick={handleWhatsApp}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-100 bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Clinic Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Morning:</span>
                      <span className="font-semibold text-gray-900">{hospitalInfo.workingHours.morning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Evening:</span>
                      <span className="font-semibold text-gray-900">{hospitalInfo.workingHours.evening}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-gray-600">Days:</span>
                      <span className="font-semibold text-gray-900">{hospitalInfo.workingHours.days}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Closed:</span>
                      <span className="font-semibold text-red-600">{hospitalInfo.workingHours.off}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-full min-h-[500px]">
            <Card className="h-full border-2 border-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-gray-500 text-lg font-medium mb-2">Hospital Location</p>
                    <p className="text-gray-400 text-sm mb-4">Near D.A.V. College, Arya Samaj Road</p>
                    <Button
                      onClick={handleDirections}
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
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

export default Contact;
