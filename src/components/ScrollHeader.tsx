"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, FaEnvelopeOpen, FaMobileAlt, 
  FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaGlobe,
  FaEllipsisH 
} from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import Link from 'next/link';

const ScrollHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Add logic to actually change the language if needed
  };

  return (
    <div className="relative w-full bg-[#212529]">
      {/* Spacer to prevent content from being hidden behind the header */}
      <header 
        className={`fixed w-full left-1/2 transform -translate-x-1/2  shadow-md transition-all text-white duration-300 z-50 ${
          visible ? 'top-0' : '-top-32'
        }`}
      >
        <div className="mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            {/* Logo and Mobile Menu Button */}
            <div className="flex justify-between items-center w-full lg:w-auto lg:basis-1/3">
             <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 object-contain"
            />
            <span className="text-xl font-semibold text-black ml-0 pl-0">UZQEQ</span>
            </Link>
              <button 
                className="lg:hidden text-white text-xl focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Contact Info + Language + Social */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-8 lg:basis-2/3">
              {/* Contact Info */}
              <div className="flex items-center gap-8">
                <div className="flex items-center">
                  <div className="text-[#FCDB16] mr-3 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Our Location</p>
                    <p className="text-sm">California, TX 70240</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-[#FCDB16] mr-3 text-xl">
                    <FaEnvelopeOpen />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Send Us Mail</p>
                    <p className="text-sm">Info@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-[#FCDB16] mr-3 text-xl">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="text-sm">+123 456 7890</p>
                  </div>
                </div>
              </div>

              {/* Language Selector with Hover Effect */}
              <div className="ml-6 relative group">
                <div className="flex items-center cursor-pointer">
                  <div className="text-gray-400 group-hover:text-[#FCDB16] transition-colors duration-200 mr-1">
                    <FaEllipsisH className="text-xs" />
                  </div>
                  <div className="flex items-center">
                    <ReactCountryFlag 
                      countryCode={language === "EN" ? "US" : language === "FR" ? "FR" : "ES"} 
                      svg 
                      style={{ width: '1em', height: '1em' }} 
                      className="mr-2"
                    />
                    <select 
                      value={language}
                      onChange={handleLanguageChange}
                      className="bg-transparent text-white text-sm px-1 py-1 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="EN" className="bg-[#212529] flex items-center">
                        <span className="flex items-center">
                          <ReactCountryFlag countryCode="US" svg className="mr-2" />
                          English
                        </span>
                      </option>
                      <option value="FR" className="bg-[#212529] flex items-center">
                        <span className="flex items-center">
                          <ReactCountryFlag countryCode="FR" svg className="mr-2" />
                          Français
                        </span>
                      </option>
                      <option value="ES" className="bg-[#212529] flex items-center">
                        <span className="flex items-center">
                          <ReactCountryFlag countryCode="ES" svg className="mr-2" />
                          Español
                        </span>
                      </option>
                    </select>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px bg-gray-500 group-hover:bg-[#FCDB16] transition-colors duration-200 w-full"></div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 text-[#FCDB16] text-lg ml-4">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-[#2c3034] transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}>
          <div className="px-4 grid grid-cols-1 gap-6">
            {/* Contact Info */}
            <div className="flex items-center">
              <div className="text-blue-500 mr-3 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Our Location</p>
                <p className="text-sm text-white">California, TX 70240</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-blue-500 mr-3 text-xl">
                <FaEnvelopeOpen />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Send Us Mail</p>
                <p className="text-sm text-white">Info@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-blue-500 mr-3 text-xl">
                <FaMobileAlt />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Call Us</p>
                <p className="text-sm text-white">+123 456 7890</p>
              </div>
            </div>

            {/* Language & Social Icons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaEllipsisH className="text-gray-400 mr-1 text-xs" />
                <div className="flex items-center">
                  <ReactCountryFlag 
                    countryCode={language === "EN" ? "US" : language === "FR" ? "FR" : "ES"} 
                    svg 
                    style={{ width: '1em', height: '1em' }} 
                    className="mr-2"
                  />
                  <select 
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-transparent text-white text-sm px-1 py-1 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="EN" className="bg-[#212529] flex items-center">
                      <span className="flex items-center">
                        <ReactCountryFlag countryCode="US" svg className="mr-2" />
                        English
                      </span>
                    </option>
                    <option value="FR" className="bg-[#212529] flex items-center">
                      <span className="flex items-center">
                        <ReactCountryFlag countryCode="FR" svg className="mr-2" />
                        Français
                      </span>
                    </option>
                    <option value="ES" className="bg-[#212529] flex items-center">
                      <span className="flex items-center">
                        <ReactCountryFlag countryCode="ES" svg className="mr-2" />
                        Español
                      </span>
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 text-[#FCDB16] text-lg">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${mobileMenuOpen ? 'h-[180px]' : 'h-[80px]'}`}></div>
    </div>
  );
};

export default ScrollHeader;