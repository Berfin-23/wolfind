import { motion } from "framer-motion";

const Register = () => {
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
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-text-secondary text-sm font-medium tracking-wider uppercase mb-4">
            REGISTRATION GUIDE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            How to Register Your Course
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Once you've completed your NPTEL exam, follow these steps to
            register your course in the Eduserve university portal.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-background-secondary border border-border-primary rounded-xl overflow-hidden">
            <video className="w-full aspect-video" controls preload="metadata">
              <source src="/eduserve.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-text-secondary text-sm text-center mt-4">
            Watch the step-by-step guide for registering courses in Eduserve
          </p>
        </motion.div>

        {/* Quick Steps */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
            Quick Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-background-secondary border border-border-primary rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-text-primary mb-2">
                  1
                </div>
                <h4 className="text-lg font-medium text-text-primary">
                  Find Course Code
                </h4>
              </div>
              <p className="text-text-secondary text-sm">
                Use Wolfind to search and copy the exact course code
              </p>
            </div>
            <div className="text-center">
              <div className="bg-background-secondary border border-border-primary rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-text-primary mb-2">
                  2
                </div>
                <h4 className="text-lg font-medium text-text-primary">
                  Login to Eduserve
                </h4>
              </div>
              <p className="text-text-secondary text-sm">
                Access the university portal with your credentials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-background-secondary border border-border-primary rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-text-primary mb-2">
                  3
                </div>
                <h4 className="text-lg font-medium text-text-primary">
                  Enter Course Details
                </h4>
              </div>
              <p className="text-text-secondary text-sm">
                Follow the video guide to input the course information
              </p>
            </div>
            <div className="text-center">
              <div className="bg-background-secondary border border-border-primary rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-text-primary mb-2">
                  4
                </div>
                <h4 className="text-lg font-medium text-text-primary">
                  Submit Registration
                </h4>
              </div>
              <p className="text-text-secondary text-sm">
                Complete the registration process and receive confirmation
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
