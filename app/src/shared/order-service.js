import config from '../app.config'
import fun from "../lib/function";

export const orders = async () => {
    const user_id = fun.getItem('user_id');
    const data = await fetch(`${config.url}orders/customer/${user_id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });
    const items = await data.json();

    return items;
};