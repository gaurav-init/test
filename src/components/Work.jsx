import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Real-Time Face Detection System",
      category: "Computer Vision & Deep Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      href: "#",
      summary: {
        goal: "Develop a real-time face detection system using deep learning with high accuracy and training efficiency.",
        problem: "Traditional face detection methods lack accuracy in varying lighting conditions and real-time performance.",
        solution: "Built a CNN-based system with VGG16 transfer learning, optimized using TensorFlow/Keras with backpropagation and Adam optimizer.",
        features: [
          "VGG16 transfer learning for improved accuracy",
          "Real-time webcam face detection with OpenCV",
          "Data preprocessing, normalization & augmentation",
          "Accuracy & loss visualization with Matplotlib",
        ],
        techStack: ["TensorFlow", "CNN", "VGG16", "OpenCV", "Matplotlib", "Python"],
        role: "AI/ML Developer",
        duration: "3 Weeks",
        outcome: "Achieved robust real-time face detection with high accuracy through transfer learning and optimized training pipeline.",
      },
    },
    {
      id: 2,
      title: "UI/UX Design - Zanzee Company",
      category: "UI/UX Design Internship",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      href: "#",
      summary: {
        goal: "Design and deploy responsive UI/UX interfaces for the company website with improved user engagement.",
        problem: "The existing website had poor navigation flow and low user engagement due to non-intuitive design.",
        solution: "Redesigned interfaces focusing on user behavior analysis, accessibility, and data-driven design decisions.",
        features: [
          "Responsive UI/UX interfaces",
          "User behavior analysis & optimization",
          "Improved navigation efficiency",
          "Cross-functional agile collaboration",
        ],
        techStack: ["Figma", "HTML", "CSS", "JavaScript"],
        role: "UI/UX Designer Intern",
        duration: "Oct - Dec 2024",
        outcome: "Enhanced website usability, accessibility, and overall user engagement through data-driven design improvements.",
      },
    },
  ];

  return (
    <section id="projects" className="relative bg-[#07080b] py-32 px-6 md:px-20 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-[#C778DD]/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-[#C778DD]">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Real-world applications built with deep learning, computer vision, and modern design.
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative rounded-3xl overflow-hidden border border-white/10 group ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <p className="text-[#C778DD] text-sm font-semibold uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {project.title}
                  </h3>
                </motion.div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
                >
                  <ExternalLink className="text-white" size={18} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white space-y-6"
              >
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">Goal:</span>{" "}
                    {project.summary.goal}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Problem:</span>{" "}
                    {project.summary.problem}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Solution:</span>{" "}
                    {project.summary.solution}
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-3">Key Features</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    {project.summary.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C778DD] flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {project.summary.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(199,120,221,0.2)" }}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="pt-2 text-sm text-gray-400 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C778DD]" />
                    {project.summary.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {project.summary.duration}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
