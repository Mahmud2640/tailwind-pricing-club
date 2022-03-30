import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, link: "/home", name: "Home" },
    { id: 2, link: "/shop", name: "Shop" },
    { id: 3, link: "/deals", name: "Deals" },
    { id: 4, link: "/coupons", name: "Coupons" },
    { id: 4, link: "/contact", name: "Contact" },
  ];
  return (
    <nav>
      <ul>
        {
            routes.map(route => 
          <Link
           key={route.id} 
           route={route}>
           </Link>
        )
        }
      </ul>
    </nav>
  );
};

export default Navbar;
