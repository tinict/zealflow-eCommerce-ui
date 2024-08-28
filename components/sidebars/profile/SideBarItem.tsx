import Link from "next/link";
import React from "react";

function SideBarItem({ sidebarItem }: any) {
  return (
    <Link
      className="
        flex items-center gap-4 px-7 py-2  border-l-4 border-transparent transition-all
         hover:bg-[#FFF4F4] hover:text-red_main hover:border-red_main 
         focus:bg-[#FFF4F4] focus:text-red_main focus:border-red_main 
        "
      href={sidebarItem.href}
    >
      {sidebarItem.icon}
      <p>{sidebarItem.title}</p>
    </Link>
  );
}

export default SideBarItem;
