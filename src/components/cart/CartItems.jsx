import React, {useState} from 'react';
import OrdersApiWorker from "../../api/OrdersApiWorker";
import LocalStorageWorker from "../store/LocalStorageWorker";
import {Button} from "antd";


const CartItems = ({cartItems}) => {
    let ordersApiWorker = new OrdersApiWorker();

    let localStorageWorker = new LocalStorageWorker();

    let userid = localStorageWorker.get("userid");
    let token = localStorageWorker.get("token");

    const makeOrder = () => {
        let userParams = {
            userId: userid
        };

        ordersApiWorker.makeOrder(userParams, token).then(
            response => {
                alert("Заказ успешно осуществлен");
                window.location.reload();
            }
        ).catch(
            error => {
                alert("Fail Order");
            }
        )

    }

    return (
        <div>
            {
                cartItems.map(item => {
                    return (
                        <div>
                            <b>{item.productName}</b> | {item.productPrice} | <i>{item.amount}</i> | total price
                            = {item.productPrice * item.amount}
                        </div>
                    )
                })
            }
            <Button type="primary" onClick={makeOrder}>Сделать заказ</Button>

        </div>
    );
};

export default CartItems;