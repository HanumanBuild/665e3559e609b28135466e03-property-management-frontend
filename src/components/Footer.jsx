
// Footer.jsx
// A simple footer component that displays copyright information and potentially basic contact or company information.
// It ensures a consistent footer across all pages.

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Property Management. All rights reserved.</p>
        <p>For more information, contact us at info@propertymanagement.com</p>
      </div>
    </footer>
  );
};

export default Footer;
