import config from '../app.config'
import fun from "../lib/function";


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

    async getReward ()  {
        const data = await fetch(`${this.url}customers/reward/${this.user_id}`, {
            headers: {
                'Authorization': 'Bearer ' + fun.getItem('auth_token')
            }
        });
        let {result} = await data.json();
        let items_to_table = [];

        result.forEach((elem) => {
            const {description,points,date_added} = elem;
            let date = new Date(date_added);

            const arrayToTable = {
                description,
                points,
                date_added:fun.formatDate(date)
            };
            items_to_table.push(arrayToTable);
        });

        return items_to_table;
    }
}

export const customerService = new CustomerService(config.url,config.user_id);