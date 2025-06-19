'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import ScrollHeader from './ScrollHeader';
import Image from 'next/image';

const Navbar = () => {
  const SCROLL_HEADER_HEIGHT = 60;
  const NAVBAR_HEIGHT = 80;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow effect for navbar
      setScrolled(currentScrollY > 40);

      // Show/hide scroll header
      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      name: 'Home',
      subItems: [
        { name: 'Home Version One', href: '/index-1' },
        { name: 'Home Version Two', href: '/index-2' },
        { name: 'Home Version Three', href: '/index-3' },
        { name: 'Home Version Four', href: '/index-4' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    {
      name: 'Projects',
      subItems: [
        { name: 'Projects', href: '/projects' },
        { name: 'Projects Details', href: '/projects-details' },
      ],
    },
    { name: 'Team', href: '/team' },
    {
      name: 'Blog',
      subItems: [
        { name: 'Blog Left Sidebar', href: '/blog-left-sidebar' },
        { name: 'Blog Right Sidebar', href: '/blog-right-sidebar' },
        { name: 'Single Left Sidebar', href: '/blog-single-left-sidebar' },
        { name: 'Single Right Sidebar', href: '/blog-single-right-sidebar' },
      ],
    },
    {
      name: 'Pages',
      subItems: [
        { name: 'Error 404', href: '/404' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Scroll Header */}
      <div
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          headerVisible ? 'top-0' : '-top-full'
        }`}
        style={{ height: `${SCROLL_HEADER_HEIGHT}px` }}
      >
        <ScrollHeader />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-8' : 'bg-white py-10 mx-0'
        }`}
        style={{ top: headerVisible ? `${SCROLL_HEADER_HEIGHT}px` : '0px' }}
      >
        <div className="container w-[90%] mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Mobile Toggle */}
            <div className="flex items-center">
              <button
                className="lg:hidden text-2xl mr-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
                
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex mx-auto items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.subItems ? (
                    <>
                      <button className="flex items-center hover:text-primary transition-colors">
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4 transition-transform transform group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 
                          transition-all duration-300 ease-out origin-top
                          ${
                            activeDropdown === item.name
                              ? 'opacity-100 scale-y-100'
                              : 'opacity-0 scale-y-95 pointer-events-none'
                          }`}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation Modal */}
            <div
              className={`fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:hidden`}
              style={{ top: `${SCROLL_HEADER_HEIGHT}px` }}
            >
              <div className="absolute top-4 right-4">
                <button
                  className="text-2xl focus:outline-none"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="container mx-auto px-4 py-16">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full py-2 text-left"
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.name ? null : item.name
                              )
                            }
                          >
                            <span className="font-medium">{item.name}</span>
                            <svg
                              className={`h-4 w-4 transform transition-transform ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          <div
                            className={`pl-4 overflow-hidden transition-all duration-300 ease-out ${
                              activeDropdown === item.name ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 hover:text-primary transition-colors"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          className="py-2 block hover:text-primary transition-colors font-medium"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer below header and navbar */}
      <div style={{ height: `${SCROLL_HEADER_HEIGHT + NAVBAR_HEIGHT}px` }}></div>
    </>
  );
};

export default Navbar;
