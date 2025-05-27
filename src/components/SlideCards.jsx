import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SlideCards = () => {
  const servicios = [
    { title: 'Diseño de Logos', desc: 'Creamos identidades visuales únicas.' },
    { title: 'Páginas Web', desc: 'Sitios rápidos, responsivos y modernos.' },
    { title: 'Sistemas a Medida', desc: 'Automatiza tu negocio con soluciones eficientes.' },
    { title: 'Tiendas Online', desc: 'Vende tus productos de forma profesional.' }
  ];

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Nuestros Servicios</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {servicios.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="bg-blue-800 text-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm">{s.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlideCards;
