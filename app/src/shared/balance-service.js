import config from '../app.config'
import fun from "../lib/function";

const user_id = fun.getItem('user_id');

export const customerReward = async () => {
    const data = await fetch(`${config.url}customers/reward/${user_id}`, {
        headers: {
            'Authorization': 'Bearer ' + fun.getItem('auth_token')
        }
    });

    return await data.json();
};