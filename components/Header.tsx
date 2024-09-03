"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FaRegCircleQuestion } from "react-icons/fa6";

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

function Header() {
  const [country, setCountry] = useState<any | undefined>(countries[0]);

  const handleChangeCountry = (name: string) => {
    const selectedCountry = countries.find((item) => item.name === name);
    setCountry(selectedCountry);
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 bg-[#FFF5BC] text-[12px]">
        <div className="flex items-center gap-1 text-[#750000]">
          <FaRegCircleQuestion />
          <p>Hotline:</p>
          <p className="font-medium">001 234-567-890</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[36px] h-[20px] overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={country.flag} alt="flag" />
            </div>
            <select
            className="outline-none bg-transparent"
              defaultValue={country.name}
              onChange={(e) => handleChangeCountry(e.target.value)}
            >
              {countries.map((item, index) => (
                <option>{item.name}</option>
              ))}
            </select>
          </div>

          <Link href={''}>Về chúng tôi</Link>

          <Link href={''}>Liên hệ</Link>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default Header;
