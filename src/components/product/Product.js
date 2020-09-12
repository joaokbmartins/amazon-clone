import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image, action }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // DISPATCH THE ITEM INTO THE DATALAYER
    dispatch({
      type: action,
      item: {
        id: id,
        price: price,
        title: title,
        image: image,
        rating: rating,
      },
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
