import React from "react";

export const Product = ({ product, basket, setBasket,total,money }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
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
      if(checkBasket.amoun==0){
      setBasket([...basket.filter(item=>item.id !== product.id)])
      }else{
      setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
      }
    }

  
  return (
    <div className="product border border-solid border-[#ddd] bg-white p-3 mb-5">
      <h3 className="text-xl">{product.title}</h3>
      <div className="price">${product.price}</div>
      <div className="actions">
        <button onClick={removeBasket} disabled={!basketItem}>Sat</button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button onClick={addBasket} disabled={total+product.price>money}>Satın Al</button>
      </div>
    </div>
  );
};
