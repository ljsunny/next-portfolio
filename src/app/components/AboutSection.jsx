'use client'
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Languages & Core: Java, JavaScript, Python</li>
        <li>Backend: Spring Boot, REST API Design, Authentication & Authorization, Scheduled Batch Processing (Python)</li>
        <li>Frontend: React, Next.js, HTML, CSS, JavaScript</li>
        <li>Database: MySQL, Oracle, PostgreSQL, MongoDB</li>
        <li>Cloud & DevOps: AWS EC2, CI/CD (GitHub Actions, Jenkins), Docker</li>
        <li>Testing & Tools: JUnit, Mockito, Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Tamwood Co-op – Web Development Program</li>
        <li>University of Suwon — B.S. in Information Security</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>OCP: Oracle DB Professional Certification</li>
        <li>Information Processing Engineer (Korea)</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">

        {/* Image Section */}
        <div className="relative hidden md:block h-[520px] overflow-hidden rounded-lg">
        <Image
          src="/images/about-img.jpg"
          alt="Developer workspace"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[60%_40%] brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Text Section */}
        <div className="mt-5">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-base lg:text-lg leading-relaxed text-gray-200">
            I’m a full-stack software engineer with hands-on experience building and operating production web systems using Java, Spring Boot, and React.<br/>
            I contributed across the entire development lifecycle — from feature planning and API design to implementation, testing, and deployment.<br/>
            I focus on writing clean, maintainable code and enjoy translating technical solutions into real business value. I work closely with designers, product managers, and stakeholders to deliver reliable, user-focused products.<br/><br/>
          </p>

          <div className="flex flex-row mt-8 gap-4">
            <TabButton active={tab === "skills"} selectTab={() => handleTabChange("skills")}>
              Skills
            </TabButton>
            <TabButton active={tab === "education"} selectTab={() => handleTabChange("education")}>
              Education
            </TabButton>
            <TabButton active={tab === "certification"} selectTab={() => handleTabChange("certification")}>
              Certifications
            </TabButton>
          </div>

          <div className="mt-6 text-gray-300">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
