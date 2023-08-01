import axios from "axios";

class OrdersApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/products"
            baseURL: "http://localhost:8080/orders"
        });
    }

    async makeOrder(userParams, token) {
        return await this.#axios.post("/make-order", userParams, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default OrdersApiWorker;