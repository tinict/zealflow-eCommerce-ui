import { useState, useEffect } from "react";
import axios from "axios";

import { Province, District, Ward } from "@/types/location";

const InputAddress = ({ edit, address, setAddress }: any) => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  useEffect(() => {
    axios
      .get<Province[]>("https://provinces.open-api.vn/api/p/")
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  useEffect(() => {
    if (address.city) {
      axios
        .get<Province>(
          `https://provinces.open-api.vn/api/p/${address.city}?depth=2`,
        )
        .then((response) => {
          setDistricts(response.data.districts);
        })
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [address.city]);

  useEffect(() => {
    if (address.district) {
      axios
        .get<District>(
          `https://provinces.open-api.vn/api/d/${address.district}?depth=2`,
        )
        .then((response) => {
          setWards(response.data.wards);
        })
        .catch((error) => console.error("Error fetching wards:", error));
    }
  }, [address.district]);

  return (
    <div className="flex gap-6">
      <select
        className="  w-full h-[40px] border-1 border-gray-400 outline-none px-4 transition-all
        focus:border-red_main"
        disabled={!edit}
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      >
        <option value="">Chọn tỉnh/thành phố</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>

      <select
        className="  w-full h-[40px] border-1 border-gray-400 outline-none px-4 transition-all
        focus:border-red_main"
        disabled={!address.city && !edit}
        value={address.district}
        onChange={(e) => setAddress({ ...address, district: e.target.value })}
      >
        <option value="">Chọn quận/huyện</option>
        {districts.map((district) => (
          <option key={district.code} value={district.code}>
            {district.name}
          </option>
        ))}
      </select>

      <select
        className="  w-full h-[40px] border-1 border-gray-400 outline-none px-4 transition-all
        focus:border-red_main"
        disabled={!address.district && !edit}
        value={address.commune}
        onChange={(e) => setAddress({ ...address, commune: e.target.value })}
      >
        <option value="">Chọn xã/phường</option>
        {wards.map((ward) => (
          <option key={ward.code} value={ward.code}>
            {ward.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputAddress;
