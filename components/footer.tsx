import React from "react";

import { images } from "@/assets";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const footers = [
  {
    title: "Hỗ trợ",
    lis: [
      {
        content: "Hướng dẫn bán hàng",
        router: "",
      },
      {
        content: "Trở thành người bán hàng",
        router: "",
      },
      {
        content: "Câu hỏi thường gặp",
        router: "",
      },
      {
        content: "Chính sách bảo vệ người mua",
        router: "",
      },
      {
        content: "Phản hồi",
        router: "",
      },
      {
        content: "Quy chế hoạt động",
        router: "",
      },
      {
        content: "Chính sách giải quyết tranh chấp",
        router: "",
      },
    ],
  },
  {
    title: "Về Echop",
    lis: [
      {
        content: "Giới thiệu",
        router: "",
      },
      {
        content: "Liên hệ với chúng tôi",
        router: "",
      },
      {
        content: "Blog",
        router: "",
      },
    ],
  },
  {
    title: "Tài khoản",
    lis: [
      {
        content: "Đăng ký",
        router: "",
      },
      {
        content: "Đăng nhập",
        router: "",
      },
      {
        content: "Yêu thích",
        router: "",
      },
      {
        content: "Tin nhắn",
        router: "",
      },
    ],
  },
  {
    title: "Chính sách",
    lis: [
      {
        content: "Chính sách bảo mật",
        router: "",
      },
      {
        content: "Điều khoản dịch vụ",
        router: "",
      },
      {
        content: "Hành vi bị cấm",
        router: "",
      },
      {
        content: "Chính sách giao tiếp",
        router: "",
      },
      {
        content: "Hướng dẫn an toàn sử dụng",
        router: "",
      },
    ],
  },
];

function Footer() {
  return (
    <div className="border-t-2">
      <div className="lg:px-[160px] sm:px-[80px] px-[32px] py-[60px]">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2">
          {footers.map((item, index) => (
            <ul key={index}>
              <h2 className="text-[16px] font-semibold mb-2">{item.title}</h2>
              {item.lis.map((li, index2) => (
                <li
                  className="text-[12px] text-gray-500 my-2 cursor-pointer hover:text-black transition-all"
                  key={index2}
                >
                  {li.content}
                </li>
              ))}
            </ul>
          ))}
          <div>
            <div className="mb-10">
              <h2 className="text-[16px] font-semibold mb-2">
                Theo dõi chúng tôi
              </h2>
              <div className="flex items-center gap-2 text-[24px]">
                <FaFacebook className="text-blue-600 cursor-pointer" />
                <FaYoutube className="text-red-600 cursor-pointer"/>
                <FaInstagram className="text-pink-600 cursor-pointer" />
                <FaTiktok className="cursor-pointer"/>
              </div>
            </div>
            <div>
              <h2 className="text-[16px] font-semibold mb-2">
                Giao dịch của bạn
              </h2>
              <div className="flex h-[32px] gap-2">
                <img className="cursor-pointer" src={images.zaloPay.src} alt="zaloPay" />
                <img className="cursor-pointer" src={images.momo.src} alt="momo" />
                <img className="cursor-pointer" src={images.vnPay.src} alt="vnPay" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-1 bg-black text-[12px]">
        <img className="h-[24px] text-white" src={images.logo.src} alt="logo" />
        <p className="text-white">Copywrite VITPR 2024</p>
      </div>
    </div>
  );
}

export default Footer;
