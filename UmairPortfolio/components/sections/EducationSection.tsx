'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { GraduationCap } from 'lucide-react'

export function EducationSection() {
  const { education } = portfolioData

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-foreground/70">
            Academic foundation behind the work
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="animate-slideUp bg-card rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-semibold text-primary">{edu.graduationYear}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-foreground/70">GPA: {edu.gpa}</p>}
                  {edu.details && <p className="text-sm text-foreground/70 italic">{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
