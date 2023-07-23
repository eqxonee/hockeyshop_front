import axios from "axios";

class UsersApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/categories"
            baseURL: "http://localhost:8080/users"
        });
    }

    async getIdByToken(token) {
        return await this.#axios.get("/get-id-by-token", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default UsersApiWorker;