import OrderService from "../api/cart";
import {useEffect, useState} from "react";
import {format, parseISO} from 'date-fns';
import { ru } from 'date-fns/locale';



const Profile = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await OrderService.getOrdersUser()
            setOrders(orders) // remove curly braces here
            console.log(orders)
        };
        fetchOrders()
    }, []);
    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Номер заказа </th>
                        <th>Сумма</th>
                        <th>Дата заказа </th>
                    </tr>
                    </thead>
                    <tbody id="cart">
                    { orders.sort((first, second) => 0 - (first.id < second.id ? 1 : -1)).map((item) => (
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.totalPrice} </td>
                                {/*<td> {format(item.date, 'dd MMMM yyyy', { locale: ru })} </td>*/}
                                <td> { format(parseISO(item.date), 'dd MMMM yyyy', { locale: ru})}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile;