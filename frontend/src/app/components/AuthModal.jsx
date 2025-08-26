import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

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
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 ${isLogin ? "font-bold underline" : ""}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 ${!isLogin ? "font-bold underline" : ""}`}
            >
              Registro
            </button>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Nombre"
                className="w-full border px-3 py-2 rounded"
              />
            )}
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border px-3 py-2 rounded"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full border px-3 py-2 rounded"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {isLogin ? "Entrar" : "Registrarse"}
            </button>
          </form>
        </div>
      </div>
    )
  );
}
