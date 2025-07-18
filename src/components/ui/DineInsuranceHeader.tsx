import React, { useState } from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@components/ui/navigation-menu';

interface HeaderProps {
  companyName?: string;
  phone?: string;
  email?: string;
  location?: string;
}

const DineInsuranceHeader: React.FC<HeaderProps> = ({
  companyName = "Diné Insurance",
  phone = "(928) 555-0123",
  email = "info@dineinsurance.com",
  location = "Window Rock, AZ"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "Insurance Services",
      items: [
        { title: "Auto Insurance", href: "/services/auto", description: "Protect your journey on and off the reservation" },
        { title: "Homeowners Insurance", href: "/services/home", description: "Safeguard your home and sacred family space" },
        { title: "Business Insurance", href: "/services/business", description: "Support your enterprise with understanding" },
        { title: "Life Insurance", href: "/services/life", description: "Protect your family's future generations" },
        { title: "Farm & Ranch Insurance", href: "/services/farm-ranch", description: "Coverage for traditional and modern operations" },
        { title: "Tribal Business Insurance", href: "/services/tribal", description: "Specialized coverage for tribal enterprises" }
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Claims Support", href: "/claims", description: "File and track your insurance claims" },
        { title: "Policy Management", href: "/policy", description: "Manage your insurance policies online" },
        { title: "Community Resources", href: "/resources", description: "Traditional knowledge meets modern protection" },
        { title: "Cultural Values", href: "/values", description: "Learn about Hózhó, K'é, and our approach" }
      ]
    }
  ];

  const simpleNavItems = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" }
  ];

  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top Bar - Cultural Contact Information */}
      <div className="bg-orange-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <MapPin className="h-4 w-4" />
            <span>{location} • Serving Navajo Nation & Beyond</span>
          </div>
        </div>
      </div>

      {/* Main Header - Diné Cultural Design */}
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-orange-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Cultural Symbol */}
            <div className="flex items-center">
              <div className="bg-white rounded-lg p-2 mr-3 shadow-md">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">{companyName}</h1>
                <p className="text-orange-100 text-sm">Protecting What Matters. Honoring Who You Are.</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/10 border-none">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] gap-3 p-6 bg-background">
                        <div className="mb-2">
                          <h3 className="text-lg font-semibold text-orange-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-orange-800/70">Choose the protection that fits your needs</p>
                        </div>
                        <div className="grid gap-2">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.title}
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-900 focus:bg-orange-50 focus:text-orange-900"
                            >
                              <div className="text-sm font-medium leading-none text-orange-900">
                                {subItem.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-orange-800/70">
                                {subItem.description}
                              </p>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                {simpleNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex bg-white text-red-700 hover:bg-orange-50 font-semibold">
                Get Your Quote
              </Button>
              
              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Cultural Header in Mobile */}
                    <div className="border-b border-orange-200 pb-4 mb-4">
                      <h2 className="font-bold text-orange-900">{companyName}</h2>
                      <p className="text-sm text-orange-800/70">Walking beside you on the path of Hózhó</p>
                    </div>
                    
                    <div className="space-y-4">
                      {navigationItems.map((item) => (
                        <div key={item.title} className="space-y-2">
                          <h3 className="font-semibold text-orange-900 border-b border-orange-200 pb-2">
                            {item.title}
                          </h3>
                          <div className="pl-4 space-y-3">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                className="block transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="text-sm font-medium text-orange-900 hover:text-orange-600">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-orange-800/60 mt-1">
                                  {subItem.description}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                      {simpleNavItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block font-semibold text-orange-900 border-b border-orange-200 pb-2 hover:text-orange-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                    
                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-orange-200">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700">
                        Get Your Quote
                      </Button>
                      <p className="text-xs text-orange-800/60 text-center mt-2">
                        Protecting families with sacred trust
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DineInsuranceHeader;