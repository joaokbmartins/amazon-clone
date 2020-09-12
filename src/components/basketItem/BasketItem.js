import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./BasketItem.css";

function BasketItem({ index, id, title, price, rating, image, action }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // console.log("Removing item:", index);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      index: index,
    });
  };

  return (
    <div className="basketItem">
      <img src={image} />
      <div className="basketItem__info">
        <strong className="basketItem__title">{title}</strong>
        <p>
          $<strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
