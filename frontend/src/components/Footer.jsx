import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-white">
              JobPortal
            </a>
          </div>

          <div className="flex space-x-6">
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="/jobs" className="hover:text-gray-400">
              Jobs
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 JobPortal. All rights reserved.</p>
          <p className="mt-2">
            Designed by{" "}
            <a
              href="https://yourwebsite.com"
              className="text-blue-400 hover:underline"
            >
              YourName
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
