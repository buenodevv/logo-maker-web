import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({selectedIndex}) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 2,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border h-screen shadow-sm">
      <div>
        {menuList.map((menu, index) => (
          <h2
          onClick={() => {setActiveIndex(index);
            selectedIndex(index)
          }
          }
            className={`text-lg flex items-center gap-2
           p-3 px-7 text-gray-500 my-2 
           cursor-pointer hover:text-white hover:bg-primary
           ${activeIndex === index && "bg-primary text-white"}
           `}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
