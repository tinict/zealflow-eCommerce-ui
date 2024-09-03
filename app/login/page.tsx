"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Input } from "antd";
import { images } from "@/assets";
import { Button } from "@nextui-org/button";

function LoginPage() {
  return (
    <div className="bg-white md:min-w-[420px] p-10 rounded-md shadow-2xl flex flex-col gap-4 item-center z-50">
      <Link href={siteConfig.routes.home} className="w-full flex justify-center my-4">
        <img className="w-[60%]" src={images.logo.src} alt="logo" />
      </Link>

      <p className="text-[32px] text-red_main text-center font-semibold mb-4">Đăng nhập</p>

      <Input className="h-[40px] rounded-none" placeholder="emali..." />
      <Input className="h-[40px] rounded-none" placeholder="password..." />

      <Button className="bg-red_main h-[40px] rounded-none text-white font-normal">Đăng nhập</Button>
      <p>
        Bạn mới biết đến Echop?{" "}
        <Link className="text-red_main" href={siteConfig.routes.register}>
          Đăng ký
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
