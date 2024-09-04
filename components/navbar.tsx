"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import ButtonConfig from "./Button";

import { siteConfig } from "@/config/site";
import { images } from "@/assets";

const countries = [
  {
    name: "Việt Nam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png",
  },
  {
    name: "English",
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERnbE2vj5IueStB7LDbcN0TSrOcJSF6o9Jg&s",
  },
];

function NavbarHeader() {
  const [country, setCountry] = useState<any | undefined>(countries[0]);
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeCountry = (name: string) => {
    const selectedCountry = countries.find((item) => item.name === name);

    setCountry(selectedCountry);
  };

  return (
    <div className="z-50">
      <div className="flex items-center justify-between p-2 bg-[#FFF5BC] text-[12px]">
        <div className="flex items-center gap-1 text-[#750000]">
          <FaRegCircleQuestion />
          <p>Hotline:</p>
          <p className="font-medium">001 234-567-890</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[36px] h-[20px] overflow-hidden">
              <img
                alt="flag"
                className="w-full h-full object-cover object-center"
                src={country.flag}
              />
            </div>
            <select
              className="outline-none bg-transparent"
              defaultValue={country.name}
              onChange={(e) => handleChangeCountry(e.target.value)}
            >
              {countries.map((item, index) => (
                <option key={index}>{item.name}</option>
              ))}
            </select>
          </div>

          <Link href={""}>Về chúng tôi</Link>

          <Link href={""}>Liên hệ</Link>
        </div>
      </div>
      <Navbar
        className="w-screen px-[160px] shadow-md"
        maxWidth="full"
        position="static"
      >
        <NavbarBrand>
          <Link href={siteConfig.routes.home}>
            <img
              alt="logo"
              className="min-w-[100px] h-[36px]"
              src={images.logo.src}
            />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5" justify="center">
          <NavbarItem>
            <Link href="#">Danh mục sản phẩm</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Trao đổi hàng hóa</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Mua bán đồ secondhand</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Hàng cũ đem tặng</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <FiSearch className="text-[24px] text-red_main cursor-pointer" />
          </NavbarItem>
          <NavbarItem>
            <Link href={siteConfig.routes.post}>
              <ButtonConfig>Đăng bài</ButtonConfig>
            </Link>
          </NavbarItem>
          {isLogin ? (
            <NavbarItem>
              <Link href={siteConfig.routes.profile}>
                <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                  <img
                    alt="avatar"
                    className="w-full h-full object-cover object-center"
                    src="https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg"
                  />
                </div>
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Link href={siteConfig.routes.login}>
                <ButtonConfig bordered>Đăng Nhập</ButtonConfig>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
