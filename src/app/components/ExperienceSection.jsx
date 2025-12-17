import React from 'react'

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white mb-4">Wmh Korea</h3>
          <p className="text-base lg:text-lg">
            I have 3 years of experience in both backend and frontend development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection