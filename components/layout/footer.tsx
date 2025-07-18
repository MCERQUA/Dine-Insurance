import Link from 'next/link';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Homeowners Insurance', href: '/services#homeowners' },
    { name: 'Auto Insurance', href: '/services#auto' },
    { name: 'Business Insurance', href: '/services#business' },
    { name: 'Life Insurance', href: '/services#life' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Values', href: '/about#values' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Licensing', href: '/licensing' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-terracotta-600 to-terracotta-700 rounded-lg flex items-center justify-center shadow-lg">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold font-serif">Diné Insurance</span>
            </div>
            <p className="text-sm leading-6 text-stone-300">
              Walking Beside You on the Path of Hózhó. Protecting Diné families and businesses 
              with insurance solutions rooted in Navajo values of trust, harmony, and resilience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-terracotta-400" />
                <a href="tel:1-800-346-3365" className="text-sm text-stone-300 hover:text-white transition-colors">
                  1-800-DINE-365
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-terracotta-400" />
                <a href="mailto:protect@dineinsurance.com" className="text-sm text-stone-300 hover:text-white transition-colors">
                  protect@dineinsurance.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-terracotta-400 mt-0.5" />
                <span className="text-sm text-stone-300">
                  Serving Navajo Nation and surrounding communities
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-stone-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-stone-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-stone-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-stone-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="text-xs leading-5 text-stone-400">
              © {new Date().getFullYear()} Diné Insurance. All rights reserved. Licensed to serve Navajo Nation communities.
            </p>
            <p className="mt-2 text-xs leading-5 text-stone-500">
              "Protecting What Matters. Honoring Who You Are."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
