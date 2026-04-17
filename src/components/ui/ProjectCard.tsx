"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiDiscord } from 'react-icons/si';
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-subtle)]">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => {}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {project.tagline}
        </p>
        <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FiGithub className="h-4 w-4" />
            Source Code
          </a>
          {project.inviteUrl && (
            <a
              href={project.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline"
            >
              <SiDiscord className="h-4 w-4" />
              Invite Bot
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
