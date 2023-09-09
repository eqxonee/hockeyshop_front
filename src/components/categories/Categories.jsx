import React, {useEffect, useState} from 'react';
import CategoriesApiWorker from "../../api/CategoriesApiWorker";
import {Alert, Button} from "antd";
import CategoriesList from "./CategoriesList";
import {NavLink} from "react-router-dom";
import LocalStorageWorker from "../store/LocalStorageWorker";
import ProductsFilter from "../filter/ProductsFilter";
import ProductsApiWorker from "../../api/ProductsApiWorker";
import ProductsInCategories from "../products_in_category/ProductsInCategories";
import ProductsInCategoriesList from "../products_in_category/ProductsInCategoriesList";


const Categories = () => {

    let [categories, setCategories] = useState([]);
    let [hasApiError,setHasApiError] = useState(false);
    let [showFilter, setShowFilter] = useState(false);
    let [products,setProducts] = useState([]);
    let categoriesApiWorker = new CategoriesApiWorker();
    let localStorageWorker = new LocalStorageWorker();
    let token = localStorageWorker.get("token");
    let productsApiWorker = new ProductsApiWorker();

    useEffect(()=>{
        categoriesApiWorker.getAll(token).then(
            response=> {
                setCategories(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    },[])

    const loadProducts = () => {
        productsApiWorker.getProducts().then(
            response => {
                setProducts(response.data)
            }
        ).catch(
            error => {
                alert("null");
            }
        )
    }

    return (
        <div>
            <NavLink to="/shop/cart">В корзину</NavLink><br/>
            <ProductsFilter loadProducts={loadProducts} products={products}/>

            {/*<Button type="primary" onClick={()=>{*/}
            {/*    showFilter ? setShowFilter(false) : setShowFilter(true)*/}
            {/*}}>Найти</Button>*/}
            {/*{*/}
            {/*    showFilter ? <ProductsFilter/> : <></>*/}
            {/*}*/}
            <h1>Категории</h1>
            {
                hasApiError
                ? <Alert message="Ошибка запроса" type="error"/>
                : <CategoriesList categories={categories}/>
            }
        </div>
    );
};

export default Categories;