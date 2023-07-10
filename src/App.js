import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Categories from "./components/categories/Categories";
import ProductsInCategories from "./components/products_in_category/ProductsInCategories";

const App = () => {
  return (
      <div>

          <Header/>

          <Routes>

              <Route path="/" element={<Categories/>}/>
              <Route path="/category/:categoryId" element={<ProductsInCategories/>}/>

          </Routes>
          <Footer/>
      </div>
  );
};

export default App;

