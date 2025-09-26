// api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // ← aquí debe apuntar al backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // si usas cookies o sesiones
});

export default instance;