// components/Footer.jsx
import {
  FaHome,
  FaEnvelopeOpen,
  FaMapMarkedAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="f-items fv1">
          <div className="flex flex-wrap -mx-4">
            
            {/* About Us */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
              <div className="f-item">
                <h4 className="text-xl font-semibold mb-4">About Us</h4>
                <p className="mb-6">
                  Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                </p>
                <div className="address">
                  <ul>
                    <li className="flex items-center mb-2">
                      <FaHome className="mr-3 text-yellow-400" />
                      <span>www.validtheme.com</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaEnvelopeOpen className="mr-3 text-yellow-400" />
                      <span>support@validtheme.com</span>
                    </li>
                    <li className="flex items-center">
                      <FaMapMarkedAlt className="mr-3 text-yellow-400" />
                      <span>123 6th St. Melbourne, FL 32904</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Support */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
              <div className="f-item link full">
                <h4 className="text-xl font-semibold mb-4">Our Support</h4>
                <ul className="space-y-2">
                  {[
                    "Metal Roofing",
                    "Construction",
                    "Green Building",
                    "Laminate Flooring",
                    "House Renovation",
                    "Printing And Cutting",
                    "Packaging",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-yellow-400 transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Hours */}
            <div className="w-full lg:w-1/3 px-4">
              <div className="f-item business-hours">
                <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                <p className="mb-6">
                  Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating
                </p>
                <ul>
                  <li className="flex justify-between border-b border-gray-700 py-2">
                    <span>Monday-Friday</span>
                    <span>9am to 5pm</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 py-2">
                    <span>Saturday</span>
                    <span>10am to 2pm</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">
              © Copyright 2024. Adipotto Template By{' '}
              <a href="#" className="hover:text-yellow-400 transition">
                Validthemes
              </a>
            </p>
            <ul className="flex space-x-6">
              <li>
                <a href="terms-conditions.html" className="hover:text-yellow-400 transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="privacy-policy.html" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="contact-1.html" className="hover:text-yellow-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
