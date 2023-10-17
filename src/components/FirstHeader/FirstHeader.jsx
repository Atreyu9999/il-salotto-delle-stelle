import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function FirstHeader() {
  const [ref, inView] = useInView();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Imposta l'opacità in base a inView
      transition={{ duration: 3 }}
      ref={ref} // Aggiungi il ref al div che vuoi osservare
    >
      <div className="h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto text-center text-black">
          <h1 className="text-5xl font-medium mb-6">
            Dona luce ai tuoi capelli
          </h1>
          <a
            href="https://www.beautynailhairsalons.com/IT/San-Lazzaro-di-Savena/185073514998607/IL-SALOTTO-DELLE-STELLE"
            className="text-xl mb-12"
          >
            TRUSS AQVA AMORIS CKS COLOR KEY SYSTEM PREVIA
          </a>
        </div>
      </div>
    </motion.div>
  );
}
