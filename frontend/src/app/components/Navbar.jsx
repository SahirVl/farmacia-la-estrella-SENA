import { useState } from "react";
import AuthModal from "./AuthModal"; // Ajusta la ruta si está en otro directorio

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/farmaciaLogo.png" alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Hamburguesa */}
        <button
          className="lg:hidden text-gray-700 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menú de navegación */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 text-center lg:text-left">
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Inicio |</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Productos |</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Contacto |</a>
            <button
              onClick={() => setShowModal(true)}
              className="text-gray-800 hover:text-blue-600 font-medium focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Modal de autenticación */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}