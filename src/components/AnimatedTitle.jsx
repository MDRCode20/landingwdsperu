import { motion } from "framer-motion";

const title = "Impulsa tu marca con diseño profesional";

export default function AnimatedTitle() {
  return (
 <h2 className="text-5xl font-extrabold mb-6 flex flex-wrap justify-center">

      {title.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}
