"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Tamwood Hotel website",
    description: "PHP, Mysql, React.js",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rotfg17/Tamwood-hotel",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Roots clone website(Responsible)",
    description: "HTML, CSS",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/responsive-static-web",
    previewUrl: "https://ljsunny.github.io/responsive-static-web/",
  },
  {
    id: 3,
    title: "Insurance website(Responsible)",
    description: "HTML, CSS, Tailwind, Bootstrap",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/tailwind--website",
    previewUrl: "https://ljsunny.github.io/tailwind--website/",
  },
  {
    id: 4,
    title: "Yoga web site",
    description: "HTML, CSS",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/responsive-yoga-website",
    previewUrl: "https://ljsunny.github.io/responsive-yoga-website/",
  },
  {
    id: 5,
    title: "Chocobrat website",
    description: "HTML, CSS",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/chocobrat-bakery-website",
    previewUrl: "https://ljsunny.github.io/chocobrat-bakery-website/",
  },
  {
    id: 6,
    title: "Crafting Visual Stories",
    description: "HTML, CSS",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adrianholz/chandan-design-agency-website",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Design Studio Website",
    description: "HTML, CSS",
    image: "/images/projects/project7.png",
    tag: ["All", "mobile"],
    gitUrl: "https://github.com/ljsunny/final-static-website",
    previewUrl: "https://ljsunny.github.io/final-static-website/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const FilteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 md:gap-12 gap-8">
        {FilteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
