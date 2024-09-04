"use client";

import { useState } from "react";

import ButtonConfig from "@/components/Button";
import InputConfig from "@/components/inputs/InputConfig";
import InputAddress from "@/components/inputs/InputAddress";

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
    <>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">Hồ sơ của tôi</h1>
      </div>
      <div className="pt-8 pr-[160px] ml-[324px]">
        <div className="flex gap-10 border-b-1 border-black pb-8 mb-6">
          <div>
            <img
              alt="avatar"
              className="w-[100px] h-[100px] rounded-full mb-2"
              src="https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg"
            />
            <ButtonConfig
              full
              className={`${isEdit && "hidden"}`}
              onClick={() => setIsEdit(true)}
            >
              Chỉnh sửa
            </ButtonConfig>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full flex gap-6 justify-between">
              <div className="flex-1">
                <label htmlFor="name">Tên</label>
                <InputConfig
                  disabled={!isEdit}
                  id="name"
                  placeholder="Tên"
                  value={account.name}
                  onChange={(e: any) =>
                    setAccount({ ...account, name: e.target.value })
                  }
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone">Số điện thoại</label>
                <InputConfig
                  disabled={!isEdit}
                  id="phone"
                  placeholder="Số điện thoại"
                  value={account.phone}
                  onChange={(e: any) =>
                    setAccount({ ...account, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <InputConfig
                disabled={!isEdit}
                id="email"
                placeholder="Email"
                value={account.email}
                onChange={(e: any) =>
                  setAccount({ ...account, email: e.target.value })
                }
              />
            </div>
            <div>
              <p>Địa chỉ</p>
              <InputAddress
                address={account}
                edit={isEdit}
                setAddress={setAccount}
              />
            </div>
            <InputConfig
              disabled={!isEdit}
              placeholder="Địa chỉ chi tiết"
              value={account.addressDetail}
              onChange={(e: any) =>
                setAccount({ ...account, addressDetail: e.target.value })
              }
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
                alt="cccd"
                className="w-[100px] h-[100px] rounded-lg border-2 border-red_main border-dashed cursor-pointer mb-2"
                src={
                  securityInfor.url_CCCD ||
                  "https://t4.ftcdn.net/jpg/04/81/13/43/240_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg"
                }
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
                    placeholder="Số CCCD/Hộ chiếu"
                    value={securityInfor.CCCD}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        CCCD: e.target.value,
                      })
                    }
                  />
                  <InputConfig
                    disabled={!isEdit}
                    type="date"
                    value={securityInfor.date_of_issue}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        date_of_issue: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <InputConfig
                  disabled={!isEdit}
                  placeholder="Nới cấp"
                  value={securityInfor.place_of_issue}
                  onChange={(e: any) =>
                    setSecurityInfor({
                      ...securityInfor,
                      place_of_issue: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-full flex gap-6 justify-between">
                <div className="flex-1">
                  <label htmlFor="gender">Giới tính</label>
                  <InputConfig
                    disabled={!isEdit}
                    id="gender"
                    placeholder="Giới tính"
                    value={securityInfor.gender}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        gender: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="dob">Ngày sinh</label>
                  <InputConfig
                    disabled={!isEdit}
                    id="dob"
                    type="date"
                    value={securityInfor.date_of_birth}
                    onChange={(e: any) =>
                      setSecurityInfor({
                        ...securityInfor,
                        date_of_birth: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${!isEdit && "hidden"} flex justify-end gap-6 mt-10`}
          >
            <ButtonConfig bordered onClick={handleCancel}>
              Hủy
            </ButtonConfig>
            <ButtonConfig onClick={handleSave}>Lưu</ButtonConfig>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
