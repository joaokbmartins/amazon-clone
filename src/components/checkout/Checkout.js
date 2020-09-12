import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import BasketItem from "../basketItem/BasketItem";
import Product from "../product/Product";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatcher] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>

        {basket.map((item, i) => {
          return (
            <BasketItem
              key={i}
              index={i}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          );
        })}
        {/* <BasketItem
          // index={00001}
          // id={00001}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={12.9}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <BasketItem
          // index={00002}
          // id={00002}
          title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={15.49}
          image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"
          rating={3}
        /> */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
