import { useState } from "react";
import EditProductModal from "../modals/EditProductModal"; // Asegúrate de tener este componente
import SearchBar from "../forms/SearchBar";

export default function ListaProductos() {
  const formatCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);


  // Añadir productos a la BD para eliminar estos productos y se muestren los de la BD
  const productos = [
    {
      id: 1,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    {
      id: 2,
      nombre: "Paracetamol 500mg",
      descripcion: "Alivia fiebre y dolor leve",
      precio: 8000,
      stock: 50,
      imagen: "https://via.placeholder.com/8050.jpg",
      categoriaId: "Antipiréticos",
      proveedor: "Farmacéutica SaludPlus",
      estado: true,
    },
    {
      id: 3,
      nombre: "Acetaminofen 500mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 11500,
      stock: 0,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genfar",
      estado: false,
    },
    {  id: 4,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 5,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 6,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
     {
      id: 7,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    {
      id: 8,
      nombre: "Paracetamol 500mg",
      descripcion: "Alivia fiebre y dolor leve",
      precio: 8000,
      stock: 50,
      imagen: "https://via.placeholder.com/8050.jpg",
      categoriaId: "Antipiréticos",
      proveedor: "Farmacéutica SaludPlus",
      estado: true,
    },
    {
      id: 9,
      nombre: "Acetaminofen 500mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 11500,
      stock: 0,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genfar",
      estado: false,
    },
    {  id: 10,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 11,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 12,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
     {
      id: 13,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    {
      id: 14,
      nombre: "Paracetamol 500mg",
      descripcion: "Alivia fiebre y dolor leve",
      precio: 8000,
      stock: 50,
      imagen: "https://via.placeholder.com/8050.jpg",
      categoriaId: "Antipiréticos",
      proveedor: "Farmacéutica SaludPlus",
      estado: true,
    },
    {
      id: 15,
      nombre: "Acetaminofen 500mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 11500,
      stock: 0,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genfar",
      estado: false,
    },
    {  id: 16,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 17,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 18,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
     {
      id: 19,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    {
      id: 20,
      nombre: "Paracetamol 500mg",
      descripcion: "Alivia fiebre y dolor leve",
      precio: 8000,
      stock: 50,
      imagen: "https://via.placeholder.com/8050.jpg",
      categoriaId: "Antipiréticos",
      proveedor: "Farmacéutica SaludPlus",
      estado: true,
    },
    {
      id: 21,
      nombre: "Acetaminofen 500mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 11500,
      stock: 0,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genfar",
      estado: false,
    },
    {  id: 22,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 23,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
    { id: 24,
      nombre: "Ibuprofeno 400mg",
      descripcion: "Analgésico y antiinflamatorio",
      precio: 12500,
      stock: 30,
      imagen: "https://via.placeholder.com/80",
      categoriaId: "Analgésicos",
      proveedor: "Laboratorios Genéricos",
      estado: true,
    },
  ];

const [searchTerm, setSearchTerm] = useState('');
const [resultados, setResultados] = useState(productos)

const handleSearch = () => {
  const resultados = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setResultados(resultados); // o actualiza el estado que uses
};

  const abrirModalEdicion = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
    setShowModal(false);
  };

  



  return (
    <>
    <SearchBar
  filterText={searchTerm}
  onFilterTextChange={setSearchTerm}
  onSearch={handleSearch}
/>
    <div className="overflow-y-auto max-h-[400px] rounded shadow ">


      <table className="text-xs bg-white w-full border border-gray-300">
        <thead className="sticky top-0 z-20 bg-blue-900 text-white shadow-md">
          <tr>
            <th className="p-2 border border-gray-300">ImagenUrl</th>
            <th className="p-2 border border-gray-300">Nombre</th>
            <th className="p-2 border border-gray-300">Descripción</th>
            <th className="p-2 border border-gray-300">Precio</th>
            <th className="p-2 border border-gray-300">Stock</th>
            <th className="p-2 border border-gray-300">Proveedor</th>
            <th className="p-2 border border-gray-300">Categoría</th>
            <th className="p-2 border border-gray-300">Estado</th>
            <th className="p-2 border border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((prod) => (
            <tr
              key={prod.id}
              className="border border-gray-300 hover:bg-gray-200"
            >
              <td className="p-2 border border-gray-300">{prod.imagen}</td>
              <td className="p-2 border border-gray-300">{prod.nombre}</td>
              <td className="p-2 border border-gray-300">{prod.descripcion}</td>
              <td className="p-2 border border-gray-300">
                {formatCOP.format(prod.precio)}
              </td>
              <td className="p-2 border border-gray-300">{prod.stock}</td>
              <td className="p-2 border border-gray-300">{prod.proveedor}</td>
              <td className="p-2 border border-gray-300">{prod.categoriaId}</td>
              <td className="p-2 border border-gray-300">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    prod.estado
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {prod.estado ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="p-2 border border-gray-300 space-x-2">
                <button
                  onClick={() => abrirModalEdicion(prod)}
                  className="bg-gray-300 text-blue-600 border border-transparent px-2 py-1 rounded text-sm hover:border-blue-600 hover:text-blue-700 transition"
                >
                  ✏️
                </button>
                <button className="bg-blue-400 text-white px-2 py-1 rounded text-sm hover:bg-red-500">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <EditProductModal
          product={productoSeleccionado}
          onClose={cerrarModal}
        />
      )}
    </div>
    </>
  );
}
