// Navbar.tsx
"use client"
import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/travel-logo.svg" alt="logo" width={50} height={29} />
      </Link>

      <ul className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? 'hidden' : ''}`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <div className="lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full right-0 bg-white shadow-md">
            {/* Add dropdown content here */}
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
