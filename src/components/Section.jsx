import { motion } from "framer-motion";

function Section({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        padding: "100px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {children}
    </motion.section>
  );
}

export default Section;