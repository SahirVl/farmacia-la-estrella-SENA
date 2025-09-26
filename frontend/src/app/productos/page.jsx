import ProductList from "../components/ProductList"

export default function ProductosPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Productos disponibles</h1>
      <ProductList />
    </div>
  );
}