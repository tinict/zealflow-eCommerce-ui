"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import ButtonConfig from "@/components/Button";
import EvaluateModal from "@/components/modals/order/EvaluateModal";

const rows = [
  {
    id: "1",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "1",
    date: "1",
    form: "1",
    status: "1",
  },
  {
    id: "2",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "2",
    date: "2",
    form: "2",
    status: "2",
  },
  {
    id: "3",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "3",
    date: "3",
    form: "3",
    status: "Đang hoạt động",
  },
  {
    id: "4",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "4",
    date: "4",
    form: "4",
    status: "4",
  },
  {
    id: "5",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "5",
    date: "5",
    form: "5",
    status: "Đang hoạt động",
  },
  {
    id: "6",
    order:
      "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
    name: "6",
    date: "6",
    form: "6",
    status: "6",
  },
  // {
  //   id: "7",
  //   order: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
  //   name: "7",
  //   date: "7",
  //   form: "7",
  //   status: "7",
  // },
  // {
  //   id: "8",
  //   order: "https://i.pinimg.com/564x/c7/74/1b/c7741bf7958b13a969ac44e83a030dde.jpg",
  //   name: "8",
  //   date: "8",
  //   form: "8",
  //   status: "8",
  // },
];

const columns = [
  {
    key: "order",
    label: "Đơn hàng",
  },
  {
    key: "name",
    label: "Tên sản phẩm",
  },
  {
    key: "date",
    label: "Ngày",
  },
  {
    key: "form",
    label: "Hình thức",
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

function OrderPage() {
  const renderCell = React.useCallback(
    (order: { [x: string]: any }, columnKey: string | number) => {
      const cellValue = order[columnKey];

      switch (columnKey) {
        case "order":
          return (
            <img className="w-[60px] h-[60px]" src={cellValue} alt="order" />
          );
        case "status":
          return (
            <p
              className={`${cellValue === "Đang hoạt động" ? "text-green-600" : ""}`}
            >
              {cellValue}
            </p>
          );
        case "action":
          return <EvaluateModal />;
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <div>
      <div className="w-full h-[80px] bg-yellow_main flex justify-center items-center relative">
        <h1 className="text-[24px] font-medium text-red_main">
          Đơn hàng của tôi
        </h1>
      </div>
      <div className="ml-[324px] flex flex-col justify-center mt-6 mr-20">
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                className={`${column.key === "action" && "w-[120px]"}`}
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
    </div>
  );
}

export default OrderPage;
