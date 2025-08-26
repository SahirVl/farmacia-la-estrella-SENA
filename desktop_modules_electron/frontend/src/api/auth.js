import axiosInstance from "./axios";

export async function loginUsuario(email, password) {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });

    const usuario = response.data; // ✅ extraer solo el usuario

    console.log("Usuario recibido:", usuario);

    if (!usuario || !usuario.role) {
      throw new Error("Respuesta inválida del servidor");
    }

    return usuario;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message || "Credenciales incorrectas"
      );
    }
    throw new Error("Error de conexión con el servidor");
  }
}
