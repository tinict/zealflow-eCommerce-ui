"use client";

import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { FaWpforms } from "react-icons/fa";

import SideBarItem from "@/components/sidebars/profile/SideBarItem";
import DefaultLayout from "@/layouts/DefaultLayout";
import { siteConfig } from "@/config/site";
import ButtonConfig from "@/components/Button";

const sidebars = [
  {
    title: "Hồ sơ của tôi",
    href: siteConfig.routes.profile,
    icon: <VscAccount />,
  },
  {
    title: "Đơn hàng của tôi",
    href: siteConfig.routes.order,
    icon: <FaWpforms />,
  },
  {
    title: "Lịch sử chat",
    href: siteConfig.routes.chat,
    icon: <AiOutlineMessage />,
  },
  {
    title: "Quản lý bài đăng",
    href: siteConfig.routes.post,
    icon: <MdPostAdd />,
  },
  {
    title: "Gói cước của tôi",
    href: siteConfig.routes.orderPackage,
    icon: <GoCreditCard />,
  },
  {
    title: "Sản phẩm yêu thích",
    href: siteConfig.routes.favourite,
    icon: <FaRegHeart />,
  },
];

function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("Hồ sơ của tôi");

  return (
    <DefaultLayout>
      <div className="w-[240px] h-[80vh] absolute top-[50%] translate-y-[-38%] translate-x-[40px] bg-white rounded-lg shadow-xl z-10">
        <div className="flex flex-col items-center p-6 gap-2">
          <img
            alt="avatar"
            className="w-[52px] h-[52px] rounded-full"
            src="https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg"
          />
          <p className="text-black font-medium">Nguyễn Văn Tín</p>
          <ButtonConfig full>Chỉnh sửa</ButtonConfig>
        </div>

        <div>
          {sidebars.map((sidebar, index) => (
            <SideBarItem key={index} sidebarItem={sidebar} />
          ))}
        </div>
      </div>
      <div>{children}</div>
    </DefaultLayout>
  );
}

export default ProfileLayout;
