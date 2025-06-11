
export default function Portafolio() {
  return (
    <section id="portafolio" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Portafolio</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-12">
        Estos son algunos de los trabajos que hemos realizado para nuestros clientes.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src={`https://via.placeholder.com/600x400?text=Proyecto+${i}`}
              alt={`Proyecto ${i}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg text-blue-700"> Proyecto {i}</h3>
              <p className="text-sm text-gray-600">Diseño moderno y funcional adaptado a las necesidades del cliente.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}