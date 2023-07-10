import axios from "axios";

class ProductsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/products"
        });
    }

    async getByCategoryId(id) {
        return await this.#axios.get("/get-by-category-id/" + id);
    }

}

export default ProductsApiWorker