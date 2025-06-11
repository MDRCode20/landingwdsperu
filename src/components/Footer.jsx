import { FaLaptopCode, FaShoppingCart, FaPenNib, FaCogs, FaBars, FaTimes,FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn  } from 'react-icons/fa'
import { motion } from 'framer-motion';

export default function Footer() {
  return (
     <footer id="contacto" className="bg-blue-900 text-white py-16">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
   
   <div>
      <h4 className="animate__animated animate__bounce">WDSPERU</h4>
      <p className="mb-2">Email: contacto@wdsperu.com</p>
      <p className="mb-2">WhatsApp: +51 999 999 999</p>

      {/* Redes sociales */}
      <div className="flex justify-center md:justify-start gap-4 mt-4 text-white text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
        <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedinIn /></a>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
      <ul className="space-y-2">
        <li><a href="#inicio" className="hover:text-blue-300">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-blue-300">Servicios</a></li>
        <li><a href="#portafolio" className="hover:text-blue-300">Portafolio</a></li>
        <li><a href="#nosotros" className="hover:text-blue-300">Nosotros</a></li>
      </ul>
    </div>


    <div>
      <h4 className="text-xl font-bold mb-4">Escríbenos</h4>
      <form className="space-y-3">
        <input type="text" placeholder="Tu nombre" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none" />
        <input type="email" placeholder="Tu email" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none" />
        <textarea placeholder="Mensaje" rows="3" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"></textarea>
        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 rounded transition">
          Enviar
        </button>
      </form>
    </div>

  </div>

 
  <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm space-y-2">
    <p className="mb-2">
      <a href="/politica-de-privacidad" className="hover:text-blue-300 underline">Política de Privacidad</a> | 
      <a href="/libro-de-reclamaciones" className="hover:text-blue-300 underline ml-2">Libro de Reclamaciones</a>
    </p>
    <p>&copy; {new Date().getFullYear()} WDSPERU. Todos los derechos reservados.</p>
  </div>
</footer>

  );
}