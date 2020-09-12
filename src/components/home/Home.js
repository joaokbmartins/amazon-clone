import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={111111}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            rating={5}
            price={12.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            action="ADD_TO_BASKET"
          />
          <Product
            id={111112}
            title="Caboodles Stylist Train Case, Black Lace Over Silver"
            rating={4}
            price={29.53}
            image="https://images-na.ssl-images-amazon.com/images/I/915rpRKQVAL._SL1500_.jpg"
            action="ADD_TO_BASKET"
          />
        </div>

        <div className="home__row">
          <Product
            id={111113}
            title="Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
            rating={4}
            price={41.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Uv3VOrCAL._SL1500_.jpg"
            action="ADD_TO_BASKET"
          />
          <Product
            id={111114}
            title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            rating={4}
            price={15.49}
            image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"
            action="ADD_TO_BASKET"
          />
          <Product
            id={111115}
            title="Energizer AA Batteries (48 Count), Double A Max Alkaline Battery"
            rating={4}
            price={19.95}
            image="https://images-na.ssl-images-amazon.com/images/I/81S%2BpX7uujL._AC_SL1200_.jpg"
            action="ADD_TO_BASKET"
          />
        </div>

        <div className="home__row">
          <Product
            id={111116}
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            rating={4}
            price={158.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            action="ADD_TO_BASKET"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
