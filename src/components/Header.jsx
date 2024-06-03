
// Header.jsx
// This component acts as the navigation header for the website, containing the site's title and potential navigation links.
// It provides a consistent top navigation bar across different pages.

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Property Management</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger asChild>
                <button className="text-white hover:text-gray-300">Menu</button>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-2">
                <NavigationMenuLink asChild>
                  <a href="/" className="text-gray-900 hover:bg-gray-200 p-2 block">Home</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="/about" className="text-gray-900 hover:bg-gray-200 p-2 block">About Us</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="/contact" className="text-gray-900 hover:bg-gray-200 p-2 block">Contact</a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
