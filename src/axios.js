import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1456/',
});

export default instance;
