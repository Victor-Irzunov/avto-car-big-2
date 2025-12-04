"use client";

import { sendOrderTelegram } from "@/http/telegramAPI";
import { useState } from "react";
import PhoneInput from "./MaskPhone/PhoneInput";

const FormOrder = ({
  selectedProduct,
  closeModal,
  setIsFormSubmitted,
  title,
  btn,
  no,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    middleName: "",
    message: "",
    serviceType: "",
  });
  const [tel, setTel] = useState("+375 ");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const telDigitsOnly = tel.replace(/\D/g, "");
    if (telDigitsOnly.length !== 12) {
      setAlertText(
        "Введите весь номер телефона в формате: +375 XX XXX-XX-XX"
      );
      setAlertActive(true);
      setTimeout(() => {
        setAlertActive(false);
      }, 4000);
      return;
    }

    let messageForm = `<b>Заказ с сайта Автосалона New:</b>\n`;
    messageForm += `<b>${selectedProduct || "Узнать стоимость"}</b>\n`;
    messageForm += `<b>---------------</b>\n`;
    messageForm += `<b>Имя:</b> ${formData.name || "-"}\n`;
    messageForm += `<b>Фамилия:</b> ${formData.lastName || "-"}\n`;
    messageForm += `<b>Отчество:</b> ${formData.middleName || "-"}\n`;
    messageForm += `<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n`;
    messageForm += `<b>---------------</b>\n`;
    messageForm += `<b>Сообщение:</b> ${formData.message || "-"}\n`;

    sendOrderTelegram(messageForm).then((data) => {
      if (data.ok) {
        if (!no && setIsFormSubmitted) {
          setIsFormSubmitted(true);
        }
        window.location.href = "/thank-you";
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        console.error("Ошибка отправки формы");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setTel(value);
  };

  return (
    <div
      className={`w-full sd:px-0 ${
        title ? "xz:px-5" : "xz:px-0"
      } sd:py-2 xz:py-0`}
    >
      {title ? (
        <p className="text-black uppercase font-bold text-center mb-5 text-xl">
          {title}
        </p>
      ) : null}

      <form
        className={`text-black ${
          no ? "flex items-center sd:flex-row xz:flex-col" : ""
        }`}
        onSubmit={handleSubmit}
      >
        {/* Поля ФИО для основного варианта формы */}
        {!no && (
          <div className="w-full space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#222222]">Имя</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите имя"
                className="input w-full bg-[#f7f7f7] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#222222]">Фамилия</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Введите фамилию"
                className="input w-full bg-[#f7f7f7] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#222222]">Отчество</span>
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Введите отчество"
                className="input w-full bg-[#f7f7f7] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        )}

        {/* Телефон */}
        <div
          className={`form-control ${
            no ? "xz:w-full sd:w-auto sd:ml-4 xz:mt-4 sd:mt-0" : "mt-4 w-full"
          }`}
        >
          {!no && (
            <label className="label">
              <span className="label-text text-[#222222]">Номер телефона</span>
            </label>
          )}
          <PhoneInput
            value={tel}
            onChange={handlePhoneChange}
            setAlertText={setAlertText}
            setAlertActive={setAlertActive}
            alertActive={alertActive}
          />
          <div className="label">
            <span className="label-text-alt text-red-400">
              {alertActive ? alertText : ""}
            </span>
          </div>
        </div>

        {/* Сообщение — только в основном варианте */}
        {!no && (
          <div className="form-control mt-3 w-full">
            <label className="label">
              <span className="label-text text-[#222222]">Сообщение</span>
              <span className="label-text-alt">Необязательное поле</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg bg-[#f7f7f7] border-0 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Ваше сообщение"
            ></textarea>
          </div>
        )}

        {/* Кнопка отправки */}
        <div
          className={`form-control ${
            no
              ? "sd:ml-3 xz:ml-0 xz:mt-4 sd:mt-0 xz:w-full sd:w-auto"
              : "mt-6 w-full"
          }`}
        >
          <button
            className={`btn btn-primary font-bold text-white btn-lg ${
              no ? "w-full sd:w-auto rounded-full" : "w-full rounded-full"
            }`}
            type="submit"
          >
            {btn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOrder;
