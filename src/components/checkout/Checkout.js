import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatcher] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__top">
          <div className="checkout__adBanner">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
              className="checkout__adBannerImage"
            />
          </div>
        </div>
        <div className="checkout__right">
          <div className="checkout__rightInner">
            <Subtotal />
          </div>
        </div>
        <div className="checkout__left">
          <div className="checkout__leftInner">
            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
            </div>
            {basket.map((item, i) => (
              <div className="checkout__checkoutProduct">
                <CheckoutProduct
                  key={i}
                  index={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
