import config from '../app.config'
import fun from "../lib/function";

const user_id = fun.getItem('user_id');

export const orders = async () => {
    const data = await fetch(`${config.url}orders/customer/${user_id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });
    return await data.json();
};

export const orders_products = async (order_id) => {
    const data = await fetch(`${config.url}orders/order_products/${order_id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });
    return await data.json();
};

export const orderInfo = async (match) =>{

    const data = await fetch(`${config.url}orders/${match.params.id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });

    return await data.json();
};