"use client";
import React, { useState } from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products, total,resetBasket }) => {
  return (
    <div>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          product={products.find((p) => p.id == item.id)}
        />
      ))}
      {total > 0 && <p>Toplam : $ {total}</p>}
      <button onClick={resetBasket}>Sepeti Temizle</button>
    </div>
  );
};
export default Basket;
