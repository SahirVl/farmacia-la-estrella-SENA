export default function Header() {
  return (
    <header className="bg-blue-950 text-white text-center py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold">Bienvenido a Farmacia La Estrella</h1>
        <p className="mt-4 text-lg">Tu bienestar es nuestra prioridad</p>
        <a
          href="#"
          className="inline-block mt-6 bg-white text-blue-950 font-semibold py-2 px-5 rounded hover:bg-blue-100 transition duration-300"
        >
          Explorar productos
        </a>
      </div>
    </header>
  );
}