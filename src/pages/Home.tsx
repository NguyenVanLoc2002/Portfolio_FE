import { motion, AnimatePresence } from "framer-motion";

export default function Home({open}: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          whileHover={{ scale: 1.02 }}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
          className="card"
        >
          Hello Motion
        </motion.div>
      )}
    </AnimatePresence>

  );
}
