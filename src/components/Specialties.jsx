import React from 'react';
import { Card, CardContent } from './ui/card';
import { Stethoscope, Heart, Activity, Gauge, Droplet, Pill } from 'lucide-react';
import { specialties } from '../mock/data';

const iconMap = {
  Stethoscope: Stethoscope,
  Heart: Heart,
  Activity: Activity,
  Gauge: Gauge,
  Droplet: Droplet,
  Pill: Pill
};

const Specialties = () => {
  return (
    <section id="specialties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialist In / <span className="text-teal-600">विशेषज्ञ</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical expertise across multiple specializations to provide you with the best care possible.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => {
            const IconComponent = iconMap[specialty.icon];
            return (
              <Card
                key={specialty.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {specialty.name}
                      </h3>
                      <p className="text-gray-600 text-lg">{specialty.nameHindi}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-to-r from-teal-50 to-blue-50 border-0">
            <CardContent className="p-6">
              <p className="text-gray-700 max-w-3xl">
                <span className="font-semibold text-teal-700">Expert Care: </span>
                With years of experience in treating complex medical conditions, 
                Dr. Atul Verma provides personalized treatment plans tailored to each patient's unique needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
