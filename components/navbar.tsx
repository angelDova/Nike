import Image from "next/image";

import headerLogo from "@/public/assets/images/header-logo.svg";
import { navLinks } from "@/constants";
import { Equal } from "lucide-react";
import { MobileNavbar } from "./mobile-navbar";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {/* grabbed navLinks from constants */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
