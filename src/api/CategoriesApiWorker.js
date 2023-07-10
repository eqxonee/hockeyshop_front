import axios from "axios";

class CategoriesApiWorker {

    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/categories"
        });
    }

    async getAll() {
        return await this.#axios.get("/get-all");
    }
}

export default CategoriesApiWorker;