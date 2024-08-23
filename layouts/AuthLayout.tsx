import { images } from "@/assets";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img
        className="absolute -z-50"
        src={images.HoaTietTrai.src}
        alt="HoaTietTrai"
      />
      <img
        className="absolute bottom-0 right-0 -z-50 hoa-tiet-phai"
        src={images.HoaTietPhai.src}
        alt="HoaTietPhai"
      />
      <div className="w-full h-full flex z-10">
        <div className="flex-1 h-full flex items-center justify-center">
          {children}
        </div>

        <div className="flex-1 lg:flex hidden justify-center">
          <img src={images.imgLogin.src} alt="imgLogin" />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
