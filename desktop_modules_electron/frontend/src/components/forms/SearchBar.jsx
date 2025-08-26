export default function SearchBar({
  filterText,
  onFilterTextChange,
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga
    onSearch(); // Dispara la búsqueda
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={filterText}
        placeholder="Buscar producto..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 w-full max-w-[200px]"
      />
      <button
        type="submit"
        className="px-2 py-1 h-[28px] bg-blue-700 text-white rounded text-xs hover:bg-blue-900 transition"
      >
        🔍
      </button>
    </form>
  );
}
