"use client";
import React, { useState } from "react";
import BasketItem from "./BasketItem";
import { moneyFormat } from "@/helpers";

const Basket = ({ basket, products, total, resetBasket }) => {
  return (
    <div className="basket-container container p-5 mb-4 bg-[#fff] border border-solid border-[#ddd]">
      <h3 className="text-xl font-bold">Alışveriş Detayları</h3>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          product={products.find((p) => p.id == item.id)}
        />
      ))}
      {total > 0 && (
        <p className="total border-t border-solid border-[#ddd]  pt-3 mt-3 text-xl font-bold text-right text-[#179b17]">
          Toplam : $ {moneyFormat(total)}
        </p>
      )}
      <button className="basket-reset-btn bg-[#61dafb] h-10 py-0 px-5 text-[16px] font-medium cursor-pointer" onClick={resetBasket}>Sepeti Temizle</button>
    </div>
  );
};
export default Basket;
