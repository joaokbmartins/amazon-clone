import React from "react";
import "./Home.css";
import Product from "../product/Product";
import Carousel from "../carousel/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__backgroundImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        </div>
        <div className="home__carouselDisplayer">
          <Carousel
            productList={[
              <Product
                id={111111}
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                rating={5}
                price={12.9}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              />,
              <Product
                id={111116}
                title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                rating={4}
                price={158.0}
                image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
              />,
              <Product
                id={111114}
                title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                rating={4}
                price={15.49}
                image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"
              />,
              <Product
                id={111111}
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                rating={5}
                price={12.9}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              />,
              <Product
                id={111116}
                title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                rating={4}
                price={158.0}
                image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
              />,
              <Product
                id={111114}
                title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                rating={4}
                price={15.49}
                image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"
              />,
            ]}
          />
        </div>
        <div className="home__carouselDisplayer">
          <Carousel
            productList={[
              <Product
                id={111111}
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                rating={5}
                price={12.9}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
