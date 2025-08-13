"use client"
import Image from "next/image";
import Header from "./Header/page";
import { useState ,useEffect} from "react";
import Products from "@/components/Products.json"
import { Product } from "@/components/Product";

export default function Home() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(()=>{
    console.log(basket);
  },[basket])
  return (
    <div >
      <Header money={money}/>
      {Products.map((item)=>(
        <Product basket={basket} setBasket={setBasket} key={item.id} product={item}/>
      ))}
    </div>
  );
}
