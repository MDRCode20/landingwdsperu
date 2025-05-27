import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaLaptopCode, FaShoppingCart, FaPenNib, FaCogs } from 'react-icons/fa'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}



export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">
 
      <header className="bg-white shadow-md py-4 fixed w-full z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">WDSPERU</h1>
          <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#portafolio" className="hover:text-blue-600">Portafolio</a>
            <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </nav>
        </div>

        
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

   
      <footer id="contacto" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold mb-4">Contáctanos</h4>
          <p className="mb-2">Email: contacto@wdsperu.com</p>
          <p className="mb-4">WhatsApp: +51 999 999 999</p>
          <p className="text-sm">&copy; 2025 WDSPERU. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}