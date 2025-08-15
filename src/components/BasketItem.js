import React from "react";

const BasketItem = ({ item,product }) => {
  return (
      <li className="basket-item list-none pt-3 text-[17px]">
        {product.title} X <span className="text-[#999]">{item.amount}</span>
      </li>
  );
};

export default BasketItem;
