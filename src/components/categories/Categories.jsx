import React, {useEffect, useState} from 'react';
import CategoriesApiWorker from "../../api/CategoriesApiWorker";
import {Alert} from "antd";
import CategoriesList from "./CategoriesList";

const Categories = () => {

    let [categories, setCategories] = useState([]);
    let [hasApiError,setHasApiError] = useState(false);
    let categoriesApiWorker = new CategoriesApiWorker();

    useEffect(()=>{
        categoriesApiWorker.getAll().then(
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