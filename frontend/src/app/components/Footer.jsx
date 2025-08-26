export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-2 text-gray-200 text-sm">
          © 2025 Farmacia La Estrella. Todos los derechos reservados.
        </p>
        <p className="text-gray-300 mb-4 text-sm">
          Síguenos en nuestras redes sociales:
        </p>
        <div className="flex justify-center gap-6 text-2xl text-gray-300">
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-400 transition duration-200"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-400 transition duration-200"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-sky-400 transition duration-200"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-red-500 transition duration-200"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}