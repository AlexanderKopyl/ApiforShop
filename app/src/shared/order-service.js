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

export const orderInfo = async (match) => {

    const data = await fetch(`${config.url}orders/${match.params.id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });

    return await data.json();
};


class OrderService {
    constructor(url) {
        this.url = url
    }

    async getAll() {
        try {
            const res = await fetch(`${this.url}orders/order_products/${order_id}`, {
                headers: {'Authorization': 'Bearer ' + fun.getItem('auth_token')}
            });
            return res.json()
        } catch (e) {
            throw  new Error(e)
        }
    }

    async getId(id) {
        try {
            const res = await fetch(`${this.url}orders/order_products/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + fun.getItem('auth_token')
                }
            });
            return res.json();
        } catch (e) {
            throw  new Error(e)
        }
    }

    async getInfo(match) {
        try {
            const res = await fetch(`${this.url}orders/${match.params.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + fun.getItem('auth_token')
                }
            });

            return res.json();
        } catch (e) {
            throw  new Error(e)
        }
    }
}

import {url} from '../app.config';

export const orderService = new OrderService(url);
// orderService.getAll().then(res=>console.log(res));
// orderService.getId(12).then(res=>console.log(res));
// orderService.getInfo('match').then(res=>console.log(res));
