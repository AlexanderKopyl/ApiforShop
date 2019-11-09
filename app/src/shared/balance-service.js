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
class CustomerService {

    constructor(url,user_id) {
        this.url = url;
        this.user_id = user_id;
    }

    async getInfo() {
        try {
            const data = await fetch(`${this.url}customers/${this.user_id}`, {
                headers: {
                    'Authorization': 'Bearer ' + fun.getItem('auth_token')
                }
            });

            return await data.json();
        } catch (e) {
            throw  new Error(e)
        }
    }
}

export const customerService = new CustomerService(config.url,config.user_id);