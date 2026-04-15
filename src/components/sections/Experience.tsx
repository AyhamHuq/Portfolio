import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--bg-primary)] py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeading>Experience</SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-2xl">
            {experience.map((entry, i) => (
              <TimelineItem
                key={i}
                entry={entry}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
