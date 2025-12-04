// /components/Form/FormCredit.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import locale from "antd/lib/locale/ru_RU";
import { sendOrderTelegram } from "@/http/telegramAPI";
import { dollarExchangeRate } from "@/Api-bank/api";
import PhoneInput from "./MaskPhone/PhoneInput";

const getYearSuffix = (years) => {
  if (years <= 1) return "год";
  if (years >= 2 && years <= 4) return "года";
  return "лет";
};

const FormCredit = ({ carData }) => {
  const [creditTerm, setCreditTerm] = useState(4);
  const [initialPayment, setInitialPayment] = useState("");
  const [officialSalary, setOfficialSalary] = useState("");
  const [currentCreditPayment, setCurrentCreditPayment] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [dollar, serDollar] = useState(null);
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
      serDollar(data.data.Cur_OfficialRate);
    });
  }, []);

  const priceBYN = parseFloat((carData.priceUSD * dollar).toFixed(0));

  // расчёт ежемесячного платежа
  const calculateMonthlyPayment = () => {
    const loanAmount = carData.priceUSD - parseFloat(initialPayment || 0);
    const months = creditTerm * 12;
    if (months > 0) {
      const monthly = loanAmount / months;
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment("");
    }
  };

  useEffect(() => {
    if (carData.priceUSD && creditTerm) {
      calculateMonthlyPayment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carData.priceUSD, creditTerm, initialPayment]);

  const handleCreditTermChange = (e) => {
    setCreditTerm(parseInt(e.target.value, 10));
  };

  const handleChildrenCountChange = (e) => {
    setChildrenCount(e.target.value);
  };

  const handleDateChange = (date, dateString) => {
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
      carId: carData.id,
      priceUSD: carData.priceUSD,
      carTitle: carData.title,
      carYear: carData.year,
      engineCapacity: carData.engineCapacity,
    };

    let messageForm = `<b>Заявка на кредит с сайта Автосалона:</b>\n`;
    messageForm += `<b>Автомобиль:</b> ${carData.title}, ${carData.year} г.\n`;
    messageForm += `<b>id:</b> ${carData.id} \n`;
    messageForm += `<b>Цена:</b> ${carData.priceUSD} USD / ${carData.priceBYN} BYN\n`;
    messageForm += `<b>Объем двигателя:</b> ${carData.engineCapacity}\n`;
    messageForm += `<b>Тип двигателя:</b> ${carData.engine}\n`;
    messageForm += `<b>Коробка передач:</b> ${carData.transmission}\n`;
    messageForm += `<b>Привод:</b> ${carData.drive}\n\n`;

    // данные клиента
    messageForm += `<b>Фамилия:</b> ${formData.surname || "Не указано"}\n`;
    messageForm += `<b>Имя:</b> ${formData.name || "Не указано"}\n`;
    messageForm += `<b>Отчество:</b> ${
      formData.middleName || "Не указано"
    }\n`;
    messageForm += `<b>Телефон:</b> <a href='tel:${formData.phone}'>${
      formData.phone || "Не указано"
    }</a>\n`;
    messageForm += `<b>E-mail:</b> ${formData.email || "Не указано"}\n`;
    messageForm += `<b>Дата рождения:</b> ${
      formData.birthDate || "Не указано"
    }\n\n`;

    // дополнительные данные
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

    // финансы
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
      if (response) {
        resetForm();
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false);
        }, 5000);
      }
      if (response.ok) {
        window.location.href = "/thank-you";
      }
    } catch (error) {
      alert("Ошибка при отправке данных.");
    }
  };

  const inputClasses =
    "input w-full border border-[#E5E7EB] bg-[#F3F4F6] text-sm text-[#111827] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:bg-white";

  // максимум лет для кредита
  const maxYears = 10;

  return (
    <div className="mt-6 font-system">
      <form
        onSubmit={handleSubmit}
        className="text-[#111827] bg-white rounded-3xl shadow-sm border border-[#E5E7EB]"
      >
        <div className="sd:px-8 xz:px-4 sd:py-8 xz:py-6">
          <h2 className="text-2xl font-semibold mb-6">
            Кредитный калькулятор для {carData.title}
          </h2>

          {/* Верхний блок: данные клиента + авто (справа) */}
          <div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-8">
            {/* Левая часть: форма */}
            <div className="sd:col-span-2 space-y-8">
              {/* Имя / фамилия / контакты */}
              <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4">
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  placeholder="Фамилия"
                  className={inputClasses}
                  onChange={handleChange}
                />

                <PhoneInput
                  value={phone}
                  onChange={(val) => {
                    setPhone(val);
                    setFormData((prev) => ({ ...prev, phone: val }));
                  }}
                  setAlertText={setAlertText}
                  setAlertActive={setAlertActive}
                  bg={false}
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Имя"
                  className={inputClasses}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="E-mail"
                  className={inputClasses}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  placeholder="Отчество"
                  className={inputClasses}
                  onChange={handleChange}
                />
                <ConfigProvider locale={locale}>
                  <DatePicker
                    onChange={handleDateChange}
                    name="birthDate"
                    placeholder="дд/мм/гггг"
                    format="DD/MM/YYYY"
                    className={`${inputClasses} font-bold cursor-pointer`}
                  />
                </ConfigProvider>
              </div>

              {/* Пол, семейное положение, судимость, дети, права, справка */}
              <div className="space-y-6">
                <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium">Пол</span>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>Мужской</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>Женский</span>
                      </label>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium">
                        Семейное положение
                      </span>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="married"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>В браке</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="single"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>Холост/Не замужем</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium">Судимость</span>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="conviction"
                          value="no"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>Нет</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="conviction"
                          value="yes"
                          className="radio radio-sm radio-primary"
                          onChange={handleChange}
                        />
                        <span>Есть</span>
                      </label>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium">
                        Количество детей до 18 лет
                      </span>
                      <input
                        type="number"
                        value={childrenCount}
                        onChange={handleChildrenCountChange}
                        className={`${inputClasses} sd:w-40`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      Водительское удостоверение
                    </span>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="driverLicense"
                        value="no"
                        className="radio radio-sm radio-primary"
                        onChange={handleChange}
                      />
                      <span>Нет</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="driverLicense"
                        value="yes"
                        className="radio radio-sm radio-primary"
                        onChange={handleChange}
                      />
                      <span>Есть</span>
                    </label>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      Справка о доходах
                    </span>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="incomeCertificate"
                        value="no"
                        className="radio radio-sm radio-primary"
                        onChange={handleChange}
                      />
                      <span>Нет</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="incomeCertificate"
                        value="yes"
                        className="radio radio-sm radio-primary"
                        onChange={handleChange}
                      />
                      <span>Есть</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Место работы, стаж, зарплата, платежи */}
              <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4">
                <input
                  type="text"
                  name="jobPlace"
                  placeholder="Место работы"
                  className={inputClasses}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="jobExperience"
                  placeholder="Стаж работы (лет)"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>

              <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">
                    Официальная зарплата
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={officialSalary}
                      onChange={(e) => setOfficialSalary(e.target.value)}
                      className={inputClasses}
                    />
                    <span className="text-xs text-[#6B7280]">BYN</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">
                    Платежи по действующему кредиту
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={currentCreditPayment}
                      onChange={(e) => setCurrentCreditPayment(e.target.value)}
                      className={inputClasses}
                    />
                    <span className="text-xs text-[#6B7280]">BYN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть: карточка авто */}
            <div className="space-y-4">
              {/* desktop */}
              <div className="hidden sd:block">
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl shadow-sm sticky top-4">
                  <figure className="relative">
                    <div className="carousel w-full h-full">
                      {JSON.parse(carData.images).map((image, index) => (
                        <div
                          key={index}
                          className="carousel-item w-full mx-0.5"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${image.original}`}
                            alt={carData.title}
                            className="w-full h-full object-cover rounded-t-2xl"
                            width={320}
                            height={220}
                          />
                        </div>
                      ))}
                      <div className="absolute bottom-2 right-2">
                        <Image
                          src="/svg/left-right.svg"
                          alt="Листайте фото"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </figure>
                  <div className="py-4 px-4">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/catalog/${carData.id}/${carData.titleLink}`}
                    >
                      <h3 className="text-lg font-semibold text-[#111827]">
                        {carData.title}
                      </h3>
                    </Link>
                    <p className="text-[#14532D] mt-1">
                      {carData.priceUSD} USD{" "}
                      <span className="font-semibold">
                        / {priceBYN} BYN
                      </span>
                    </p>
                    <ul className="mt-3 text-xs sd:text-sm text-[#374151] space-y-1">
                      <li className="flex justify-between">
                        <span>Объём</span>
                        <span>{carData.engineCapacity}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Год</span>
                        <span>{carData.year} г.</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Пробег</span>
                        <span>{carData.mileage}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Тип двигателя</span>
                        <span>{carData.engine}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Коробка передач</span>
                        <span>{carData.transmission}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Привод</span>
                        <span>{carData.drive}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* mobile карточка авто */}
              <div className="sd:hidden block">
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl shadow-sm">
                  <figure className="relative">
                    <div className="carousel w-full h-full">
                      {JSON.parse(carData.images).map((image, index) => (
                        <div
                          key={index}
                          className="carousel-item w-full mx-0.5"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${image.original}`}
                            alt={carData.title}
                            className="w-full h-full object-cover rounded-t-2xl"
                            width={280}
                            height={200}
                          />
                        </div>
                      ))}
                      <div className="absolute bottom-2 right-2">
                        <Image
                          src="/svg/left-right.svg"
                          alt="Листайте фото"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </figure>
                  <div className="py-4 px-4">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/catalog/${carData.id}/${carData.titleLink}`}
                    >
                      <h3 className="text-lg font-semibold text-[#111827]">
                        {carData.title}
                      </h3>
                    </Link>
                    <p className="text-[#14532D] mt-1">
                      {carData.priceUSD} USD{" "}
                      <span className="font-semibold">
                        / {priceBYN} BYN
                      </span>
                    </p>
                    <ul className="mt-3 text-xs text-[#374151] space-y-1">
                      <li className="flex justify-between">
                        <span>Объём</span>
                        <span>{carData.engineCapacity}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Год</span>
                        <span>{carData.year} г.</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Пробег</span>
                        <span>{carData.mileage}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Тип двигателя</span>
                        <span>{carData.engine}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Коробка передач</span>
                        <span>{carData.transmission}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Привод</span>
                        <span>{carData.drive}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Блок с кредитным сроком и платежом */}
          <div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-12 mt-10">
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium">Срок кредитования</span>
                <div className="flex flex-col mt-3">
                  <input
                    type="range"
                    min={1}
                    max={maxYears}
                    value={creditTerm}
                    onChange={handleCreditTermChange}
                    className="range range-sm"
                    step={1}
                  />
                  {/* вертикальные деления */}
                  <div className="flex w-full justify-between px-2 text-[10px] text-[#9CA3AF] mt-1">
                    {Array.from({ length: maxYears }).map((_, i) => (
                      <span key={i}>|</span>
                    ))}
                  </div>
                  {/* подписи по краям */}
                  <div className="flex w-full justify-between px-2 mt-1 text-[11px] text-[#D1D5DB]">
                    <span>1 год</span>
                    <span>{maxYears} лет</span>
                  </div>
                </div>
                <span className="text-[#14532D] text-sm font-semibold">
                  {creditTerm} {getYearSuffix(creditTerm)}
                </span>
              </div>

              <div>
                <span className="text-sm font-medium">
                  Первоначальный взнос
                </span>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="number"
                    value={initialPayment}
                    onChange={(e) => setInitialPayment(e.target.value)}
                    className={`${inputClasses} sd:w-40`}
                  />
                  <span className="text-xs text-[#6B7280]">BYN</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex sd:flex-row xz:flex-col sd:items-center xz:items-start gap-2">
                <span className="text-sm font-medium">Цена авто</span>
                <span className="text-[#14532D] font-semibold sd:text-lg xz:text-base">
                  {carData.priceUSD} USD / {priceBYN} BYN
                </span>
              </div>

              <div>
                <span className="text-sm font-medium">
                  Ежемесячный платёж (примерно)
                </span>
                <div className="mt-2">
                  <span className="text-[#14532D] font-bold text-lg">
                    {monthlyPayment} USD /{" "}
                    {parseFloat((monthlyPayment * dollar).toFixed(1))} BYN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка отправки */}
          <div className="mt-10">
            <button
              type="submit"
              className="h-12 w-full sd:w-64 rounded-2xl bg-[#14532D] text-sm font-semibold text-white hover:bg-[#0B3317] transition-colors"
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </form>

      {isActive && (
        <div
          role="alert"
          className="alert alert-success fixed z-50 flex flex-col justify-center max-w-80 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
      )}

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
    </div>
  );
};

export default FormCredit;
