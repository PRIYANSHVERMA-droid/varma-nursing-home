import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building2, Award } from 'lucide-react';
import { experience } from '../mock/data';

const Experience = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Former Physician / <span className="text-teal-600">पूर्व चिकित्सक</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Extensive experience from prestigious medical institutions in New Delhi
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {exp.position}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                      {exp.hospital}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {exp.hospitalHindi}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Dr. Atul Verma has served at renowned medical institutions including Safdarjung Hospital and 
            Deen Dayal Upadhyay Hospital in New Delhi, bringing extensive expertise and compassionate care 
            to the community of Muzaffarnagar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
