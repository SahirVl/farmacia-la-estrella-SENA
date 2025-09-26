"use client";

import { useState } from "react";
import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // limpia el contexto
    localStorage.removeItem("usuario"); // limpieza ética
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* Logo + Bienvenida */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <img src="/farmaciaLogo.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          {user?.fullName?.trim() && (
            <span className="text-blue-800 font-semibold text-lg">
              Bienvenido, {user.fullName.trim().split(" ")[0] || "usuario"}
            </span>
          )}
        </div>

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
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">Inicio |</Link>
            <Link href="/productos" className="text-gray-800 hover:text-blue-600 font-medium">Productos |</Link>
            <Link href="/contacto" className="text-gray-800 hover:text-blue-600 font-medium">Contacto |</Link>

            {/* Autenticación */}
            {!user ? (
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-800 hover:text-blue-600 font-medium focus:outline-none"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-700 hover:text-red-900 font-medium focus:outline-none"
              >
                Salida segura
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de autenticación */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}