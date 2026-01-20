"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import ExperienceCard from './ExperienceCard'
import ExperienceModal from './ExperienceModal'

const EXPERIENCES = [
  {
    id: "wmh-korea",
    company: "WMH Korea",
    role: "Full-Stack Web Developer",
    period: "June 2022 – May 2023",
    tags: [
      "Spring Boot",
      "Backend Development",
      "Production Systems",
      "AWS EC2"
    ],
    summary: [
      "Developed and operated backend services for a Spring Boot production platform",
      "Designed and optimized SQL queries in Oracle and MySQL, improving performance by ~20–30%",
      "Built and maintained internal CMS features using JavaScript, HTML, and CSS",
      "Handled production issues and backend performance tuning in live environments",
      "Worked closely with PMs and designers to deliver scalable features"
    ],
    details: {
      whatIDid: [
        "Onboarded into an existing production codebase by carefully reading and understanding backend and frontend implementations",
        "Implemented RESTful APIs and core business logic using Java and Spring Boot",
        "Optimized database queries by analyzing execution plans and identifying performance bottlenecks",
        "Debugged production issues by tracing request flows across frontend, backend, and database layers",
        "Monitored production behavior and applied backend optimizations to improve stability and response times"
      ],
      whyItMattered: [
        "Improved system performance and reliability in a production environment",
        "Reduced operational issues by identifying and fixing root causes instead of applying temporary patches",
        "Enabled smoother collaboration by translating product requirements into implementable technical solutions"
      ]
    },
    image:'/images/experiences/experience2.png'
  },
  {
    id: "next-guide",
    company: "NextGuide",
    role: "Full-Stack Web Developer",
    period: "Mar 2021 – Jun 2022",
    tags: [
      "Public Sector",
      "Legacy Systems",
      "Refactoring",
      "System Stability"
    ],
    summary: [
      "Developed and maintained a KPI management system for a public institution",
      "Worked extensively with existing and legacy codebases",
      "Focused on system stability, maintainability, and safe incremental improvements"
    ],
    details: {
      whatIDid: [
        "Read and analyzed legacy backend and frontend code to understand complex business logic before making changes",
        "Refactored existing code to improve readability and maintainability while preserving system behavior",
        "Enhanced backend features to support evolving business and reporting requirements",
        "Migrated legacy database structures to a modern DB environment, improving performance and maintainability",
        "Investigated and resolved production issues by tracing data flow and side effects across the system"
      ],
      whyItMattered: [
        "Minimized risk when modifying critical public-sector systems",
        "Improved long-term maintainability of legacy codebases",
        "Ensured stable system operation while gradually modernizing the platform"
      ]
    },
    image:'/images/experiences/experience1.jpeg'
  }
];



export default function ExperienceSection() {
  const [activeId, setActiveId] = useState(null);

  const active = useMemo(
    () => EXPERIENCES.find((x) => x.id === activeId) || null,
    [activeId]
  );

  return (
    <section id="experiences">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-stretch py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        {EXPERIENCES.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>

      <ExperienceModal
        open={!!active}
        onClose={() => setActiveId(null)}
        title={active ? `${active.company} — ${active.role}` : "Experience"}
      >
        {active ? (
          <div className="space-y-6">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={active.image}
                alt={`${active.company} experience`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <span className="text-zinc-200">This image is for illustrative purposes only.</span>
            <div>
              <p className="text-sm text-zinc-400">{active.period}</p>
              {active.summary ? (
                <p className="mt-3 text-zinc-200">{active.summary}</p>
              ) : null}
            </div>

            <div>
              <h4 className="text-base font-semibold text-white mb-2">
                What I did
              </h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-200">
                {active.details.whatIDid.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-white mb-2">
                Why it mattered
              </h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-200">
                {active.details.whyItMattered.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </ExperienceModal>
    </section>
  );
}
