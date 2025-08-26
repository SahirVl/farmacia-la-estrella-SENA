export default function SearchBar({ search, onSearch }) {
  return (
    <div className="my-8 text-center">
      <input
        type="text"
        className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}