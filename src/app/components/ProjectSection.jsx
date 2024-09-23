'use client'
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectData = [
  {
    id: 1,
    title: "Tamwood Hotel website",
    description: "PHP, Mysql, React.js",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "Roots clone website(Responsible)",
    description: "HTML, CSS",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Insurance website(Responsible)",
    description: "HTML, CSS, Tailwind, Bootstrap",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 4,
    title: "Yoga web site",
    description: "HTML, CSS",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 5,
    title: "Chocobrat website",
    description: "HTML, CSS",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 6,
    title: "Crafting Visual Stories",
    description: "HTML, CSS",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 7,
    title: "Design Studio Website",
    description: "HTML, CSS",
    image: "/images/projects/project7.png",
    tag: ["All", "mobile"],
    gitUrl:"/",
    previewUrl:"/"
  },
];
const ProjectSection = () => {
  const [tag, setTag] =useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const FilteredProjects = 
    projectData.filter((project)=>
        project.tag.includes(tag)
    )
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag name="All" 
                    onClick={handleTagChange} 
                    isSelected={tag==="All"}/>
        <ProjectTag name="Web" 
                    onClick={handleTagChange} 
                    isSelected={tag==="Web"}/>
      </div>
      <div className="grid md:grid-cols-3 md:gap-12 gap-8">
        {FilteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
