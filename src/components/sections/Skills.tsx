import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg-subtle)] py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeading>Skills</SectionHeading>
        </AnimateOnScroll>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <AnimateOnScroll key={category.label} delay={catIndex * 0.1}>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
