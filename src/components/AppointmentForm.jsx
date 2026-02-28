import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar, Clock, User, Phone, MessageSquare, Send } from 'lucide-react';
import { doctorInfo, hospitalInfo } from '../mock/data';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Dr. Atul Verma,

I would like to book an appointment:

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message || 'N/A'}

Please confirm my appointment. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${doctorInfo.whatsapp}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="appointment" className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book an Appointment / <span className="text-teal-600">अपॉइंटमेंट बुक करें</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Schedule your visit and receive expert medical care. Fill out the form and we'll confirm your appointment via WhatsApp.
              </p>
            </div>

            {/* Working Hours Card */}
            <Card className="border-2 border-teal-100 bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
                <CardTitle className="flex items-center space-x-2 text-teal-900">
                  <Clock className="w-6 h-6" />
                  <span>Clinic Hours / समय</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg mb-2">Morning Session</p>
                    <p className="text-2xl font-bold text-teal-600">{hospitalInfo.workingHours.morning}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg mb-2">Evening Session</p>
                    <p className="text-2xl font-bold text-teal-600">{hospitalInfo.workingHours.evening}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Working Days</p>
                    <p className="font-semibold text-gray-900">{hospitalInfo.workingHours.days}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Closed</p>
                    <p className="font-semibold text-red-600">{hospitalInfo.workingHours.off}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-2 border-gray-100 bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => window.location.href = `tel:${doctorInfo.phone}`}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white justify-start"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{doctorInfo.phone}</span>
                  </Button>
                  <Button
                    onClick={() => window.open(`https://wa.me/${doctorInfo.whatsapp}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    <span>WhatsApp Message</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <CardTitle className="text-2xl">Request Appointment</CardTitle>
              <p className="text-teal-100 text-sm mt-2">We'll confirm via WhatsApp</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name / नाम *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-11 h-12 border-2 border-gray-200 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number / फ़ोन नंबर *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-11 h-12 border-2 border-gray-200 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-700 font-medium">
                      Preferred Date / तारीख *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="pl-11 h-12 border-2 border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-gray-700 font-medium">
                      Preferred Time / समय *
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="pl-11 h-12 border-2 border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message / संदेश (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Brief description of your health concern..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-2 border-gray-200 focus:border-teal-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you'll be redirected to WhatsApp to confirm your appointment
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
