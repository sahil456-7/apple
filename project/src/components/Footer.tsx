import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help']
    }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600">United States</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                Copyright © 2024 Apple Inc. All rights reserved.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms of Use</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Sales and Refunds</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Legal</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;