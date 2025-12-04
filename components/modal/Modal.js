import FormOrder from "../Form/FormOrder";

const Modal = ({
  selectedProduct,
  closeModal,
  isFormSubmitted,
  setIsFormSubmitted,
  index,
}) => {
  return (
    <dialog id={`my_modal_${index}`} className="modal">
      {!isFormSubmitted ? (
        <div className="modal-box bg-white text-[#222222] xz:max-w-[95%] sd:max-w-3xl rounded-[32px] px-5 sd:px-10 py-7 sd:py-9">
          {/* Кнопка закрытия */}
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost text-[#222222] absolute right-4 top-4"
              type="submit"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              ✕
            </button>
          </form>

          {/* Заголовки */}
          <div className="text-center mt-2 mb-4 sd:mb-6">
            <p className="text-2xl sd:text-3xl font-semibold">
              Заполните данные
            </p>
            <p className="mt-2 text-sm sd:text-base text-[#777777]">
              И мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <FormOrder
            selectedProduct={selectedProduct}
            closeModal={closeModal}
            setIsFormSubmitted={setIsFormSubmitted}
            btn="Оставить заявку"
          />
        </div>
      ) : (
        <div className="modal-box bg-white text-[#222222] xz:max-w-[95%] sd:max-w-md rounded-[32px] px-6 py-8 text-center">
          <p className="text-xl font-semibold mb-2">
            Заявка успешно отправлена!
          </p>
          <p className="text-sm text-[#777777]">
            Мы свяжемся с вами в ближайшее время.
          </p>
        </div>
      )}
    </dialog>
  );
};

export default Modal;
