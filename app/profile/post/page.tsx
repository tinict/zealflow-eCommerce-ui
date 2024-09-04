"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import ButtonConfig from "@/components/Button";
import EditModal from "@/components/modals/post/EditModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import Search from "@/components/Search";

const rows = [
  {
    id: "1",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "1",
    date: "1",
    form: "1",
    status: "Không hoạt động",
  },
  {
    id: "2",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "2",
    date: "2",
    form: "2",
    status: "Đang hoạt động",
  },
  {
    id: "3",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "3",
    date: "3",
    form: "3",
    status: "Đang hoạt động",
  },
  {
    id: "4",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "4",
    date: "4",
    form: "4",
    status: "Không hoạt động",
  },
  {
    id: "5",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "5",
    date: "5",
    form: "5",
    status: "Đang hoạt động",
  },
  {
    id: "6",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "6",
    date: "6",
    form: "6",
    status: "Không hoạt động",
  },
];

const columns = [
  {
    key: "post",
    label: "Đơn hàng",
  },
  {
    key: "name",
    label: "Tên sản phẩm",
  },
  {
    key: "form",
    label: "Hình thức",
  },
  {
    key: "date",
    label: "Ngày đăng",
  },
  {
    key: "status",
    label: "Trạng thái",
  },
  {
    key: "action",
    label: "#",
  },
];

function PostPage() {
  const renderCell = React.useCallback(
    (order: { [x: string]: any }, columnKey: string | number) => {
      const cellValue = order[columnKey];

      switch (columnKey) {
        case "post":
          return (
            <img className="w-[60px] h-[60px]" src={cellValue} alt="post" />
          );
        case "status":
          return (
            <div
              className={`${cellValue === "Đang hoạt động" ? "bg-red_main" : "bg-gray-400"} py-2 px-4 text-white`}
            >
              {cellValue}
            </div>
          );
        case "action":
          return (
            <div className="flex items-center gap-2 text-[16px]">
              <EditModal />
              <RiDeleteBin6Line className="cursor-pointer" />
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">
          Bài viết của tôi
        </h1>
      </div>
      <div className="ml-[324px] flex flex-col justify-center mt-6 mr-20">
        <Search className='mb-4 float-end max-w-[320px]' />
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                className={`font-medium text-black
                  ${column.key === "status" && "w-[172px]"}
                  ${column.key === "action" && "w-[80px] content-center"}`}
                key={column.key}
              >
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className=" w-full flex justify-center mt-4">
          <ButtonConfig bordered>Xem thêm</ButtonConfig>
        </div>
      </div>
    </>
  );
}

export default PostPage;
