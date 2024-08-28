import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ButtonConfig from "@/components/Button";
import TextArea from "antd/es/input/TextArea";
import { FiEdit } from "react-icons/fi";

export default function EditModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCancel = () => {
    // Logic cho nút Hủy
  };

  const handleOK = () => {
    // Logic cho nút Đánh giá
  };

  return (
    <div className="flex flex-col gap-2">
      <FiEdit onClick={onOpen} className="cursor-pointer" />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="rounded-none"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chỉnh sửa bài đăng
              </ModalHeader>
              <ModalBody>
                
              </ModalBody>
              <ModalFooter>
                <ButtonConfig bordered onClick={onClose}>
                  Hủy
                </ButtonConfig>
                <ButtonConfig onClick={handleOK}>
                  Xác nhận
                </ButtonConfig>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
