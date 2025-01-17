import { NavLinks } from '@/constant/constants';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import bg from '../../../public/images/hero.jpg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-y-0' : 'translate-y-[-200%]';

  return (
    <div>
      <div
        className={`fixed flex flex-col items-center justify-center h-screen transform transition-all duration-1000 w-full z-[1050] top-0 bg-gray-950 bg-opacity-50 ${navOpen}`}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white text-xl sm:text-2xl md:text-3xl tracking-wide border-b-2 border-transparent pb-2 hover:text-gray-300 hover:border-gray-300 transition-all duration-300">
              {link.label}
            </p>
          </Link>
        ))}
        <XIcon
          onClick={closeNav}
          className="absolute top-4 right-6 sm:w-10 sm:h-10 w-8 h-8 text-white cursor-pointer hover:text-gray-300 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default MobileNav;
