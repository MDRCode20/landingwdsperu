import { useState } from "react";
import "./App.css";
import { FaLaptopCode, FaShoppingCart, FaPenNib, FaCogs, FaBars, FaTimes,FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Portafolio from './components/Portafolio';
import Nosotros from './components/Nosotros';
import SlideCards from './components/SlideCards';
import Footer from './components/Footer';



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">
 
    <Header/>
    <Hero/>


      <section id="servicios" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-blue-700"
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
                <div className="text-4xl text-blue-700 mb-4">{s.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


     <Portafolio/>
<Nosotros/>      
<SlideCards />
<Footer />
    </div>
  )
}