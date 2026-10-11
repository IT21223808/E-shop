import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from 'react-icons/fa6';

const FooterLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Blog', link: '/blog' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">

          {/* Company Details */}
          <div>
            <a
              href="/"
              className="inline-block text-2xl font-bold uppercase tracking-widest text-orange-600 sm:text-3xl"
            >
              EShop
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
              Your trusted online marketplace for discovering great
              products and enjoying a convenient shopping experience.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Made with ❤️ for our customers.
            </p>

            <a
              href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-orange-700"
            >
              Visit Our YouTube Channel
            </a>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">
              Important Links
            </h2>

            <ul className="space-y-3">
              {FooterLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-600 transition duration-300 hover:pl-1 hover:text-orange-600"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {FooterLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-600 transition duration-300 hover:pl-1 hover:text-orange-600"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Social Links */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">
              Contact Us
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaLocationArrow className="mt-1 shrink-0 text-lg text-orange-600" />
                <p className="text-sm leading-6 text-gray-600">
                  Sri Lanka
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaMobileAlt className="shrink-0 text-lg text-orange-600" />
                <p className="text-sm text-gray-600">
                  Contact us for assistance
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-7">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Follow Us
              </h3>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
                >
                  <FaInstagram className="text-xl" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
                >
                  <FaFacebook className="text-xl" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 py-5 text-center">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} EShop.lk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;