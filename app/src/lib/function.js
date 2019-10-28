export default {
    getCookie (name){
        let cookie = " " + document.cookie;
        let search = " " + name + "=";
        let setStr = null;
        let offset = 0;
        let end = 0;
        if (cookie.length > 0) {
            offset = cookie.indexOf(search);
            if (offset !== -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset);
                if (end === -1) {
                    end = cookie.length;
                }
                setStr = unescape(cookie.substring(offset, end));
            }
        }
        return setStr;
    },

    setCookie (name, value, days, path) {
        path = path || '/'; // заполняем путь если не заполнен
        days = days || 10;  // заполняем время жизни если не получен параметр

        let last_date = new Date();
        last_date.setDate(last_date.getDate() + days);
        value = escape(value) + ((days==null) ? "" : "; expires="+last_date.toUTCString());
        document.cookie = name + "=" + value + "; path=" + path; // вешаем куки
    },
    deleteCookie ( cookie_name )
    {
        var cookie_date = new Date ( );  // Текущая дата и время
        cookie_date.setTime ( cookie_date.getTime() - 1 );
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }
}