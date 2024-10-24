"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/photo/netflix-2-logo-svgrepo-com.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNavbar from "./UserNavbar";

interface linkProps {
  name: string;
  href: string;
}

const link: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];
export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-0 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority className="" />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {link.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-h h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNavbar />
      </div>
    </div>
  );
}
