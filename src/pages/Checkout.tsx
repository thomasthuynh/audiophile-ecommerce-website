import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(CartContext);

  const subtotal = cart.reduce((items, currentItem) => items + currentItem.price * (currentItem.quantity ?? 0), 0)

  return (
    <div className="bg-gray-20 pt-[108px]">
      {/* FORM */}
      <div className="mx-auto mb-8 w-5/6 rounded-lg bg-white p-6 shadow-md">
        <h1 className="pb-4 text-xl uppercase">Checkout</h1>

        <form action="submit">
          {/* BILLING DETAILS */}
          <fieldset className="my-6 flex flex-col">
            <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
              Billing Details
            </legend>

            <label htmlFor="name" className="inline pb-2 text-xs font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />

            <label htmlFor="email" className="pb-2 text-xs font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@email.com"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />

            <label htmlFor="phone" className="pb-2 text-xs font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />
          </fieldset>

          {/* SHIPPING INFO */}
          <fieldset className="my-6 flex flex-col">
            <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
              Shipping Info
            </legend>

            <label htmlFor="address" className="pb-2 text-xs font-bold">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="1248 Garden Avenue"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />

            <label htmlFor="zip" className="pb-2 text-xs font-bold">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              placeholder="10001"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />

            <label htmlFor="city" className="pb-2 text-xs font-bold">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="New York"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />

            <label htmlFor="country" className="pb-2 text-xs font-bold">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="United States"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />
          </fieldset>

          {/* PAYMENT DETAILS */}
          <fieldset className="my-6 flex flex-col">
            <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
              Payment Details
            </legend>

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

            <label htmlFor="moneyPin" className="pb-2 text-xs font-bold">
              e-Money PIN
            </label>
            <input
              type="number"
              id="moneyPin"
              placeholder="1234"
              className="mb-4 rounded-md border border-neutral-300 p-3 text-xs font-bold"
            />
          </fieldset>
        </form>
      </div>

      {/* SUMMARY */}
      <div className="mx-auto mb-8 w-5/6 rounded-lg bg-white p-6 shadow-md">
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
                  <p className="text-xs text-neutral-500">${product.price}</p>
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
          <div className="flex justify-between items-center">
            <p className="uppercase text-neutral-500 text-sm">Total</p>
            <p className="font-bold">${subtotal.toFixed(2)}</p>
          </div>

          {/* SHIPPING */}
          <div className="flex justify-between items-center">
            <p className="uppercase text-neutral-500 text-sm">SHIPPING (2.5%)</p>
            <p className="font-bold">${(subtotal * 0.025).toFixed(2)}</p>
          </div>

          {/* TAX */}
          <div className="flex justify-between items-center">
            <p className="uppercase text-neutral-500 text-sm">TAX (10%)</p>
            <p className="font-bold">${(subtotal * 0.1).toFixed(2)}</p>
          </div>

          {/* GRAND TOTAL */}
          <div className="flex justify-between items-center py-4">
            <p className="uppercase text-neutral-500 text-sm">GRAND TOTAL</p>
            <p className="font-bold text-primary-500">${(subtotal * 1.125).toFixed(2)}</p>
          </div>

          <button className="mt-2 inline-block w-full bg-primary-500 px-6 py-3 text-center text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base">
            Continue and Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
