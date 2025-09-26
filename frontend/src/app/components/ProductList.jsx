import React from "react";

const productosFicticios = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 1200,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 2,
    name: "Ibuprofeno 400mg",
    price: 1800,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  { id: 3, name: "Vitamina C 1000mg", price: 2500, imageUrl: "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg" },
  {
    id: 4,
    name: "Alcohol Antiséptico 70%",
    price: 3200,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 5,
    name: "Gel antibacterial 250ml",
    price: 2900,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 6,
    name: "Aspirina 100mg",
    price: 1500,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  { id: 7, name: "Omeprazol 20mg", price: 2100, imageUrl: "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg" },
  {
    id: 8,
    name: "Jarabe para la tos",
    price: 3800,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 9,
    name: "Crema antibiótica",
    price: 4500,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 10,
    name: "Pastillas para alergia",
    price: 2300,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 11,
    name: "Suero oral sabor naranja",
    price: 3100,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
  {
    id: 12,
    name: "Termómetro digital",
    price: 9800,
    imageUrl:
      "https://img.freepik.com/vector-gratis/composicion-medicamentos-cuidado-salud-imagenes-pildoras-ampollas-frascos-capsulas-gotas-jarabes-ilustracion-vectorial_1284-71689.jpg",
  },
];

export default function ProductosPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Productos disponibles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFicticios.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            {producto.imageUrl && (
              <img
                src={producto.imageUrl}
                alt={producto.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
            )}
            <h2 className="text-lg font-semibold">{producto.name}</h2>
            <p className="text-blue-600 font-bold">${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
