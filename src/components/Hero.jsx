
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-48 pb-40 text-center">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <AnimatedTitle />
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Creamos logos, páginas web, sistemas y tiendas virtuales adaptadas a tus necesidades.
        </p>
        <a href="#contacto" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-gray-200 transition">
          Contáctanos
        </a>
      </motion.div>
    </section>

  );
}
