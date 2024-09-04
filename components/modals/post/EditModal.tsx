import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";

import ButtonConfig from "@/components/Button";

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
      <FiEdit className="cursor-pointer" onClick={onOpen} />
      <Modal
        className="rounded-none"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chỉnh sửa bài đăng
              </ModalHeader>
              <ModalBody />
              <ModalFooter>
                <ButtonConfig bordered onClick={onClose}>
                  Hủy
                </ButtonConfig>
                <ButtonConfig onClick={handleOK}>Xác nhận</ButtonConfig>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
