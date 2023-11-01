import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `https://backgeek-zioy-dev.fl0.io/`
});

export default api;
