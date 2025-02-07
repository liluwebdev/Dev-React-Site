import { motion } from "framer-motion";

const getImage = (imagePath) => {
  return new URL(`../assets/${imagePath}`, import.meta.url).href;
};

// Project Data
const projects = [
  {
    title: "Dev Portfolio",
    description: "This portfolio that I built with React, Tailwind, Motion.",
    image: "dev-site-mockup.png", 
    link: "https://github.com/liluwebdev/Dev-React-Site",
  },
  {
    title: "Art, Design, & Education Portfolio",
    description: "Another portfolio I created to place my creative works including curriculum I've built.",
    image: "lindsey-portfolio-mockup.png",
    link: "https://github.com/liluwebdev/lilu-portfolio",
  },
  {
    title: "Digital Dreamers",
    description: "A website I built in Wordpress using the Astra theme and utilizing the new Wordpress editor.",
    image: "digital-dreamers-portfolio.png",
    link: "https://www.digitaldreamers.me",
  },
  {
    title: "Github Repositories",
    description: "Projects I've created to showcase my knowledge in React, JS, Wordpress, PHP.",
    image: "/project4.jpg",
    link: "https://github.com/liluwebdev/",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold uppercase mb-10 text-center">Projects</h2>

      {/* Responsive Grid for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <figure>
              <img src={getImage(project.image)} alt={project.title} className="w-full h-[250px] object-cover object-top" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
