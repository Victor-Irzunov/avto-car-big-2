// /components/Form/FormPodborAvto.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DataCar } from "@/constans/CarData";
import qs from "qs";
import { transliterate } from "@/transliterate/transliterate";

const engineOptions = ["Бензин", "Дизель", "Газ", "Электро"];
const transmissionOptions = ["Автомат", "Механика"];
const bodyTypeOptions = [
  "Седан",
  "Универсал",
  "Внедорожник",
  "Минивэн",
  "Хэтчбек",
  "Лифтбек",
  "Микроавтобус",
  "Купе",
  "Кабриолет",
  "Пикап",
  "Другое",
];
const driveOptions = ["Передний привод", "Задний привод", "Полный привод"];

const baseSelectClasses =
  "select w-full border-none rounded-2xl text-sm text-[#111827] h-12 shadow-none focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:bg-white";

// функция, которая меняет цвет поля, если есть значение
const getSelectClasses = (hasValue) =>
  `${baseSelectClasses} ${hasValue ? "bg-[#E5E5E5]" : "bg-[#F7F7F7]"}`;

const FormPodborAvto = () => {
  const router = useRouter();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedDrive, setSelectedDrive] = useState("");

  const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 2025 - i);
  const prices = Array.from({ length: 200000 / 1000 }, (_, i) => (i + 1) * 1000);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel("");
    setSelectedGeneration("");
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setSelectedGeneration("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const brandPath = selectedBrand
      ? transliterate(selectedBrand).replace(/\s+/g, "-").toLowerCase()
      : "";
    const modelPath = selectedModel
      ? transliterate(selectedModel).replace(/\s+/g, "-").toLowerCase()
      : "";
    const basePath = selectedBrand
      ? `/auto/${brandPath}${selectedModel ? `/${modelPath}` : ""}`
      : "/auto";

    const query = {
      generation: selectedGeneration || undefined,
      yearFrom: yearFrom || undefined,
      yearTo: yearTo || undefined,
      priceFrom: priceFrom || undefined,
      priceTo: priceTo || undefined,
      currency,
      engine: selectedEngine || undefined,
      transmission: selectedTransmission || undefined,
      bodyType: selectedBodyType || undefined,
      drive: selectedDrive || undefined,
    };

    const queryString = qs.stringify(query, {
      skipNulls: true,
      addQueryPrefix: true,
    });
    router.push(`${basePath}${queryString}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid xz:grid-cols-1 sd:grid-cols-2 gap-4 sd:gap-6"
    >
      {/* Марка */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Марка</label>
        <select
          className={getSelectClasses(!!selectedBrand)}
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">Выберите марку</option>
          {DataCar.map((brand) => (
            <option key={brand.id} value={brand.brand}>
              {brand.brand}
            </option>
          ))}
        </select>
      </div>

      {/* Модель */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Модель</label>
        <select
          className={getSelectClasses(!!selectedModel)}
          value={selectedModel}
          onChange={handleModelChange}
          disabled={!selectedBrand}
        >
          <option value="">Выберите модель</option>
          {selectedBrand &&
            DataCar.find((brand) => brand.brand === selectedBrand).type.map(
              (model) => (
                <option key={model.id} value={model.model}>
                  {model.model}
                </option>
              )
            )}
        </select>
      </div>

      {/* Поколение */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Поколение</label>
        <select
          className={getSelectClasses(!!selectedGeneration)}
          value={selectedGeneration}
          onChange={(e) => setSelectedGeneration(e.target.value)}
          disabled={!selectedModel}
        >
          <option value="">Выберите поколение</option>
          {selectedBrand &&
            selectedModel &&
            DataCar.find((brand) => brand.brand === selectedBrand)
              .type.find((model) => model.model === selectedModel)
              .generations.map((generation, idx) => (
                <option key={idx} value={generation}>
                  {generation}
                </option>
              ))}
        </select>
      </div>

      {/* Год (от/до) */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Год</label>
        <div className="grid grid-cols-2 gap-3">
          <select
            className={getSelectClasses(!!yearFrom)}
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
          >
            <option value="">От</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            className={getSelectClasses(!!yearTo)}
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
          >
            <option value="">До</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Тип двигателя */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">
          Тип двигателя
        </label>
        <select
          className={getSelectClasses(!!selectedEngine)}
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
        >
          <option value="">Выберите двигатель</option>
          {engineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Тип трансмиссии */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">
          Трансмиссия
        </label>
        <select
          className={getSelectClasses(!!selectedTransmission)}
          value={selectedTransmission}
          onChange={(e) => setSelectedTransmission(e.target.value)}
        >
          <option value="">Выберите трансмиссию</option>
          {transmissionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Тип кузова */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Кузов</label>
        <select
          className={getSelectClasses(!!selectedBodyType)}
          value={selectedBodyType}
          onChange={(e) => setSelectedBodyType(e.target.value)}
        >
          <option value="">Выберите тип кузова</option>
          {bodyTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Привод */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Привод</label>
        <select
          className={getSelectClasses(!!selectedDrive)}
          value={selectedDrive}
          onChange={(e) => setSelectedDrive(e.target.value)}
        >
          <option value="">Выберите тип привода</option>
          {driveOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Цена (от/до) */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Цена</label>
        <select
          className={getSelectClasses(!!priceFrom)}
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
        >
          <option value="">От</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sd:pt-6 xz:pt-0">
        <label className="text-sm font-medium text-transparent sd:block xz:hidden">
          До
        </label>
        <select
          className={getSelectClasses(!!priceTo)}
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
        >
          <option value="">До</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      {/* Валюта и кнопка поиска */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#111827]">Валюта</label>
        <select
          className={getSelectClasses(!!currency)}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="BYN">BYN</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="flex flex-col justify-end">
        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-[#0F421F] text-sm font-semibold text-white hover:bg-[#0B3317] transition-colors"
        >
          Поиск
        </button>
      </div>
    </form>
  );
};

export default FormPodborAvto;
