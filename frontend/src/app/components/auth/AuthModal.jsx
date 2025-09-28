import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [documentNumber, setDocumentNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isLogin && !acceptedPolicies) {
      setError("Debes aceptar las políticas de privacidad para continuar.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(isLogin ? "Sesión iniciada correctamente." : "Registro exitoso.");
    }, 1500);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-red-600 hover:bg-gray-100 transition"
          >
            <span className="text-xl font-bold">✕</span>
          </button>

          {/* Título */}
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </h2>

          {/* Botones de modo */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setError("");
                setSuccess("");
              }}
              className={`px-4 py-2 rounded-md text-sm transition ${
                isLogin ? "font-bold underline text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
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
              className={`px-4 py-2 rounded-md text-sm transition ${
                !isLogin ? "font-bold underline text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Registro
            </button>
          </div>

          {/* Formulario */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label className="text-sm font-medium text-gray-700">
                  Número de documento <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />

                <label className="text-sm font-medium text-gray-700">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </>
            )}

            <label className="text-sm font-medium text-gray-700">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            <label className="text-sm font-medium text-gray-700">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            {!isLogin && (
              <>
                <label className="text-sm font-medium text-gray-700">
                  Confirmar contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />

                <label className="text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />

                <label className="text-sm font-medium text-gray-700">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Checkbox de políticas */}
                <div className="flex items-start mt-2">
                  <input
                    type="checkbox"
                    checked={acceptedPolicies}
                    onChange={(e) => setAcceptedPolicies(e.target.checked)}
                    required
                    className="mt-1 mr-2 accent-blue-600"
                  />
                  <label className="text-sm text-gray-700">
                    Acepto las{" "}
                    <a href="/politicas" className="text-blue-600 underline">
                      políticas de tratamiento de datos
                    </a>{" "}
                    y de privacidad <span className="text-red-500">*</span>
                  </label>
                </div>
              </>
            )}

            {/* Mensajes */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-600 text-sm text-center">{success}</p>}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={loading || (!isLogin && !acceptedPolicies)}
              className={`w-full py-2 px-4 rounded-md text-white transition ${
                loading || (!isLogin && !acceptedPolicies)
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
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