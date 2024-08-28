"use client";

import React, { useEffect, useState } from "react";

import { SearchIcon } from "@/components/icons";
import ChatSidebarItem from "@/components/sidebars/chat";
import { Input } from "@nextui-org/input";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { FaCamera } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Search from "@/components/Search";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

const users = [
  {
    url_avatar:
      "https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg",
    name: "Nguyen Thi Tin",
    status: 1, // 1: Đang hoạt động, 2: Ko hoạt động
    messages: [
      {
        user: 1, // 1: me, 2: you
        time: "26 th8",
        status: 2,
        message:
          "An roi thi di ngu di chu thuc lam gi nua vay. ngu som khoi met nha ban oi. zau zau",
      },
      {
        user: 2, // 1: me, 2: you
        time: "26 th8",
        status: 2,
        message: "An roi",
      },
      {
        user: 1, // 1: me, 2: you
        time: "26 th8",
        status: 1, // 1: Đã xem, 2: chưa xem
        message: "An com chua",
      },
    ],
  },
  {
    url_avatar:
      "https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg",
    name: "Nguyen Thi A",
    status: 2,
    messages: [
      {
        user: 2, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An roi",
      },
      {
        user: 1, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An com chua",
      },
    ],
  },
  {
    url_avatar:
      "https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg",
    name: "Nguyen Thi B",
    status: 2,
    messages: [
      {
        user: 2, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An roi",
      },
      {
        user: 1, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An com chua",
      },
    ],
  },
  {
    url_avatar:
      "https://i.pinimg.com/564x/a7/13/01/a71301bf8fedea65a87068641c3658f9.jpg",
    name: "Nguyen Thi C",
    status: 2,
    messages: [
      {
        user: 2, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An roi",
      },
      {
        user: 1, // 1: me, 2: you
        time: "26 th8",
        status: 1,
        message: "An com chua",
      },
    ],
  },
];

function ChatPage() {
  const [isUser, setIsUser] = useState<any>(users[0]);
  const [dataUser, setDataUser] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    setDataUser(users);
  }, []);

  const handleClickUser = (index: number) => {
    setIsUser(dataUser[index]);
    console.log(isUser);
  };

  const handleSendMessage = () => {
    const _mes = [...isUser.messages];

    _mes.unshift({
      user: 1,
      time: "26 th8",
      status: 1,
      message: inputMessage,
    });

    setIsUser({ ...isUser, messages: _mes });

    setInputMessage("");
  };

  const handleSendIcon = () => {
    const _mes = [...isUser.messages];

    _mes.unshift({
      user: 1,
      type: "icon",
      time: "26 th8",
      status: 1,
      message: <AiFillLike />,
    });

    setIsUser({ ...isUser, messages: _mes });
  };

  return (
    <>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">
          Lịch sử đoạn chat
        </h1>
      </div>
      <div className="ml-[268px] flex">
        <div className="max-w-[320px]">
          <Search className="p-4" />
          <div>
            {dataUser.map((user: any, index: number) => (
              <ChatSidebarItem
                className="flex justify-between p-4 cursor-pointer
              hover:bg-[#FFF4F4] focus:bg-[#FFF4F4] 
              "
                onClick={() => handleClickUser(index)}
                key={index}
                user={user}
              />
            ))}
          </div>
        </div>
        {isUser.messages && (
          <div className="h-[80vh] py-4 px-8 flex-1 bg-[#f8f8f8] flex flex-col">
            <div className="w-full flex items-center justify-between mb-2">
              <div className="flex gap-4">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={isUser.url_avatar}
                  alt="avatar"
                />
                <div>
                  <p className="text-[14px] font-medium leading-3">
                    {isUser.name}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <div
                      className={`${isUser.status === 1 ? "bg-green-500" : "bg-red-500"} w-2 h-2 rounded-full`}
                    ></div>
                    <small>
                      {isUser.status === 1
                        ? "Đang hoạt động"
                        : "Không hoạt động"}
                    </small>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-end items-center gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly size="sm" variant="light">
                      <HiOutlineDotsVertical className="text-black" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="h-full flex-1 flex flex-col justify-between relative">
              <div className="h-[440px] flex flex-col-reverse overscroll-y-auto overflow-y-auto overflow-hidden">
                {isUser.messages.map((mes: any, index: number) => (
                  <div key={index} className="text-[14px]">
                    {mes.user === 1 ? (
                      <div className="float-end max-w-[50%] break-words shadow-sm">
                        <p className="text-end mb-1">{mes.time}</p>
                        {mes.type === "icon" ? (
                          <div className="text-[32px] text-red_main">
                            {mes.message}
                          </div>
                        ) : (
                          <p className="p-3 bg-red_main text-white rounded-lg">
                            {mes.message}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="float-start max-w-[60%] shadow-sm flex gap-2">
                        <img
                          className="w-[32px] h-[32px] rounded-full"
                          src={isUser.url_avatar}
                          alt="avatar"
                        />
                        <div>
                          <p className="mb-1">{mes.time}</p>
                          <p className="p-3 bg-white rounded-lg">
                            {mes.message}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full absolute bottom-0 flex items-center gap-4 px-4 py-3 bg-[#DEDEDE] rounded-lg">
                <div className="flex items-center">
                  <FaCamera />
                </div>

                <input
                  onChange={(e) => setInputMessage(e.target.value)}
                  value={inputMessage}
                  className="flex-1 border-none outline-none bg-transparent text-[14px]"
                  placeholder="Gõ tin nhắn ở đây"
                />

                {inputMessage ? (
                  <IoMdSend
                    onClick={handleSendMessage}
                    className="text-[20px] cursor-pointer hover:text-gray-600 transition-all"
                  />
                ) : (
                  <AiFillLike
                    onClick={handleSendIcon}
                    className="text-[20px] cursor-pointer hover:text-gray-600 transition-all"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatPage;
