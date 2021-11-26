import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Header from "./../../Header/Header/Header";
import Reviews from "./Reviews/Reviews";
import Footer from "./../../Footer/Footer";
import Subscribe from "./../Subscribe/Subscribe"

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
