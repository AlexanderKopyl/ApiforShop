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
        return(setStr);
    },

    setCookie (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }
}