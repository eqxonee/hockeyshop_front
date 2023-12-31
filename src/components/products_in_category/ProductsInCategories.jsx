
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductsApiWorker from "../../api/ProductsApiWorker";
import {Alert, Button} from "antd";
import ProductsInCategoriesList from "./ProductsInCategoriesList";
import LocalStorageWorker from "../store/LocalStorageWorker";
import ProductsFilter from "../filter/ProductsFilter";

const ProductsInCategories = () => {

    let {categoryId} = useParams();
    let [products,setProducts] = useState([]);

    let productsApiWorker = new ProductsApiWorker();
    let [hasApiError,setHasApiError] = useState(false);

    let localStorageWorker = new LocalStorageWorker();
    let token = localStorageWorker.get("token");

    useEffect(() =>{
        productsApiWorker.getByCategoryId(categoryId,token).then(
            response => {
                setProducts(response.data);
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    })

    return (
        <div>
            <h1>Товары</h1>
            {
                hasApiError
                    ? <Alert message="Ошибка запроса" type="error"/>
                    : <ProductsInCategoriesList products={products}/>
            }
        </div>
    );
};

export default ProductsInCategories;