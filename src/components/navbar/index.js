"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="w-full h-[100px] flex items-center justify-between px-10 py-5 bg-white">
      {/* Left: Logo and Brand Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-formanusa.png" // put your Forma Nusa logo in public/logo.png
          alt="Forma Nusa Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Right: Navigation Links */}
      <div className="flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-1 rounded-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-gray-200 text-black"
                : "text-black hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
