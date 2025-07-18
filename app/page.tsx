"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Menu, X, Shield, Users, FileText, Phone, Mail, MapPin, ChevronRight, Star, Mountain, Home, Car, Briefcase } from 'lucide-react';
import Link from 'next/link';

// Glow component implementation
const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand-foreground)/.5)_10%,_hsl(var(--brand-foreground)/0)_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand)/.3)_10%,_hsl(var(--brand-foreground)/0)_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

// Testimonial Carousel implementation
interface Testimonial {
  name: string;
  role: string;
  tribe: string;
  content: string;
  rating: number;
}

const TestimonialCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-red-700 font-medium">{testimonial.tribe}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-red-700" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
};

// Main Diné Insurance Website Component
export default function DineInsuranceWebsite() {
  const services = [
    {
      title: 'Homeowners Insurance',
      description: 'Protect your home and family with comprehensive coverage designed for traditional and modern dwellings on or off the reservation.',
      icon: Home,
    },
    {
      title: 'Auto Insurance',
      description: 'Reliable vehicle protection that understands the unique driving needs and conditions of Navajo Nation communities.',
      icon: Car,
    },
    {
      title: 'Business Insurance',
      description: 'Support Diné-owned enterprises with tailored business insurance covering retail, hospitality, crafts, and traditional ventures.',
      icon: Briefcase,
    },
  ];

  const testimonials = [
    {
      name: 'Maria Begay',
      role: 'Chapter House Leader',
      tribe: 'Diné (Navajo Nation)',
      content: 'Diné Insurance understands our values and our land. They helped protect our family home with respect for our traditions and needs.',
      rating: 5,
    },
    {
      name: 'Joseph Yazzie',
      role: 'Small Business Owner',
      tribe: 'Diné (Navajo Nation)',
      content: 'My trading post has been in our family for generations. Diné Insurance helped us protect this legacy for future generations.',
      rating: 5,
    },
    {
      name: 'Sarah Tsosie',
      role: 'Weaver and Artist',
      tribe: 'Diné (Navajo Nation)',
      content: 'As a traditional weaver, my tools and materials are precious. Diné Insurance protects my craft and my livelihood with understanding.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden desert-gradient">
        <div className="absolute inset-0 navajo-pattern opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Mountain className="w-16 h-16 text-red-700" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              From the Sacred Winds of History
              <span className="block text-red-800">To the Four Sacred Directions of Your Future</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4 max-w-4xl mx-auto font-medium">
              The Spirit of the Navajo Code Talkers Guides Us Still.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our grandfathers spoke in sacred words, wrapped in the protection of <em>Hózhó</em> — harmony, balance, and beauty — 
              to guide a nation through war and chaos. Today, we walk that same sacred path, helping our people navigate 
              the storms and perils of modern life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 shadow-lg">
                  Walk the Path of Protection
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3">
                  Learn Our Values
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Walking in Beauty and Balance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just offer insurance. We offer protection rooted in <em>K'é</em>, respect, relationship, and connection. 
              We follow the Four Sacred Mountains to bring you peace of mind in all directions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-orange-50 mesa-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-red-700" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-serif">Hózhó (Harmony & Balance)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  We approach every policy with respect for harmony in life, family, and the land. 
                  Your coverage reflects the balance between tradition and modern protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-green-50 mesa-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-serif">K'é (Kinship & Respect)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  We treat our clients like family, with honesty and integrity. 
                  Every interaction honors the sacred relationships that bind our community together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-amber-50 mesa-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-serif">Trust & Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Safeguarding what our clients have built for generations to come. 
                  We protect more than property — we protect legacy, family, and future generations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Insurance Services Rooted in Tradition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection that honors Diné sovereignty while providing 
              modern coverage for your home, vehicle, and business ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white mesa-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-red-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                  <Link href="/services">
                    <Button variant="ghost" className="mt-4 text-red-700 hover:text-red-800 p-0">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Voices from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Diné families and business owners about how our insurance 
              solutions have made a difference in their lives and communities.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="absolute inset-0 bg-mesa-pattern opacity-20" />
        <Glow variant="center" className="opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Walk the Path of Hózhó?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a personalized insurance quote designed specifically for Diné families and businesses. 
            Our agents understand your values and your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-700 hover:bg-orange-50 px-8 py-3 shadow-lg">
                Get Your Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}