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

const rows = [
  {
    id: "1",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "1",
    date: "1",
    form: "1",
    status: "Hết hàng",
  },
  {
    id: "2",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "2",
    date: "2",
    form: "2",
    status: "Còn hàng",
  },
  {
    id: "3",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "3",
    date: "3",
    form: "3",
    status: "Còn hàng",
  },
  {
    id: "4",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "4",
    date: "4",
    form: "4",
    status: "Hết hàng",
  },
  {
    id: "5",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "5",
    date: "5",
    form: "5",
    status: "Còn hàng",
  },
  {
    id: "6",
    post: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "6",
    date: "6",
    form: "6",
    status: "Hết hàng",
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

function FavouritePage() {
  const renderCell = React.useCallback(
    (order: { [x: string]: any }, columnKey: string | number) => {
      const cellValue = order[columnKey];

      switch (columnKey) {
        case "post":
          return (
            <img alt="post" className="w-[60px] h-[60px]" src={cellValue} />
          );
        case "status":
          return (
            <div
              className={`${cellValue === "Còn hàng" ? "text-green-500" : "text-black"} py-2 px-4`}
            >
              {cellValue}
            </div>
          );
        case "action":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <ButtonConfig>Mua ngay</ButtonConfig>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">
          Sản phẩm yêu thích
        </h1>
      </div>
      <div className="ml-[324px] flex flex-col justify-center mt-6 mr-20">
        <div className="flex gap-6 justify-end mb-4">
          <ButtonConfig>Thêm</ButtonConfig>
          <ButtonConfig bordered>Xóa</ButtonConfig>
        </div>
        <Table
          aria-label="Example table with dynamic content"
          color="danger"
          selectionMode="multiple"
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                key={column.key}
                className={`font-medium text-black
                  ${column.key === "status" && "w-[172px]"}
                  ${column.key === "action" && "w-[80px] content-center z-10"}`}
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

export default FavouritePage;
