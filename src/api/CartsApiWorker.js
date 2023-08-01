import axios from "axios";

class CartsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/products"
            baseURL: "http://localhost:8080/cart"
        });
    }

    async addNew(insertedItem, token) {
        return await this.#axios.post("/add-new", insertedItem, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    async getByUserId(userId, token) {
        return await this.#axios.get(`/get-by-userid/${userId}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default CartsApiWorker;