export default {
    getItem (name){
        return localStorage.getItem(name);
    },

    setItem (name, value) {
        localStorage.setItem(name,value);
    },
    removeItem ( name )
    {
        localStorage.removeItem(name);
    }
}