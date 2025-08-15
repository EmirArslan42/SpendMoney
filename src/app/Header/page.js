import React from "react";
import { moneyFormat } from "@/helpers";

const Header = ({ total, money }) => {
  return (
    <div>
      {total > 0 && total - money != 0 && (
        <div className="header h-16 flex justify-center items-center text-2xl text-white tracking-[1px]">Harcayacak $<span className="font-bold mx-3">{moneyFormat(money - total)}</span> paranız kaldı!</div>
      )}
      {total == 0 && <div className="header h-16 flex justify-center items-center text-2xl text-white tracking-[1px]">Harcayacak $ {moneyFormat(money)} paranız var!</div>}
      {total - money == 0 && <div className="header h-16 flex justify-center items-center text-2xl text-white tracking-[1px]">Paran bitti , Parasız insan boş insandır!</div>}
    </div>
  );
};

export default Header;
