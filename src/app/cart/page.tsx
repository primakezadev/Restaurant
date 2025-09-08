"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, removeItem, getTotal, getItemCount } = useCart();
  const total = getTotal();
  const itemCount = getItemCount();

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {items.length === 0 ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
          </div>
        ) : (
          items.map((item) => (
            <div key={`${item.id}-${item.options?.title}`} className="flex items-center justify-between mb-4">
              {item.img && <Image src={item.img} alt="" width={100} height={100} />}
              <div className="">
                <h1 className="uppercase text-xl font-bold">{item.title}</h1>
                <span>{item.options?.title || 'Regular'}</span>
                <span className="ml-2">Qty: {item.quantity}</span>
              </div>
              <h2 className="font-bold">${(item.price * item.quantity).toFixed(2)}</h2>
              <span
                className="cursor-pointer text-red-600 text-xl"
                onClick={() => removeItem(item.id, item.options?.title)}
              >
                X
              </span>
            </div>
          ))
        )}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({itemCount} items)</span>
          <span className="">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;