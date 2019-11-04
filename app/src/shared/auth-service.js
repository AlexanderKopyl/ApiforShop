import config from '../app.config'
import fun from "../lib/function";

export const signIn = async (body) => {

    const fetchItem = await fetch(`${config.url}customers/login`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    let result_answer = await fetchItem.json();
    const {tokens,user} = result_answer[0];
            if (result_answer[0].token !== null) {
                fun.setItem('auth_token', tokens.access.token);
                fun.setItem('time_auth_token', tokens.access.expiredIn);
                fun.setItem('refresh_token', tokens.refresh.token);
                fun.setItem('time_token', tokens.refresh.expiredIn);
                fun.setItem('user_id', user.customer_id);
                return  true;
            } else {
                fun.setItem('auth_token', null);
                return  false;
            }
};

export const checkAuthTokenTime = async () =>{

    const time_auth_token = fun.getItem('time_auth_token'),
          now = new Date().getTime();

    if (now > time_auth_token) {
        const refresh_token = {
            token: fun.getItem('refresh_token')
        };
        const data = await fetch(`${config.url}customers/token`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(refresh_token),
        });

        const token = await data.json();
        fun.setItem('auth_token', token.accessToken);
    }

    return true;

};