import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ index, id, title, price, rating, image, action }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      index: index,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__container">
        <div className="checkoutProduct__product">
          <div className="checkoutProduct__imageOuter">
            <img className="checkoutProduct__image" src={image} />
          </div>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              <p>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span>⭐️</span>
                  ))}
              </p>
            </div>
            <div className="checkoutProduct__buttonRemoveProduct">
              <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
