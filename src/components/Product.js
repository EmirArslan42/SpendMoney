"use client"
import React from "react";
import { moneyFormat } from "@/helpers";
export const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id == product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    console.log(product.image);

    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      //ürün daha önce eklenmemiş
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((basket) => basket.id === product.id);
    //ürün daha önce eklenmiş
    checkBasket.amount -= 1;
    // if(checkBasket.amount==-1){
    //   checkBasket.amount=0;
    // }
    if (checkBasket.amount == 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className="product w-[24%] border border-solid border-[#ddd] bg-white p-4 mb-5 flex flex-col justify-between">
      <img className="w-full" src={product.image} alt="" />
      <h3 className="text-xl mb-3 font-semibold">{product.title}</h3>
      <div className="price text-xl text-[#179b17]">
        ${moneyFormat(product.price)}
      </div>
      <div className="actions flex items-center mt-4">
        <button
          className="sell-btn h-10 flex justify-center items-center flex-1 px-4 cursor-pointer bg-[#ccc] text-[#333] rounded-tl-[1px] rounded-bl-[1px]"
          onClick={removeBasket}
          disabled={!basketItem}
        >
          Sat
        </button>
        <span className="amount w-[50px] text-center border border-solid border-[#ddd] h-10 flex justify-center items-center text-[17px] font-bold text-[#555]">
          {(basketItem && basketItem.amount) || 0}
        </span>
        <button
          className="buy-btn h-10 flex justify-center items-center flex-1 px-4 bg-[#61dadb] cursor-pointer text-[14px] font-normal rounded-tr-[1px] rounded-br-[1px]"
          onClick={addBasket}
          disabled={total + product.price > money}
        >
          Satın al
        </button>
      </div>
    </div>
  );
};
