import React from "react";

const BasketItem = ({ item,product }) => {
  return (
      <div>
        <div>{product.title} X {item.amount}</div>
      </div>
  );
};

export default BasketItem;
