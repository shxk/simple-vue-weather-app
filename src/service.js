export default {
    getWeather(payload){
        return fetch(process.env.VUE_APP_ROOT_API + payload)
        .then(res => res.json());
    } 
}


    