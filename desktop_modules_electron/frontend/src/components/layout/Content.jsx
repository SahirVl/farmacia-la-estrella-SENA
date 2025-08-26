import CreateProduct from "../products/CreateProduct";
import ListaProductos from "../products/ListaProductos";

export default function Content({ section }) {
  const renderContent = () => {
    switch (section) {
      case "Productos - Crear Nuevo":
        return <CreateProduct />;
      case "Productos - Listado":
        return <ListaProductos />;
      default:
        return (
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">
              Selecciona una opción del menú para comenzar.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="flex-1 p-6 px-0 mx-2">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {section || "Panel principal"}
      </h2>
      {renderContent()}
    </main>
  );
}
