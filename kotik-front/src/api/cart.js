import axios from "axios";
import authHeader from "../utils/auth-header";
const API_URL = "http://localhost:8088/order/";
class OrderService {
    completeOrder(totalPrice) {
        console.log(totalPrice)
        return axios
            .post(API_URL + "completeOrder",{ totalPrice }, {headers: authHeader()})
            .then((response) => {
                return response;
            });
    }

    getOrdersUser() {
        return axios
            .get(API_URL, {headers: authHeader()})
            .then((response) => {
                return response.data;
            })
    }
}
export default new OrderService();