import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="bg-gray-100 pt-[108px]">
      {/* FORM */}
      <div className="mx-auto w-5/6 rounded-lg bg-white p-6">
        <h1 className="pb-4 text-xl uppercase">Checkout</h1>

        <form action="submit">
          {/* BILLING DETAILS */}
          <fieldset className="my-6 flex flex-col">
            <legend className="pb-4 text-xs font-bold uppercase text-primary-500">
              Billing Details
            </legend>

            <label htmlFor="name" className="pb-2 text-xs font-bold inline">
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
    </div>
  );
};

export default Checkout;
