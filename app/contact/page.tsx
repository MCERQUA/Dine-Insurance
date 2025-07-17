import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Insurance Quote Today',
  description: 'Contact Diné Insurance for personalized service and quotes. Call 1-800-DINE-365 or fill out our online form for culturally respectful insurance solutions.',
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '1-800-DINE-365',
    secondary: '(1-800-346-3365)',
    description: 'Speak with a Diné insurance specialist',
    available: 'Monday-Friday, 8 AM - 6 PM MST'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'protect@dineinsurance.com',
    secondary: 'quotes@dineinsurance.com',
    description: 'Get detailed information and quotes',
    available: 'Response within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Service Area',
    primary: 'Navajo Nation',
    secondary: 'Surrounding communities',
    description: 'Mobile agents available',
    available: 'Arizona, New Mexico, Utah'
  }
];

const offices = [
  {
    name: 'Window Rock Office',
    address: '123 Navajo Route 12\nWindow Rock, AZ 86515',
    phone: '(928) 871-4000',
    hours: 'Mon-Fri: 8 AM - 5 PM\nSat: 9 AM - 2 PM'
  },
  {
    name: 'Shiprock Office', 
    address: '456 Main Street\nShiprock, NM 87420',
    phone: '(505) 368-4000',
    hours: 'Mon-Fri: 8 AM - 5 PM\nSat: 9 AM - 2 PM'
  },
  {
    name: 'Chinle Office',
    address: '789 Navajo Route 7\nChinle, AZ 86503',
    phone: '(928) 674-4000',
    hours: 'Mon-Fri: 8 AM - 5 PM\nSat: 9 AM - 2 PM'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Connect With Us
              <span className="block text-red-clay-600">Your Journey Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to protect what matters most? Our Diné insurance specialists are here to help 
              you find coverage that honors your values and secures your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-800-346-3365">
                <Button size="lg" className="bg-red-clay-600 hover:bg-red-clay-700 text-white px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-800-DINE-365
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-red-clay-600 text-red-clay-600 hover:bg-red-clay-50 px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're committed to 
              providing personalized service in the way that's most comfortable for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-clay-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-red-clay-600" />
                  </div>
                  <CardTitle className="text-xl font-serif">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{method.primary}</p>
                    {method.secondary && (
                      <p className="text-sm text-gray-600">{method.secondary}</p>
                    )}
                  </div>
                  <p className="text-gray-600">{method.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-turquoise-600">
                    <Clock className="w-4 h-4" />
                    <span>{method.available}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Offices */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Request Your Personalized Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and one of our Diné insurance specialists will contact you 
                within 24 hours to discuss your coverage needs and provide a personalized quote.
              </p>
              
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif">Get Your Free Quote</CardTitle>
                  <CardDescription>
                    All information is kept confidential and secure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Community/Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                      placeholder="e.g., Shiprock, Window Rock, Chinle"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Interest *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent">
                      <option value="">Select an option</option>
                      <option value="homeowners">Homeowners Insurance</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent">
                      <option value="">Select an option</option>
                      <option value="referral">Family/Friend Referral</option>
                      <option value="community">Community Event</option>
                      <option value="online">Online Search</option>
                      <option value="social">Social Media</option>
                      <option value="radio">Radio Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments or Questions
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-clay-500 focus:border-transparent"
                      placeholder="Tell us about your specific insurance needs or any questions you have..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 h-4 w-4 text-red-clay-600 focus:ring-red-clay-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to be contacted by Diné Insurance regarding my quote request and 
                      understand that my information will be kept confidential.
                    </label>
                  </div>
                  
                  <Button className="w-full bg-red-clay-600 hover:bg-red-clay-700 text-white py-3 text-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Request My Free Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Visit Our Offices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We have convenient office locations throughout Navajo Nation. 
                Walk-ins welcome, or call ahead to schedule an appointment.
              </p>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-red-clay-600">
                        {office.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <a href={`tel:${office.phone}`} className="text-red-clay-600 hover:text-red-clay-700 text-sm">
                            {office.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Hours</p>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{office.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-turquoise-50 to-red-clay-50">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Mobile Service Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Can't make it to an office? Our mobile agents can meet you at your home 
                    or a convenient location. Perfect for elderly clients, busy families, 
                    or those in remote areas.
                  </p>
                  <Button variant="outline" className="border-turquoise-600 text-turquoise-600 hover:bg-turquoise-50">
                    Schedule Mobile Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-clay-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            24/7 Claims Support
          </h2>
          <p className="text-xl text-red-clay-100 mb-6">
            Accidents and emergencies don't wait for business hours. 
            Our claims support team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-800-346-3365">
              <Button size="lg" className="bg-white text-red-clay-600 hover:bg-red-clay-50">
                <Phone className="w-5 h-5 mr-2" />
                24/7 Claims: 1-800-DINE-365
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}