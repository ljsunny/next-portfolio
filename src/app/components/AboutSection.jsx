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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-5">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Developer with 3 years of experiencFe specializing in both backend
            and frontend development. As an early member of a startup, played a
            key role in the end-to-end development process, from feature
            creation to system design. Gained substantial hands-on experience in
            building and scaling products, with a focus on aligning technical
            solutions with business goals. Strong communication skills
            facilitate effective collaboration between technical teams and
            stakeholders, ensuring successful project outcomes.
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
