import axios from './axios'; // tu instancia configurada

export async function registrarUsuario(datos) {
  try {
    const response = await axios.post('/nuevo-usuario', datos);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al registrar usuario");
  }
}



export async function loginUsuario(email, password) {
  try {
    const response = await axios.post('/login', { email, password });

    if (!response.data || !response.data.user) {
      throw new Error("Respuesta inválida del servidor");
    }

    return response.data; // { user, token, ... }
  } catch (error) {
    const mensaje = error.response?.data?.message || "Error al iniciar sesión";
    throw new Error(mensaje);
  }
}