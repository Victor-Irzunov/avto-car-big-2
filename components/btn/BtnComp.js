"use client";

import { useState } from "react";
import Modal from "../modal/Modal";

const BtnComp = ({ title, index, center, red, name, wFull }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsFormSubmitted(false);
    document.getElementById(`my_modal_${index}`).showModal();
  };

  const closeModal = () => {
    document.getElementById(`my_modal_${index}`).close();
  };

  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`}>
      <button
        type="button"
        className={`${wFull ? "w-full" : ""} rounded-2xl text-white ${
          red ? "bg-secondary striped-shining-button" : "bg-primary"
        } btn border-none font-semibold xz:btn-md sd:btn-md`}
        onClick={() => handleOrderClick(name ? name : title)}
      >
        {title}
      </button>

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
        index={index}
      />
    </div>
  );
};

export default BtnComp;
