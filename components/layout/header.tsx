'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Mountain, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-orange-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-800 rounded-lg flex items-center justify-center shadow-md">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-serif">Diné Insurance</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-red-700",
                pathname === item.href
                  ? "text-red-700"
                  : "text-gray-900"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <a
            href="tel:1-800-346-3365"
            className="flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>1-800-DINE-365</span>
          </a>
          <Link href="/contact">
            <Button className="bg-red-700 hover:bg-red-800 text-white shadow-md">
              Get Quote
            </Button>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-700 to-red-800 rounded-lg flex items-center justify-center shadow-md">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900 font-serif">Diné Insurance</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-orange-50 transition-colors",
                        pathname === item.href
                          ? "text-red-700 bg-red-50"
                          : "text-gray-900"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="tel:1-800-346-3365"
                    className="flex items-center space-x-2 text-base font-semibold text-gray-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>1-800-DINE-365</span>
                  </a>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-red-700 hover:bg-red-800 text-white shadow-md">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}