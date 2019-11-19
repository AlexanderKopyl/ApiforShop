import fun from "./lib/function";

export default {
    // url: 'https://api.zoocomplex.com.ua/api/',
    url: 'http://localhost:3001/api/',
    // user_id: fun.getItem('user_id'),
    user_id: localStorage.getItem('user_id'),
}