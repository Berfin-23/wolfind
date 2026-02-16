import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I search for a course?",
    answer:
      "Simply use the search bar at the top of the page to enter keywords like course name, code, or subject area. The results will filter in real-time as you type, making it easy to find the exact NPTEL course you're looking for. You can search by course title, course code, or any relevant keywords related to the course content.",
  },
  {
    question: "Is this only for AIML division students?",
    answer:
      "No, Wolfind is available for everyone! While it was created to help the AIML division at Karunya Institute of Technology and Sciences, any student or faculty member can use this platform to search for and discover NPTEL course codes for registration purposes.",
  },
  {
    question: "How is the course data updated?",
    answer:
      "The course data is provided directly from the university's Center of Examination. This ensures that all course information, codes, and details are accurate and officially recognized for registration in the university portal. The data is maintained to reflect the current semester's available courses.",
  },
  {
    question: "Can I suggest courses to be added?",
    answer:
      "The platform only contains courses that have been officially suggested and approved by the university. Course additions are managed through the Center of Examination to maintain consistency with university requirements and ensure proper registration processes.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side - Title */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <p className="text-text-secondary text-sm font-medium tracking-wider uppercase mb-4">
              FAQS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Wolfind FAQs
            </h2>
          </div>
        </div>

        {/* Right Side - FAQ Items */}
        <div className="lg:col-span-7 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-background-secondary border border-border-primary rounded-lg overflow-hidden transition-all duration-200 hover:border-border-secondary"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-text-primary group-hover:text-text-primary-hover transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-text-secondary transition-transform duration-200 shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
