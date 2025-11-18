"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 9,
    title: "Lina's deli",
    description: "Spring Boot, React.js, Supabase, AWS ec2, Stripe",
    image: "/images/projects/project9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/linas-deli",
    previewUrl: "https://linas-deli.ca/",
  },
  {
    id: 8,
    title: "My Portfolio",
    description: "Next.js, Tailwind, Vercel",
    image: "/images/projects/project8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/next-portfolio",
    previewUrl: "https://jsun-hobby.com",
  },
  {
    id: 7,
    title: "Tamwood Hotel website",
    description: "PHP, Mysql, React.js",
    image: "/images/projects/project7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rotfg17/Tamwood-hotel",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Roots clone website(Responsible)",
    description: "HTML, CSS",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/responsive-static-web",
    previewUrl: "https://ljsunny.github.io/responsive-static-web/",
  },
  {
    id: 5,
    title: "Insurance website(Responsible)",
    description: "HTML, CSS, Tailwind, Bootstrap",
    image: "/images/projects/project5.png",
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
    id: 3,
    title: "Chocobrat website",
    description: "HTML, CSS",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ljsunny/chocobrat-bakery-website",
    previewUrl: "https://ljsunny.github.io/chocobrat-bakery-website/",
  },
  {
    id: 2,
    title: "Crafting Visual Stories",
    description: "HTML, CSS",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adrianholz/chandan-design-agency-website",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Design Studio Website",
    description: "HTML, CSS",
    image: "/images/projects/project1.png",
    tag: ["All", "web"],
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
