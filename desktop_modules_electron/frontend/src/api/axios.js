// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // ← tu backend, OJO, configurar .env
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ← si usás sesiones o cookies
});

export default axiosInstance;