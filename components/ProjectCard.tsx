'use client'

import { Download, ExternalLink, FileText, Github, FolderOpen } from 'lucide-react'

interface ProjectLinks {
  live?: string | null
  caseStudy?: string | null
  github?: string | null
}

interface ProjectFile {
  path: string
  label: string
}

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image?: string | null
  tags: string[]
  links?: ProjectLinks
  file?: ProjectFile | null
  featured?: boolean
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
  links,
  file,
}: ProjectCardProps) {
  const hasLive = links?.live
  const hasCaseStudy = links?.caseStudy
  const hasGithub = links?.github

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* Thumbnail / placeholder */}
      <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-foreground/30">
            <FolderOpen className="w-10 h-10" />
            <span className="text-xs font-medium uppercase tracking-wide">
              No preview yet
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
          {category}
        </p>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4 flex-1">{description}</p>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/50">
          {file && (
            <a
              href={file.path}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              {file.label || 'Download'}
            </a>
          )}
          {hasLive && (
            <a
              href={links!.live!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors duration-200 text-foreground/80"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {hasCaseStudy && (
            <a
              href={links!.caseStudy!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors duration-200 text-foreground/80"
            >
              <FileText className="w-4 h-4" />
              Case Study
            </a>
          )}
          {hasGithub && (
            <a
              href={links!.github!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors duration-200 text-foreground/80"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {!file && !hasLive && !hasCaseStudy && !hasGithub && (
            <span className="text-xs text-foreground/40 italic py-2">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
