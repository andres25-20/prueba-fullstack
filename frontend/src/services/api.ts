import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'X-API-KEY': '123456789',
  },
});

export const getLocations = async () => {
  const response = await api.get('/locations');
  return response.data;
};
