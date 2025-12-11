import { Student } from "./students-data";
import { motion } from "framer-motion";

export function StudentCard({ student }: { student: Student }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl shadow-md border p-4 bg-white hover:shadow-lg transition"
    >
      <img
        src={student.photo}
        alt={student.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h3 className="font-serif text-lg font-bold text-primary">
        {student.name}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Village : <span className="font-medium">{student.village}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Année : <span className="font-medium">{student.year}</span>
      </p>
    </motion.div>
  );
}
