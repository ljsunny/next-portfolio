'use client'
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
const TAB_DATA =[
  {
    title:"skills",
    id:"skills",
    content:(
      <ul>
        <li>HTML, CSS, JS</li>
        <li>Java,Spring Boot</li>
        <li>mysql, Oracle, postgreSQL, mongoDB</li>
        <li>AWS EC2, S3</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content:(
      <ul>
        <li>Tamwood Co-op curriculum for web development</li>
        <li>University of Suwon, bancher of Information Security </li>
      </ul>
    )
  },
  {
    title:"Certification",
    id:"certification",
    content:(
      <ul>
        <li>OCP: Oracle DB Professional Certification</li>
        <li>Information processing engineer Certification in Korea</li>
      </ul>
    )
  },
]
function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id)=>{
    startTransition(()=> {
      setTab(id);
    });
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-5">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a developer with 3 years of experience in both backend and frontend development. As an early team member at a startup, I played a key role in the end-to-end development process, from designing features to building scalable systems. I have practical experience turning technical solutions into business value and enjoy collaborating closely with teams and stakeholders to deliver successful projects.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton active={tab ==="skills"} selectTab={()=>handleTabChange("skills")}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton active={tab ==="education"} selectTab={()=>handleTabChange("education")}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton active={tab ==="certification"} selectTab={()=>handleTabChange("certification")}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
