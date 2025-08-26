const productos = [
  { name: 'Ibuprofeno 400mg', image: 'https://www.unimarksa.com/sites/default/files/imgproductos/ibuprofeno-400-mg.png' },
  { name: 'Vitamina C 1000mg', image: 'https://vecosnucoceutical.com/wp-content/uploads/2024/10/VITAMINA-C-BIOFLAVONOIDES-CAP-DETALLE.png' },
  { name: 'Paracetamol 500mg', image: 'https://paracetamol.bayer.com.ar/sites/g/files/vrxlpx49506/files/2022-10/PACK%20PARACETAMOL%20BAYER.png' },
  { name: 'Suero Oral', image: 'https://lh6.googleusercontent.com/proxy/srJ2cfa6jiJHxV73qolrXZnHvs4OrtB_mPptgXtJfc40rqgME7sxdVaDUn4n60ZwBnklEDLRij6-XKxMSQ_Pk4UFzkKOgEd6Al58rBTLW8ZCAF2nj08EIk7Ddn0b2_5T' },
  { name: 'Crema Antiséptica', image: 'https://cdn.b2brazil.com/sites/default/files/styles/large/public/b2brazil/product/image/alcool_gel_green.png.webp' }
];

export default function ProductCarousel({ search }) {
  const filtered = productos.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Productos destacados</h2>
        <div className="overflow-hidden">
          <div
            className="flex animate-scroll gap-8"
            style={{ width: 'max-content' }}
          >
            {filtered.map((producto, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded shadow-md p-4 text-center hover:scale-105 transition-transform"
              >
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="h-32 mx-auto mb-4 object-contain"
                />
                <h5 className="text-lg font-medium text-gray-700">{producto.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}