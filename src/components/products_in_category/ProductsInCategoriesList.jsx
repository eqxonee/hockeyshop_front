import React from 'react';
import {Button, Card, Col, Image} from "antd";
import Meta from "antd/es/card/Meta";
import {ShoppingCartOutlined} from "@ant-design/icons";
import LocalStorageWorker from "../store/LocalStorageWorker";
import CartsApiWorker from "../../api/CartsApiWorker";


const ProductsInCategoriesList = ({products}) => {

    let localStorageWorker = new LocalStorageWorker();

    let userid = localStorageWorker.get("userid");
    let token = localStorageWorker.get("token");

    let cartsApiWorker = new CartsApiWorker();

    const addProductToCart = (productId) => {

        let insertedItem = {
            userId: userid,
            productId: productId
        };

        cartsApiWorker.addNew(insertedItem, token).then(
            response => {
                alert("Товар успешно добавлен в корзину");
            }
        ).catch(
            error => {
                alert(error);
            }
        )
    }

    return (
        <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}
             span={24}>
            {
                products.map(product => {
                    return (
                        <Card
                            style={{width: "250px"}}
                            cover={<Image alt="purchase" src={product.picturePath}/>}
                            hoverable={false}>
                            <Meta
                                title={product.name}
                                description={product.description}
                            />
                            <li>Цена: {product.price}</li>
                            <li>Жесткость: {product.rigidity}</li>
                            <li>Загиб пера: {product.bend}</li>
                            <li>Хват: {product.grip}</li>
                            <li>Страна изготовитель: {product.countryName}</li>


                            <Button type="primary" style={{marginTop: "10px"}}
                                   onClick={()=>addProductToCart(product.id)} ><ShoppingCartOutlined/></Button>
                        </Card>
                    )
                })
            }
        </Col>


    );
};

export default ProductsInCategoriesList;