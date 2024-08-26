import Link from 'next/link'
import React from 'react'

function SideBarItem({ sidebarItem }: any) {
  return (
    <Link className='
        flex items-center gap-4 px-7 py-2 hover:bg-[#FFF4F4] border-l-4 
        hover:text-red_main border-transparent transition-all hover:border-red_main 
        '
         href={sidebarItem.href}>
        {sidebarItem.icon}
        <p>{sidebarItem.title}</p>
    </Link>
  )
}

export default SideBarItem
