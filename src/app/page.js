"use client";
import Image from "next/image";
import Header from "./Header/page";
import { useState, useEffect } from "react";
import Products from "@/components/Products.json";
import { Product } from "@/components/Product";
import Basket from "@/components/Basket";

export default function Home() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    //const tot=
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * Products.find((product) => product.id == item.id).price
        );
      }, 0)
    );
    //console.log(tot);
  }, [basket]);
  return (
    <div>
      <Header total={total} money={money} />
      <div className="container products py-5 w-[1000px] my-0 mx-auto flex flex-wrap justify-between">
        {Products.map((item) => (
        <Product
          basket={basket}
          setBasket={setBasket}
          key={item.id}
          product={item}
          total={total}
          money={money}
        />
      ))}
      </div>
      <div className="!container !w-[1000px] mx-auto">
        {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          total={total}
          products={Products}
          basket={basket}
        />
      )}
      </div>
    </div>
  );
}
