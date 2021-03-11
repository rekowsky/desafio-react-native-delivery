import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.21.147.93:3333',
});
// 172.21.147.93
export default api;
