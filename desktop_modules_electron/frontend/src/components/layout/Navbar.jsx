export default function Navbar() {
  return (
    <header className="bg-blue-900 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-white">Bienvenido, Sahir</h1>
      <button className="bg-white text-black px-4 py-2 rounded hover:bg-red-600 hover:text-white">
        Cerrar sesión
      </button>
    </header>
  );
}
