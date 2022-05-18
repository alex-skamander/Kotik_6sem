import axios from "axios";
import authHeader from "../utils/auth-header";
const API_URL = "http://localhost:8088/product/";
class ProductService {
    getAllProductsByType(type) {
        return axios
            .get(API_URL + type,{headers: authHeader()})
            .then((response) => {
                return response;
            });
    }
}
export default new ProductService();