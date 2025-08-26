import Image from "next/image";

export default function AppPromo() {
  return (
    <section className=" bg-gray-100 py-16 px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Texto promocional */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Haz tu pedido ahora desde nuestra app
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          O llámanos al <span className="font-semibold text-blue-700">604 000 00 00</span>
        </p>
        <a
          href="/descargar-app"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Descargar nuestra app
        </a>
      </div>

      {/* Imagen del teléfono */}
      <div className="w-full max-w-sm">
        <Image
          src="/movilApp.png" 
          alt="App Farmacia La Estrella"
          width={400}
          height={800}
          // className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}