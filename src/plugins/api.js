import axios from 'axios';

// const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `https://backgeek-dev-aaxh.1.us-1.fl0.io`
  // baseURL: 'http://191.52.55.41:19003/'
});

export default api;
