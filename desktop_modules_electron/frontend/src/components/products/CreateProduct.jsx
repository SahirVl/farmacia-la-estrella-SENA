import { useState } from "react";
import ProductForm from "../forms/ProductForm";
import axios from "../../api/axios";

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    categoryId: "",
    supplier: "",
  });

  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (
      !formData.price ||
      isNaN(formData.price) ||
      parseInt(formData.price) < 0
    )
      newErrors.price = "El precio debe ser un número positivo";
    if (
      !formData.stock ||
      isNaN(formData.stock) ||
      parseInt(formData.stock) < 0
    )
      newErrors.stock = "El stock debe ser un número positivo";
    if (formData.imageUrl && !/^https?:\/\/.+\..+/.test(formData.imageUrl))
      newErrors.imageUrl = "La URL de imagen no es válida";
    if (!formData.categoryId || isNaN(formData.categoryId))
      newErrors.categoryId = "La categoría debe ser un número válido";
    if (!formData.supplier.trim())
      newErrors.supplier = "El proveedor es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowPreview(true);
  };

  const confirmSubmit = async () => {
    try {
      const payload = {
        ...formData,
        price: parseInt(formData.price),
        stock: parseInt(formData.stock),
        categoryId: parseInt(formData.categoryId),
      };

      await axios.post("/add-product", payload);
      alert("Producto creado con éxito");
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        imageUrl: "",
        categoryId: "",
        supplier: "",
      });
      setErrors({});
      setShowPreview(false);
    } catch (err) {
      console.error(err);
      alert(
        "Error al crear producto. Verifica los datos o si el nombre ya existe."
      );
    }
  };
  return (
    <>
      {/* Modal de confirmación */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Confirmar creación del producto?
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Nombre:</strong> {formData.name}
              </li>
              <li>
                <strong>Descripción:</strong> {formData.description}
              </li>
              <li>
                <strong>Precio:</strong> ${formData.price}
              </li>
              <li>
                <strong>Stock:</strong> {formData.stock}
              </li>
              <li>
                <strong>Proveedor:</strong> {formData.supplier}
              </li>
              <li>
                <strong>Categoría ID:</strong> {formData.categoryId}
              </li>
              <li>
                <strong>Imagen:</strong> {formData.imageUrl}
              </li>
            </ul>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
              >
                Confirmar y guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario principal */}
      
      <div className="max-w-5xl mx-auto bg-white shadow-xl">
        <div className="bg-blue-900 text-white px-6 py-4">
          <h2 className="text-2xl font-bold">Crear Producto</h2>
          <p className="text-sm text-blue-100">
            Completa los campos para registrar un nuevo producto
          </p>
        </div>

        <ProductForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
