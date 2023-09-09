import React, {useState} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import ProductsApiWorker from "../../api/ProductsApiWorker";
import {Button, Card, Col, Image, Input, Modal, Space} from "antd";
import Meta from "antd/es/card/Meta";
import {ShoppingCartOutlined} from "@ant-design/icons";
//import ProductsInCategoriesList from "../products_in_category/ProductsInCategoriesList";
//import Meta from "antd/es/card/Meta";
//import {ShoppingCartOutlined} from "@ant-design/icons";

const ProductsFilter = ({loadProducts}) => {

    let localStorageWorker = new LocalStorageWorker();


    let token = localStorageWorker.get("token");

    let productsApiWorker = new ProductsApiWorker();
    //let [products,setProducts] = useState();
    const [modalIsOpen, setModalOpen] = useState(false);

    let [products,setProducts] = useState({
        name: "",
        grip: "",
        bend: ""

    });

    const filterProducts = () => {

        productsApiWorker.getByFilter(products.name,products.grip,products.bend, token).then(
            response => {
                // eslint-disable-next-line no-unused-expressions
                loadProducts()
                alert("kk")
            }
        ).catch(
            error => {
                alert(error);
            }
        )
    }

    return (
        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Найти</Button>
            <Modal title="Filter"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       filterProducts()
                   }}
                   onCancel={() => setModalOpen(false)}
                   okText="Filter"
                   cancelText="Отмена">
                <div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={products.name}
                               onChange={event => setProducts({...products, name: event.target.value})}
                               placeholder={"Название"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={products.grip}
                               onChange={event => setProducts({...products, grip: event.target.value})}
                               placeholder={"grip"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={products.bend}
                               onChange={event => setProducts({...products, bend: event.target.value})}
                               placeholder={"bend"}/>
                    </div>
                </div>
            </Modal>
        </Space>

    );
};

export default ProductsFilter;