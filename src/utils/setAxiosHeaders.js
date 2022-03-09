import axios from 'axios';

export const setAxiosHeaders = () => {
  axios.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer <TOKEN>`;
    
    return config;
  });
};
