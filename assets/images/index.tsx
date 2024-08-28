import imgLogin from "./imgLogin.png";
import HoaTietPhai from "./HoaTietPhai.png";
import HoaTietTrai from "./HoaTietTrai.png";
import logo from "./logo.png";
import { StaticImageData } from "next/image";

interface Images {
  imgLogin: StaticImageData;
  HoaTietPhai: StaticImageData;
  HoaTietTrai: StaticImageData;
  logo: StaticImageData;
}

export const images: Images = {
  imgLogin,
  HoaTietPhai,
  HoaTietTrai,
  logo,
};
