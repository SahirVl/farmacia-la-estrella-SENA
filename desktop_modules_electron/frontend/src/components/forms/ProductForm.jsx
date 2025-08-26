// src/components/forms/ProductForm.jsx
export default function ProductForm({
  formData,
  errors,
  onChange,
  onSubmit,
  onCancel,
}) {
  const mode = formData?.id ? "edit" : "create";
  const btnLabel = mode === "edit" ? "Actualizar" : "Crear Producto";

  return (
    <form onSubmit={onSubmit} className="p-6 space-y-4 text-sm">
      {/* Fila 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={onChange}
          error={errors.name}
        />
        <InputField
          label="Proveedor"
          name="supplier"
          value={formData.supplier}
          onChange={onChange}
          error={errors.supplier}
        />
        <InputField
          label="ID Categoría"
          name="categoryId"
          type="number"
          value={formData.categoryId}
          onChange={onChange}
          error={errors.categoryId}
        />
      </div>

      {/* Fila 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Precio"
          name="price"
          type="number"
          value={formData.price}
          onChange={onChange}
          error={errors.price}
        />
        <InputField
          label="Stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={onChange}
          error={errors.stock}
        />
        <InputField
          label="URL Imagen"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={onChange}
          error={errors.imageUrl}
        />
      </div>

      {/* Fila 3 */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={2}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm resize-none"
        />
        {errors.description && (
          <p className="text-red-500 mt-1">{errors.description}</p>
        )}
      </div>

      {/* Botón */}
      <div className="flex justify-end gap-3">
        <button
          type="submit"
          className="px-5 py-2 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-700 transition text-sm"
        >
          {btnLabel}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition text-sm"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

// Puedes crear este componente auxiliar para los inputs
function InputField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-1.5 h-10 focus:ring-1 focus:ring-blue-500 focus:outline-none"
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
}
