function Cart() {
  return (
    <div className="absolute top-9 left-0 hidden group-hover:md:flex flex-col shadow bg-white w-[400px] h-[330px] rounded-md">
      <div className="flex flex-col justify-center items-center grow">
        <img
          src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
          alt="cart"
        />
        <p className="font-semibold">سبد خرید شما خالی است !</p>
      </div>
      <div className="border-t flex justify-end">
        <button
          type="button"
          className="text-white flex items-center m-2 gap-2 font-semibold bg-[#EF4056] h-10 py-2 px-4 focus:outline-none text-xs rounded-lg leading-[26.04px]"
        >
          <span> ثبت سفارش</span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
