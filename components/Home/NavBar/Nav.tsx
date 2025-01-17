"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/constant/constants";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "../../../public/images/ia.webp";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bg_style = navBg ? "bg-transparent bg-black/80 shadow-md" : "";

  return (
    <div
      className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200`}
    >
      <div className="ml-8 md:ml-16 w-12 h-12">
        <Image
          src={img}
          alt="DevImg Logo"
          width={48}
          height={48}
          priority={true}
        />
      </div>

      <div className="hidden md:flex items-center justify-center space-x-10 mx-auto">
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-800 hover:to-blue-700 shadow-lg shadow-blue-800/50"
        >
          Iniciar sesión
        </Button>
        <MenuIcon
          onClick={openNav}
          className="cursor-pointer w-6 h-6 md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
