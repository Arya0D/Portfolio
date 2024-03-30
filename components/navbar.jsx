"use client"

import { useEffect } from 'react';
import NAvMenu from "./NavMenu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.opacity = '0.9';
      } else {
        navbar.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-fit bg-sky-700 p-3 z-10 shadow-xl" id="navbar">
      <div className="flex justify-between items-center">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/120310980?v=4" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <NAvMenu />
      </div>
    </nav>
  );
};

export default Navbar;
