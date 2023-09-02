import axios from "axios";

class ProductsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/products"
        });
    }

    async getByCategoryId(id, token) {
        return await this.#axios.get("/get-by-category-id/" + id, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

    }

    async getByFilter(name, grip,bend,token) {
        return await this.#axios.get(`/get-all-filter?limit=${name}&limit=${grip}limit=${bend}`,{
            headers: {
                "Authorization": "Bearer " + token
            }
        });

    }

    async getProducts(){
        return await this.#axios.get("/get-all");
    }
}

export default ProductsApiWorker