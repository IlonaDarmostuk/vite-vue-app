import axios, { AxiosInstance } from 'axios';
import API_URL from '../config/ApiUrl';

const ApiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default ApiClient;
