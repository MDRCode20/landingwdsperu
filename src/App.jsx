import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaLaptopCode, FaShoppingCart, FaPenNib, FaCogs, FaBars, FaTimes,FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn  } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SlideCards from './components/SlideCards';




const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}



export default function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">
 
      <header className="bg-white shadow-md py-4 fixed w-full z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">WDSPERU</h1>
          <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
               <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#portafolio" className="hover:text-blue-600">Portafolio</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </nav>

          
          {/* Mobile icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-blue-700">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-3 text-center shadow">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="block text-blue-600">Inicio</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)} className="block text-blue-600">Nosotros</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)} className="block text-blue-600">Servicios</a>
            <a href="#portafolio" onClick={() => setMenuOpen(false)} className="block text-blue-600">Portafolio</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="block text-blue-600">Contacto</a>
          </div>
        )}
        
      </header>


      <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-28 pb-20 text-center">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <h2 className="text-5xl font-extrabold mb-6">Impulsa tu marca con diseño profesional</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Creamos logos, páginas web, sistemas y tiendas virtuales adaptadas a tus necesidades.
          </p>
          <a href="#contacto" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-gray-200 transition">
            Contáctanos
          </a>
        </motion.div>
        
      </section>


      <section id="servicios" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            Nuestros Servicios
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaPenNib />, title: 'Diseño de Logos', desc: 'Identidades visuales únicas que representan tu marca.' },
              { icon: <FaLaptopCode />, title: 'Páginas Web', desc: 'Sitios modernos, rápidos y responsivos.' },
              { icon: <FaCogs />, title: 'Sistemas a Medida', desc: 'Soluciones que automatizan tu negocio.' },
              { icon: <FaShoppingCart />, title: 'Tiendas Online', desc: 'Lanza tu e-commerce y vende sin límites.' }
            ].map((s, i) => (
              <motion.div key={i}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition"
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4 + i * 0.2 }}
                variants={fadeUp}
              >
                <div className="text-4xl text-blue-600 mb-4">{s.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="portafolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            Algunos de Nuestros Trabajos
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div key={n}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 + n * 0.1 }}
                variants={fadeUp}
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                  Proyecto {n}
                </div>
                <div className="p-4 text-center text-sm">Sitio Web | Logo | E-commerce</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="nosotros" className="py-20 bg-gray-100">
        <motion.div 
          className="container mx-auto px-6 text-center max-w-3xl"
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Sobre Nosotros</h3>
          <p className="text-gray-700 text-lg">
            En WDSPERU somos un equipo apasionado por el diseño y el desarrollo digital. Nuestro objetivo es ayudar a emprendedores y empresas a destacar en línea mediante soluciones creativas, funcionales y modernas.
          </p>
        </motion.div>
      </section>
      
<SlideCards />

   
     <footer id="contacto" className="bg-blue-900 text-white py-16">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    
   
   <div>
      <h4 className="text-xl font-bold mb-4">WDSPERU</h4>
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
        <li><a href="#nosotros" className="hover:text-blue-300">Nosotros</a></li>
        <li><a href="#servicios" className="hover:text-blue-300">Servicios</a></li>
        <li><a href="#portafolio" className="hover:text-blue-300">Portafolio</a></li>
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

    </div>
  )
}