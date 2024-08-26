"use client";

import ButtonConfig from "@/components/Button";
import InputConfig from "@/components/inputs/InputConfig";
import InputAddress from "@/components/inputs/InputAddress";
import { Input } from "@nextui-org/input";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  const [account, setAccount] = useState({
    url_avatar: "",
    name: "Nguyễn Văn Tín",
    phone: "",
    email: "",
    city: "",
    district: "",
    commune: "",
    addressDetail: "",
  });

  const [securityInfor, setSecurityInfor] = useState({
    url_CCCD: "",
    CCCD: "",
    date_of_issue: "",
    place_of_issue: "",
    gender: "",
    date: "",
    date_of_birth: "",
  });

  const handleSave = () => {
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">Hồ sơ của tôi</h1>
      </div>
      <div className="pt-8 pr-[160px] ml-[324px]">
        <div className="flex gap-10 border-b-1 border-black pb-8 mb-6">
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full mb-2"
              src="https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg"
              alt="avatar"
            />
            <ButtonConfig
              className={`${isEdit && "hidden"}`}
              onClick={() => setIsEdit(true)}
              full
            >
              Chỉnh sửa
            </ButtonConfig>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full flex gap-6 justify-between">
              <div className="flex-1">
                <label htmlFor="name">Tên</label>
                <InputConfig
                  id="name"
                  disabled={!isEdit}
                  value={account.name}
                  onChange={(e: any) =>
                    setAccount({ ...account, name: e.target.value })
                  }
                  placeholder="Tên"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone">Số điện thoại</label>
                <InputConfig
                  id="phone"
                  disabled={!isEdit}
                  onChange={(e: any) =>
                    setAccount({ ...account, phone: e.target.value })
                  }
                  value={account.phone}
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <InputConfig
                id="email"
                disabled={!isEdit}
                onChange={(e: any) =>
                  setAccount({ ...account, email: e.target.value })
                }
                value={account.email}
                placeholder="Email"
              />
            </div>
            <div>
              <p>Địa chỉ</p>
              <InputAddress
                edit={isEdit}
                address={account}
                setAddress={setAccount}
              />
            </div>
            <InputConfig
              disabled={!isEdit}
              onChange={(e: any) =>
                setAccount({ ...account, addressDetail: e.target.value })
              }
              value={account.addressDetail}
              placeholder="Địa chỉ chi tiết"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-medium">Thông tin bảo mật</h1>
          <p className="text-gray-500">
            <small>
              Những thông tin dưới đây mang tính bảo mật. Chỉ bạn mới có thể
              thấy và chỉnh sửa những thông tin này
            </small>
          </p>
          <div className="flex gap-10 mt-6">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-lg border-2 border-red_main border-dashed cursor-pointer mb-2"
                src={
                  securityInfor.url_CCCD ||
                  "https://t4.ftcdn.net/jpg/04/81/13/43/240_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg"
                }
                alt="cccd"
              />
              <p>
                <small>Ảnh CCCD/Hộ chiếu</small>
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h2>CCCD/Hộ chiếu</h2>
                <div className="w-full flex gap-6 justify-between mt-2">
                  <InputConfig
                    disabled={!isEdit}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        CCCD: e.target.value,
                      })
                    }
                    value={securityInfor.CCCD}
                    placeholder="Số CCCD/Hộ chiếu"
                  />
                  <InputConfig
                    type="date"
                    disabled={!isEdit}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        date_of_issue: e.target.value,
                      })
                    }
                    value={securityInfor.date_of_issue}
                  />
                </div>
              </div>
              <div>
                <InputConfig
                  disabled={!isEdit}
                  onChange={(e: any) =>
                    setSecurityInfor({
                      ...securityInfor,
                      place_of_issue: e.target.value,
                    })
                  }
                  value={securityInfor.place_of_issue}
                  placeholder="Nới cấp"
                />
              </div>
              <div className="w-full flex gap-6 justify-between">
                <div className="flex-1">
                  <label htmlFor="gender">Giới tính</label>
                  <InputConfig
                    disabled={!isEdit}
                    id="gender"
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        gender: e.target.value,
                      })
                    }
                    value={securityInfor.gender}
                    placeholder="Giới tính"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="dob">Ngày sinh</label>
                  <InputConfig
                    disabled={!isEdit}
                    id="dob"
                    type="date"
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        date_of_birth: e.target.value,
                      })
                    }
                    value={securityInfor.date_of_birth}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${!isEdit && "hidden"} flex justify-end gap-6 mt-10`}
          >
            <ButtonConfig onClick={handleCancel} bordered>Hủy</ButtonConfig>
            <ButtonConfig onClick={handleSave}>Lưu</ButtonConfig>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
