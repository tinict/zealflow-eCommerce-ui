import { StaticImageData } from "next/image";

import imgLogin from "./imgLogin.png";
import HoaTietPhai from "./HoaTietPhai.png";
import HoaTietTrai from "./HoaTietTrai.png";
import logo from "./logo.png";
import momo from "./momo.png";
import zaloPay from "./zaloPay.png";
import vnPay from "./vnPay.png";

interface Images {
  imgLogin: StaticImageData;
  HoaTietPhai: StaticImageData;
  HoaTietTrai: StaticImageData;
  logo: StaticImageData;
  momo: StaticImageData;
  zaloPay: StaticImageData;
  vnPay: StaticImageData;
}

export const images: Images = {
  imgLogin,
  HoaTietPhai,
  HoaTietTrai,
  logo,
  momo,
  zaloPay,
  vnPay,
};
