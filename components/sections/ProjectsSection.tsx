'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectsSection() {
  const { projects } = portfolioData

  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects & Work Samples
          </h2>
          <p className="text-lg text-foreground/70">
            Real product artifacts — PRDs, case studies, and launches, ready to view or download
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
