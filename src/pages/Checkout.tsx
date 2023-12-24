import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (items, currentItem) =>
      items + currentItem.price * (currentItem.quantity ?? 0),
    0,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your order!")
  };

  return (
    <div className="bg-gray-20 pt-[108px]">
      {/* CHECKOUT AND SUMMARY */}
      <div className="wrapper grid gap-8 xl:grid-cols-3">
        {/* FORM */}
        <div className="w-full rounded-lg bg-white p-6 shadow-md xl:col-span-2">
          <h1 className="text-xl uppercase">Checkout</h1>

          <form id="checkoutForm" onSubmit={handleSubmit}>
            {/* BILLING DETAILS */}
            <fieldset className="mb-12 mt-8 grid gap-4 md:grid-cols-2">
              <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
                Billing Details
              </legend>

              <div className="flex flex-col">
                <label htmlFor="name" className="inline pb-2 text-xs font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="pb-2 text-xs font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@email.com"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="pb-2 text-xs font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="123-456-7890"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>
            </fieldset>

            {/* SHIPPING INFO */}
            <fieldset className="mb-12 mt-8 grid gap-4 md:grid-cols-2">
              <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
                Shipping Info
              </legend>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="address" className="pb-2 text-xs font-bold">
                  Your Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="1248 Garden Avenue"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="zip" className="pb-2 text-xs font-bold">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="10001"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="pb-2 text-xs font-bold">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="country" className="pb-2 text-xs font-bold">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  className="rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>
            </fieldset>

            {/* PAYMENT DETAILS */}
            <fieldset className="mb-12 mt-8 grid gap-4 md:grid-cols-2">
              <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
                Payment Details
              </legend>

              <div className="flex flex-col">
                <label
                  htmlFor="moneyNumber"
                  className="relative flex items-center pb-2 text-xs font-bold"
                >
                  e-Money Number
                </label>
                <input
                  type="number"
                  id="moneyNumber"
                  placeholder="1234567890"
                  className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="moneyPin" className="pb-2 text-xs font-bold">
                  e-Money PIN
                </label>
                <input
                  type="number"
                  id="moneyPin"
                  placeholder="1234"
                  className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
                />
              </div>
            </fieldset>
          </form>
        </div>

        {/* SUMMARY */}
        <div>
          <div className="w-full rounded-lg bg-white p-6 shadow-md">
            <h2 className="pb-4 text-xl uppercase">Summary</h2>
            <div>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex w-full items-center justify-between py-3"
                >
                  <div className="flex items-center">
                    <div className="max-w-[60px]">
                      <img
                        src={product.image.mobile}
                        alt={product.name}
                        className="w-full rounded-md"
                      />
                    </div>

                    <div className="flex flex-col pl-4 font-bold">
                      <p className="text-sm">{product.name.split(" ")[0]}</p>
                      <p className="text-xs text-neutral-500">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-neutral-500">
                      x{product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="flex flex-col gap-2 py-4">
              {/* SUBTOTAL */}
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-neutral-500">Total</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </div>

              {/* SHIPPING */}
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-neutral-500">
                  SHIPPING (2.5%)
                </p>
                <p className="font-bold">${(subtotal * 0.025).toFixed(2)}</p>
              </div>

              {/* TAX */}
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-neutral-500">TAX (10%)</p>
                <p className="font-bold">${(subtotal * 0.1).toFixed(2)}</p>
              </div>

              {/* GRAND TOTAL */}
              <div className="flex items-center justify-between py-4">
                <p className="text-sm uppercase text-neutral-500">
                  GRAND TOTAL
                </p>
                <p className="font-bold text-primary-500">
                  ${(subtotal * 1.125).toFixed(2)}
                </p>
              </div>

              <button
                type="submit"
                form="checkoutForm"
                className={`${
                  cart.length < 1
                    ? "pointer-events-none mt-2 inline-block w-full bg-neutral-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base"
                    : "mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
                } `}
              >
                Continue and Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
