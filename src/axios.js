import axios from 'axios';

const instance = axios.create({
  baseUrl: 'http://localhost:1456',
});

export default instance;
