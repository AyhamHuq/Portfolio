import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-[var(--bg-primary)] py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeading>Projects</SectionHeading>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
