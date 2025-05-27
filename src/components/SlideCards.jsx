import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const SlideCards = () => {
  const testimonios = [
    {
      nombre: 'María López',
      comentario: 'Gracias a WDSPERU tengo una tienda online hermosa y funcional. ¡Recomiendo 100%!',
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      nombre: 'Carlos Díaz',
      comentario: 'El diseño de logo superó mis expectativas. Profesionalismo total.',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      nombre: 'Lucía Ramírez',
      comentario: 'Mi página web quedó moderna, rápida y lista para captar clientes.',
      imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      nombre: 'Jorge Méndez',
      comentario: 'Automatizaron mis procesos con un sistema hecho a medida. Estoy feliz con los resultados.',
      imagen: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16 tracking-wide">
        Lo que dicen nuestros clientes
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto "
      >
        {testimonios.map(({ nombre, comentario, imagen }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl p-8  shadow-xl flex flex-col items-center text-center h-90
              transform transition-transform duration-500 ">
              <img
                src={imagen}
                alt={nombre}
                className="w-28 h-28 rounded-full mb-8 object-cover border-4 border-blue-400 shadow-md"
              />
              <p className="text-gray-800 italic mb-8 text-lg leading-relaxed font-serif">“{comentario}”</p>
              <h3 className="font-semibold text-2xl text-blue-900 tracking-wide">{nombre}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlideCards;
