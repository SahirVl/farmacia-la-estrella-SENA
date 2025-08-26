import { useState } from "react";
import ProductForm from "../forms/ProductForm";

export default function EditProductModal({ product, onClose }) {
  const [formData, setFormData] = useState(product);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de actualización con axios
    alert("Producto actualizado (simulado)");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Editar Producto
        </h3>
        <ProductForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          on
          onCancel={onClose}
        />
      </div>
    </div>
  );
}
