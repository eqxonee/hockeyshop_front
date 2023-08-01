import React, {useEffect, useState} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import CartsApiWorker from "../../api/CartsApiWorker";
import OrdersApiWorker from "../../api/OrdersApiWorker";
import CartItems from "./CartItems";

const Cart = () => {
    let localStorageWorker = new LocalStorageWorker();

    let userid = localStorageWorker.get("userid");
    let token = localStorageWorker.get("token");

    let cartsApiWorker = new CartsApiWorker();
    let [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        cartsApiWorker.getByUserId(userid, token).then(
            response => {
                setCartItems(response.data);
            }
        ).catch(
            error => {
                alert(error);
            }
        )
    }, []);



    return (
        <div>
            {
                cartItems.length === 0
                    ? <h2>Корзина пуста</h2>
                    : <CartItems cartItems={cartItems}/>
            }
        </div>
    );
};

export default Cart;