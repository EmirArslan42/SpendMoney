import React from "react";
import { moneyFormat } from "@/helpers";

const Header = ({ total, money }) => {
  return (
    <div>
      {total > 0 && total - money != 0 && (
        <p>Harcayacak $ {moneyFormat(money - total)} paranız kaldı!</p>
      )}
      {total == 0 && <p>Harcayacak $ {moneyFormat(money)} paranız var!</p>}
      {total - money == 0 && <p>Paran bitti , Parasız insan boş insandır!</p>}
    </div>
  );
};

export default Header;
