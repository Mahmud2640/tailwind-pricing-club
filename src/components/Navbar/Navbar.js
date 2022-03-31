import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, link: "/home", name: "Home" },
    { id: 2, link: "/shop", name: "Shop" },
    { id: 3, link: "/deals", name: "Deals" },
    { id: 4, link: "/coupons", name: "Coupons" },
    { id: 4, link: "/contact", name: "Contact" },
  ];
  return (
    <nav className="bg-indigo-200">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
