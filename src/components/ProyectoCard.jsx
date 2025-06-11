import { motion } from "framer-motion";


export default function ProyectoCard({ imagen, titulo, descripcion, delay }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 + delay }}
      variants={fadeUp}
    >
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center text-sm text-blue-900 font-semibold">
        {titulo}
        <div className="text-gray-600 text-xs mt-1">{descripcion}</div>
      </div>
    </motion.div>
  );
}
