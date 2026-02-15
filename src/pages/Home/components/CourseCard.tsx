import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    moCode: string | null;
    mgCode: string | null;
    duration: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string, type: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(type);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-background-secondary border border-border-primary rounded-lg p-5 hover:border-border-secondary transition-colors duration-200 text-left"
    >
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {course.title}
      </h3>
      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
        {course.moCode && (
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">MO Code: </span>
            <span className="font-medium text-text-primary">
              {course.moCode}
            </span>
            <motion.button
              onClick={() => handleCopy(course.moCode!, "mo")}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              title="Copy MO Code"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {copiedCode === "mo" ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Check className="w-4 h-4 text-status-success" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        )}
        {course.mgCode && (
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">MG Code: </span>
            <span className="font-medium text-text-primary">
              {course.mgCode}
            </span>
            <motion.button
              onClick={() => handleCopy(course.mgCode!, "mg")}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              title="Copy MG Code"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {copiedCode === "mg" ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Check className="w-4 h-4 text-status-success" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        )}
        <div>
          <span className="text-text-secondary">Duration: </span>
          <span className="font-medium text-text-primary">
            {course.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
