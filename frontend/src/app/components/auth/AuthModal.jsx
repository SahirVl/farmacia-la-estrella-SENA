"use client";

import { useState } from "react";
import { loginUsuario, registrarUsuario } from "../../../../api/auth";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [documentNumber, setDocumentNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const limpiarCampos = () => {
    setDocumentNumber("");
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { user } = await loginUsuario(email, password);
        login(user); // guarda en contexto
        localStorage.setItem("usuario", JSON.stringify(user)); // opcional
        limpiarCampos();
        onClose();
      } else {
        const payload = {
          documentNumber,
          fullName,
          email,
          password,
          address,
          phone,
        };
        const result = await registrarUsuario(payload);
        console.log("Usuario registrado:", result);
        limpiarCampos();
        setSuccess("✅ Se ha registrado correctamente.");
        setTimeout(() => {
          limpiarCampos();
          onClose();
        }, 3000);
      }
    } catch (err) {
      setError(err.message || "Error en autenticación.");
    } finally {
      setLoading(false);
    }
  };

    return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 p-2 rounded-full shadow-md backdrop-blur-sm bg-white/30 border border-gray-200 text-gray-700 hover:bg-white/60 hover:text-red-700 transition-all"
          >
            <span className="text-xl font-bold leading-none"> ✕ </span>
          </button>

          <h2 className="text-xl font-bold text-center mb-4">
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </h2>

          <div className="flex justify-center mb-4">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setError("");
                setSuccess("");
              }}
              className={`px-4 py-2 ${isLogin ? "font-bold underline" : ""}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setError("");
                setSuccess("");
              }}
              className={`px-4 py-2 ${!isLogin ? "font-bold underline" : ""}`}
            >
              Registro
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Número de documento"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </>
            )}
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
            {!isLogin && (
              <>
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </>
            )}

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-600 text-sm text-center">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md transition ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Procesando..." : isLogin ? "Entrar" : "Registrarse"}
            </button>
          </form>
        </div>
      </div>
    )
  );
}