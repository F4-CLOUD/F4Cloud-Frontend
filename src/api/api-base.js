import Axios from 'axios';
import { API_SERVER } from '../config/backend';

const api = Axios.create({
  baseURL: `${API_SERVER}`,
});

export default api;
