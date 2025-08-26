import { useState } from "react";

const menu = {
  Productos: ["Crear Nuevo", "Actualizar", "Eliminar", "Buscar", "Listado"],
  Categorías: ["Crear", "Actualizar", "Eliminar"],
  Usuarios: ["Crear", "Actualizar", "Eliminar"],
};

export default function Sidebar({ onSelect, active }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    onSelect(section); // opcional: activa sección principal
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {Object.entries(menu).map(([section, actions]) => (
          <div key={section}>
            <button
              onClick={() => toggleSection(section)}
              className={`w-full flex items-center justify-between px-4 py-2 rounded font-medium text-xl transition ${
                openSection === section
                  ? "bg-blue-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{section}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  openSection === section ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {openSection === section && (
              <div className="mt-2 space-y-2 px-2">
                {actions.map((action) => (
                  <button
                    key={action}
                    onClick={() => onSelect(`${section} - ${action}`)}
                    className="w-full text-left border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
