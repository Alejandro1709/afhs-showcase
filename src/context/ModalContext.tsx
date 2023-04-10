/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => { },
  closeModal: () => { },
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}