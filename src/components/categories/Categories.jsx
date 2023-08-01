import React, {useEffect, useState} from 'react';
import CategoriesApiWorker from "../../api/CategoriesApiWorker";
import {Alert} from "antd";
import CategoriesList from "./CategoriesList";
import {NavLink} from "react-router-dom";
import LocalStorageWorker from "../store/LocalStorageWorker";

const Categories = () => {

    let [categories, setCategories] = useState([]);
    let [hasApiError,setHasApiError] = useState(false);
    let categoriesApiWorker = new CategoriesApiWorker();
    let localStorageWorker = new LocalStorageWorker();
    let token = localStorageWorker.get("token");

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

    return (
        <div>
            <NavLink to="/shop/cart">В корзину</NavLink><br/>
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