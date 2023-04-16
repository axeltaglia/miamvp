import axios from 'axios';

export function axiosSetup() {
    axios.interceptors.request.use(function (config) {
        debugger
        config.url = 'http://localhost:8080' + config.url;
        return config;
    })
}