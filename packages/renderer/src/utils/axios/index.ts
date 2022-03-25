import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.wod.xyz/image/',
  timeout: 10 * 1000,
});

export default request;
