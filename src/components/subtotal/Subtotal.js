import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../utils/StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatcher] = useStateValue();

  const getBasketItemsTotalValue = () => {
    let basketItemsTotalValue = 0;
    basket.map((item, _) => (basketItemsTotalValue += item.price));
    return basketItemsTotalValue;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketItemsTotalValue()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Preceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
