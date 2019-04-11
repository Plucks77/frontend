import axios from 'axios';

const api = axios.create({
    baseURL:'https://omnistack-backend5.herokuapp.com',

});

export default api;