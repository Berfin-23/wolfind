import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full bg-background py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-text-secondary text-sm font-medium tracking-wider uppercase mb-4">
            ABOUT THE PROJECT
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Simplifying MOOC Discovery
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Born from a real-world challenge at Karunya Institute of Technology
            and Sciences, Wolfind transforms how students and faculty discover
            and register for NPTEL courses.
          </p>
        </motion.div>

        {/* Origin Story */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="border-l-4 border-border-primary pl-6 py-2">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              The Beginning
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              It started with a conversation in Dr. Joms Antony's cabin at the
              Division of AIML. Faculty members were spending countless hours
              navigating through complex Excel sheets, manually searching for
              NPTEL course codes to assist students with registration. Each
              lookup was time-consuming, and the risk of errors in the
              university portal registration was ever-present.
            </p>
            <p className="text-text-secondary leading-relaxed">
              What began as a departmental pain point evolved into an
              opportunity to create something meaningful—a solution that could
              benefit the entire academic community.
            </p>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">
            The Challenge
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
              <div className="text-text-primary text-3xl font-bold mb-3">
                01
              </div>
              <h4 className="text-lg font-medium text-text-primary mb-2">
                Manual Inefficiency
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Faculty spent valuable time searching through Excel sheets for
                course codes instead of focusing on teaching and mentorship.
              </p>
            </div>
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
              <div className="text-text-primary text-3xl font-bold mb-3">
                02
              </div>
              <h4 className="text-lg font-medium text-text-primary mb-2">
                Registration Errors
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Manual lookups increased the likelihood of incorrect course
                codes being entered in the university portal.
              </p>
            </div>
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
              <div className="text-text-primary text-3xl font-bold mb-3">
                03
              </div>
              <h4 className="text-lg font-medium text-text-primary mb-2">
                Post-Exam Registration Hassle
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                After completing NPTEL exams, students and faculty struggled to
                find the correct course codes needed for university portal
                registration.
              </p>
            </div>
            <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
              <div className="text-text-primary text-3xl font-bold mb-3">
                04
              </div>
              <h4 className="text-lg font-medium text-text-primary mb-2">
                Scalability Issues
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                As course offerings grew, the Excel-based system became
                increasingly difficult to maintain and navigate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">
            The Solution
          </h3>
          <div className="bg-linear-to-br from-background-secondary to-background-tertiary border border-border-primary rounded-xl p-8">
            <p className="text-text-secondary leading-relaxed mb-6">
              Wolfind is a modern, intelligent course search platform designed
              to make NPTEL course discovery effortless. Built with a focus on
              speed, accuracy, and user experience, it eliminates the friction
              in the course registration process.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-text-primary font-semibold mb-2">
                  Instant Search
                </div>
                <p className="text-text-secondary text-sm">
                  Real-time filtering as you type, delivering results in
                  milliseconds
                </p>
              </div>
              <div>
                <div className="text-text-primary font-semibold mb-2">
                  Accurate Data
                </div>
                <p className="text-text-secondary text-sm">
                  Course information sourced directly from the Center of
                  Examination
                </p>
              </div>
              <div>
                <div className="text-text-primary font-semibold mb-2">
                  Admin Control
                </div>
                <p className="text-text-secondary text-sm">
                  Secure dashboard for course management and CSV uploads
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">
            Built With Modern Technology
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "Framer Motion",
              "Supabase",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-background-secondary border border-border-primary rounded-full text-text-secondary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div variants={itemVariants}>
          <div className="border-t border-border-primary pt-12">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Making an Impact
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              What started as a solution for the AIML division at Karunya
              Institute has evolved into a platform serving the entire academic
              community. Wolfind saves hours of administrative work each
              semester, reduces registration errors, and empowers students to
              take control of their learning journey through NPTEL courses.
            </p>
            <div className="flex items-center gap-4 text-text-secondary">
              <div>
                <div className="text-3xl font-bold text-text-primary">100%</div>
                <div className="text-sm">Accurate Data</div>
              </div>
              <div className="h-12 w-px bg-border-primary"></div>
              <div>
                <div className="text-3xl font-bold text-text-primary">
                  &lt;100ms
                </div>
                <div className="text-sm">Search Speed</div>
              </div>
              <div className="h-12 w-px bg-border-primary"></div>
              <div>
                <div className="text-3xl font-bold text-text-primary">24/7</div>
                <div className="text-sm">Availability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
