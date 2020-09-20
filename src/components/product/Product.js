import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        title: title,
        image: image,
        rating: rating,
      },
    });
  };

  const cutProductDescriptionText = (text) => {
    if (text.trim().length > 89) {
      return text.substring(0, 86).trim() + "...";
    }
    return text;
  };

  return (
    <div className="product">
      <div className="product__topInfo">
        <div className="product__image product__gridMarginBottom">
          <img src={image} alt="" />
        </div>
        <div className="product__title product__gridMarginBottom">
          {cutProductDescriptionText(title)}
        </div>
      </div>
      <div className="product__bottomInfo ">
        <div className="product__price product__gridMarginBottom">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating product__gridMarginBottom">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <div className="product__addToBasketButton">
          <button onClick={addToBasket}>Add To Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
