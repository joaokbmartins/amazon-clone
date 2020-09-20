import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotalValue } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatcher] = useStateValue();

  return (
    <div className="subtotal">
      {/* SUBTOTTAL */}
      <div className="subtotal__container">
        {/* CONTAINER */}
        <CurrencyFormat
          decimalScale={2}
          value={getBasketTotalValue(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => (
            <>
              <p className="subtotal__details">
                Subtotal ({basket.length} items):
                <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
        />
        <button>Preceed to Checkout</button>
        {/*
         */}
      </div>
    </div>
  );
}

export default Subtotal;
