import React from "react";

import { images } from "@/assets";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img
        alt="HoaTietTrai"
        className="absolute -z-50"
        src={images.HoaTietTrai.src}
      />
      <img
        alt="HoaTietPhai"
        className="absolute bottom-0 right-0 -z-50 hoa-tiet-phai"
        src={images.HoaTietPhai.src}
      />
      <div className="w-full h-full flex z-10">
        <div className="flex-1 h-full flex items-center justify-center">
          {children}
        </div>

        <div className="flex-1 lg:flex hidden justify-center">
          <img alt="imgLogin" src={images.imgLogin.src} />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
