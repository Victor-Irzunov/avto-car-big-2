// /components/Form/FormCreditNoCarData.jsx
"use client";

import { useEffect, useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import locale from "antd/lib/locale/ru_RU";
import { sendOrderTelegram } from "@/http/telegramAPI";
import { dollarExchangeRate } from "@/Api-bank/api";
import phoneNumbers from "@/config/config";
import Image from "next/image";
import PhoneInput from "./MaskPhone/PhoneInput";

const getYearSuffix = (years) => {
  if (years <= 1) return "год";
  if (years >= 2 && years <= 4) return "года";
  return "лет";
};

const FormCreditNoCarData = ({
  title = "Кредитный калькулятор",
  srok = "Срок кредитования",
  title2 = "Кредит",
  lizing,
}) => {
  const [creditTerm, setCreditTerm] = useState(4);
  const [initialPayment, setInitialPayment] = useState("");
  const [officialSalary, setOfficialSalary] = useState("");
  const [currentCreditPayment, setCurrentCreditPayment] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [priceAuto, setPriceAuto] = useState("");
  const [dollar, setDollar] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    surname: "",
    phone: "",
    name: "",
    email: "",
    middleName: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    conviction: "",
    driverLicense: "",
    incomeCertificate: "",
    jobExperience: "",
    jobPlace: "",
  });

  const [phone, setPhone] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertActive, setAlertActive] = useState(false);

  useEffect(() => {
    dollarExchangeRate().then((data) => {
      setDollar(data.data.Cur_OfficialRate);
    });
  }, []);

  const calculateMonthlyPayment = () => {
    const loanAmount =
      parseFloat(priceAuto || 0) - parseFloat(initialPayment || 0);
    const months = creditTerm * 12;
    if (months > 0) {
      const monthly = loanAmount / months;
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment("");
    }
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [priceAuto, creditTerm, initialPayment]);

  const handleCreditTermChange = (e) => {
    setCreditTerm(parseInt(e.target.value, 10));
  };

  const handleChildrenCountChange = (e) => {
    setChildrenCount(e.target.value);
  };

  const handleDateChange = (_date, dateString) => {
    setFormData((prevData) => ({
      ...prevData,
      birthDate: dateString,
    }));
  };

  const handleChange = (e) => {
    if (e.target && e.target.name) {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const resetForm = () => {
    setCreditTerm(4);
    setInitialPayment("");
    setOfficialSalary("");
    setCurrentCreditPayment("");
    setChildrenCount("");
    setMonthlyPayment("");
    setPriceAuto("");
    setFormData({
      surname: "",
      phone: "",
      name: "",
      email: "",
      middleName: "",
      birthDate: "",
      gender: "",
      maritalStatus: "",
      conviction: "",
      driverLicense: "",
      incomeCertificate: "",
      jobExperience: "",
      jobPlace: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 12) {
      setAlertText(
        "Введите полный номер телефона в формате +375 XX XXX-XX-XX"
      );
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 3000);
      return;
    }

    const dataToSend = {
      ...formData,
      creditTerm,
      initialPayment,
      officialSalary,
      currentCreditPayment,
      childrenCount,
      priceUSD: priceAuto,
      priceBYN: (priceAuto * dollar).toFixed(1),
    };

    let messageForm = `<b>Заявка на ${title2} без авто с сайта Автосалона:</b>\n`;
    messageForm += `<b>Цена авто:</b> ${priceAuto} USD\n`;
    messageForm += `<b>Ежемесячный платеж:</b> ${monthlyPayment} USD / ${(
      monthlyPayment * dollar
    ).toFixed(1)} BYN\n`;

    // Данные клиента
    messageForm += `<b>Фамилия:</b> ${
      formData.surname || "Не указано"
    }\n`;
    messageForm += `<b>Имя:</b> ${formData.name || "Не указано"}\n`;
    messageForm += `<b>Отчество:</b> ${
      formData.middleName || "Не указано"
    }\n`;
    messageForm += `<b>Телефон:</b> <a href='tel:${formData.phone}'>${
      formData.phone || "Не указано"
    }</a>\n`;
    messageForm += `<b>E-mail:</b> ${
      formData.email || "Не указано"
    }\n`;
    messageForm += `<b>Дата рождения:</b> ${
      formData.birthDate || "Не указано"
    }\n\n`;

    // Дополнительные данные клиента
    messageForm += `<b>Пол:</b> ${
      formData.gender === "male"
        ? "Мужской"
        : formData.gender === "female"
        ? "Женский"
        : "Не указано"
    }\n`;
    messageForm += `<b>Семейное положение:</b> ${
      formData.maritalStatus === "married"
        ? "В браке"
        : formData.maritalStatus === "single"
        ? "Холост/Не замужем"
        : "Не указано"
    }\n`;
    messageForm += `<b>Судимость:</b> ${
      formData.conviction === "yes"
        ? "Есть"
        : formData.conviction === "no"
        ? "Нет"
        : "Не указано"
    }\n`;
    messageForm += `<b>Количество детей до 18 лет:</b> ${
      childrenCount || "Не указано"
    }\n`;
    messageForm += `<b>Наличие водительского удостоверения:</b> ${
      formData.driverLicense === "yes"
        ? "Есть"
        : formData.driverLicense === "no"
        ? "Нет"
        : "Не указано"
    }\n`;
    messageForm += `<b>Наличие справки о доходах:</b> ${
      formData.incomeCertificate === "yes"
        ? "Есть"
        : formData.incomeCertificate === "no"
        ? "Нет"
        : "Не указано"
    }\n`;
    messageForm += `<b>Место работы:</b> ${
      formData.jobPlace || "Не указано"
    }\n`;
    messageForm += `<b>Стаж работы:</b> ${
      formData.jobExperience || "Не указано"
    } лет\n\n`;

    // Финансовые данные
    messageForm += `<b>Срок кредитования:</b> ${creditTerm} ${getYearSuffix(
      creditTerm
    )}\n`;
    messageForm += `<b>Первоначальный взнос:</b> ${
      initialPayment || "Не указано"
    } BYN\n`;
    messageForm += `<b>Официальная зарплата:</b> ${
      officialSalary || "Не указано"
    } BYN\n`;
    messageForm += `<b>Платежи по действующему кредиту:</b> ${
      currentCreditPayment || "Не указано"
    } BYN\n`;

    try {
      const response = await sendOrderTelegram(messageForm);
      resetForm();
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 5000);
      if (response.ok) {
        window.location.href = "/thank-you";
      }
    } catch (error) {
      alert("Ошибка при отправке данных.");
    }
  };

  const inputClasses =
    "input w-full bg-[#F7F7F7] border-none rounded-2xl text-sm text-[#111827] h-11 sd:h-12 focus:outline-none focus:ring-2 focus:ring-[#14532D]";

  // максимум лет для кредита / лизинга
  const maxYears = lizing ? 7 : 10;

  return (
    <div className="mt-6 font-system">
      <form onSubmit={handleSubmit} className="text-[#111827]">
        <div className="bg-white rounded-3xl sd:px-10 xz:px-2 sd:py-10 xz:py-7 shadow-sm border border-[#E5E7EB]">
          {/* Внутренний заголовок для SEO */}
          <h2 className="sr-only">{title}</h2>

          {/* Блок имени / контактов */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-1 block">Имя</label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Введите имя"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">Фамилия</label>
                <input
                  type="text"
                  required
                  name="surname"
                  placeholder="Введите фамилию"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">Отчество</label>
                <input
                  type="text"
                  required
                  name="middleName"
                  placeholder="Введите отчество"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">
                  Номер телефона
                </label>
                <PhoneInput
                  value={phone}
                  onChange={(val) => {
                    setPhone(val);
                    setFormData((prev) => ({ ...prev, phone: val }));
                  }}
                  setAlertText={setAlertText}
                  setAlertActive={setAlertActive}
                  bg={true}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">E-mail</label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Введите e-mail"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">
                  Дата рождения
                </label>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    onChange={handleDateChange}
                    name="birthDate"
                    placeholder="дд/мм/гггг"
                    format="DD/MM/YYYY"
                    className={`${inputClasses} !px-4 !py-2 cursor-pointer`}
                  />
                </ConfigProvider>
              </div>
            </div>

            {/* Пол / семейное / судимость / дети */}
            <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-8 pt-4">
              <div className="space-y-6">
                <div>
                  <span className="block text-sm mb-2">Пол</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>Мужской</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>Женский</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block text-sm mb-2">
                    Семейное положение
                  </span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="married"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>В браке</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="single"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>Холост / не замужем</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="block text-sm mb-2">Судимость</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="conviction"
                        value="yes"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>Есть</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="conviction"
                        value="no"
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <span>Нет</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block text-sm mb-2">
                    Количество детей до 18 лет
                  </span>
                  <input
                    type="number"
                    value={childrenCount}
                    onChange={handleChildrenCountChange}
                    className={`${inputClasses} max-w-xs`}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Вод. удостоверение / справка */}
            <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-8 pt-4">
              <div>
                <span className="block text-sm mb-2">
                  Водительское удостоверение
                </span>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="driverLicense"
                      value="yes"
                      className="radio radio-primary"
                      onChange={handleChange}
                    />
                    <span>Есть</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="driverLicense"
                      value="no"
                      className="radio radio-primary"
                      onChange={handleChange}
                    />
                    <span>Нет</span>
                  </label>
                </div>
              </div>

              <div>
                <span className="block text-sm mb-2">
                  Справка о доходах
                </span>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="incomeCertificate"
                      value="yes"
                      className="radio radio-primary"
                      onChange={handleChange}
                    />
                    <span>Есть</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="incomeCertificate"
                      value="no"
                      className="radio radio-primary"
                      onChange={handleChange}
                    />
                    <span>Нет</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Место работы / стаж */}
            <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4 pt-4">
              <div>
                <label className="text-sm mb-1 block">Место работы</label>
                <input
                  type="text"
                  name="jobPlace"
                  placeholder="Введите место работы"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">Стаж</label>
                <input
                  type="number"
                  name="jobExperience"
                  placeholder="Введите стаж работы"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Зарплата / текущий кредит */}
            <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4 pt-4">
              <div>
                <label className="text-sm mb-1 block">
                  Официальная зарплата
                </label>
                <input
                  type="number"
                  value={officialSalary}
                  onChange={(e) => setOfficialSalary(e.target.value)}
                  className={inputClasses}
                  placeholder="BYN"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">
                  Платежи по действующему кредиту
                </label>
                <input
                  type="number"
                  value={currentCreditPayment}
                  onChange={(e) => setCurrentCreditPayment(e.target.value)}
                  className={inputClasses}
                  placeholder="BYN"
                />
              </div>
            </div>
          </div>

          {/* Стоимость авто / срок / взнос / результат */}
          <div className="space-y-5 mt-10">
            <div>
              <span className="block text-sm mb-2">Стоимость авто</span>
              <input
                type="number"
                value={priceAuto}
                onChange={(e) => setPriceAuto(e.target.value)}
                className={inputClasses}
                placeholder="USD"
              />
            </div>

            {/* Срок кредитования с делениями */}
            <div>
              <span className="block text-sm mb-2">{srok}</span>
              <div className="flex flex-col mt-1">
                <input
                  type="range"
                  min={1}
                  max={maxYears}
                  value={creditTerm}
                  onChange={handleCreditTermChange}
                  className="range range-primary"
                  step={1}
                />
                {/* вертикальные метки */}
                <div className="flex w-full justify-between px-2.5 mt-1 text-xs text-[#9CA3AF]">
                  {Array.from({ length: maxYears }, (_, i) => (
                    <span key={i}>|</span>
                  ))}
                </div>
                {/* подписи по краям */}
                <div className="flex w-full justify-between px-2.5 mt-1 text-[11px] text-[#D1D5DB]">
                  <span>1 год</span>
                  <span>{maxYears} лет</span>
                </div>
              </div>
              <span className="mt-1 inline-block text-sm text-[#14532D] font-medium">
                {creditTerm} {getYearSuffix(creditTerm)}
              </span>
            </div>

            <div>
              <span className="block text-sm mb-2">
                Первоначальный взнос
              </span>
              <input
                type="number"
                value={initialPayment}
                onChange={(e) => setInitialPayment(e.target.value)}
                className={inputClasses}
                placeholder="BYN"
              />
            </div>

            <div className="xz:text-base sd:text-lg font-medium">
              <span>Ежемесячный платёж: </span>
              <span className="text-[#14532D] font-semibold">
                {monthlyPayment || "0.00"} USD /{" "}
                {(monthlyPayment * dollar).toFixed(1)} BYN
              </span>
            </div>
          </div>

          {/* Кнопки */}
          <div className="mt-10 flex flex-col sd:flex-row sd:items-center sd:space-x-6 gap-4">
            <button
              type="submit"
              className="btn w-full sd:w-auto h-11 sd:h-12 rounded-2xl bg-[#14532D] border-none text-white px-10 text-sm sd:text-base hover:bg-[#0F421F]"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </form>

      {/* Кнопка "Позвонить" */}
      <div className="dropdown dropdown-top text-white mt-8 w-full">
        <button
          tabIndex={0}
          className="btn rounded-2xl btn-outline btn-primary w-full bg-white text-[#14532D] border-[#14532D] hover:bg-[#14532D] hover:text-white"
        >
          Позвонить
        </button>

        <div
          tabIndex={0}
          className="dropdown-content bg-[#2D3192] z-30 px-6 py-8 shadow-slate-400 w-[300px] text-center rounded-xl"
        >
          <div>
            <Image
              src="/logo/logo2.webp"
              alt="Логотип - продажа авто в кредит и лизинг"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <p className="text-xl">Мы в Минске</p>
          <div className="mt-5">
            <Image
              src="/svg/location-white.svg"
              alt="Адрес автосалона"
              width={30}
              height={30}
              className="mx-auto mb-2"
            />
            <a
              href="https://yandex.by/maps/-/CDdkfUlz"
              target="_blank"
              className="mt-2 text-sm"
            >
              Минск, ул. Куйбышева 40, <br />
              Паркинг 4 этаж
            </a>
          </div>
          <div className="mt-5">
            <Image
              src="/svg/phone-white.svg"
              alt="Телефон автосалона"
              width={25}
              height={25}
              className="mx-auto mb-2"
            />
            <a
              href={`tel:${phoneNumbers.secondaryPhoneLink}`}
              className="font-light"
            >
              {phoneNumbers.secondaryPhone} МТС
            </a>
          </div>
        </div>
      </div>

      {alertActive && (
        <div
          role="alert"
          className="alert alert-warning fixed max-w-80 z-50 top-[60%] left-1/2 -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856C19.07 19 20 18.07 20 16.938V7.062C20 5.93 19.07 5 17.938 5H6.062C4.93 5 4 5.93 4 7.062v9.876C4 18.07 4.93 19 6.062 19z"
            />
          </svg>
          <span>{alertText}</span>
        </div>
      )}

      {isActive ? (
        <div
          role="alert"
          className="alert alert-success fixed max-w-80 z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Ваша заявка успешно отправлена!</span>
        </div>
      ) : null}
    </div>
  );
};

export default FormCreditNoCarData;
