import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Categories from "./components/categories/Categories";
import ProductsInCategories from "./components/products_in_category/ProductsInCategories";
import Auth from "./components/auth/Auth";
import AuthLayer from "./components/auth/AuthLayer";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
      <div>

          <Header/>
          <Routes>
              <Route path="/" element={<Auth/>}/>
              <Route path="/shop" element={<AuthLayer/>}>
                  <Route path="categories" element={<Categories/>}/>
                  <Route path="category/:categoryId" element={<ProductsInCategories/>}/>
                  <Route path="cart" element={<Cart/>}/>
              </Route>
          </Routes>
          <Footer/>
      </div>
  );
};

export default App;

