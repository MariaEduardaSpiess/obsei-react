import axios from 'axios';

// const api = axios.create({ baseURL: 'http://localhost:8080'});
const api = axios.create({ baseURL: 'https://portal-obsei-api.herokuapp.com/'});

export default api;