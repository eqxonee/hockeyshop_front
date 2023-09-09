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

    async getByFilter(name,grip,bend,token) {
        return await this.#axios.get(`/get-all-filter?name=${name}&grip=${grip}&bend=${bend}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        //     async getByFilter(name, grip,bend,token) {
        //         let response =  await this.#axios.get("/get-all-filter",{},{
        //             params: {
        //                 name: name,
        //                 stick_grip: grip,
        //                 stick_bend: bend
        //             },
        //             headers: {
        //                 "Authorization": "Bearer " + token
        //             }
        //         });
        //         return response;
        //
        // }
    }

    async getProducts(){
        return await this.#axios.get("/get-all");
    }
}

export default ProductsApiWorker