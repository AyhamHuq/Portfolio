import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  return (
    <section id="about" className="bg-[var(--bg-subtle)] py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeading>About</SectionHeading>
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I&apos;m a software engineer based in Chicago, recently graduated from The Ohio
                State University with a B.S. in Computer Science and Engineering (3.95 GPA).
                I currently work as an Associate Software Consultant at CapTech Ventures, where
                I&apos;ve shipped production software for Fortune 100 financial clients and built
                Agentic AI platforms for professional sports organizations.
              </p>
              <p>
                I&apos;m drawn to the full spectrum of the stack — designing clean React frontends,
                building reliable Node.js and Python backends, and setting up the cloud
                infrastructure that makes it all run in production. When something interests me,
                I build it: I self-host several of my own projects on a Hetzner server using
                Docker and Caddy, and I hold AWS certifications in Solutions Architecture and
                AI Practitioner.
              </p>
              <p>
                Outside of work, I competed in three consecutive HackOHI/O hackathons at OSU —
                taking 2nd place in 2024 — and I enjoy building tools that solve real problems
                for people I know, like a family goal tracker and a Bangla language learning app.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Quick Facts
                </h3>
                <dl className="space-y-3">
                  {[
                    ["Location", "Chicago, IL"],
                    ["Education", "B.S. CSE — Ohio State, 3.95 GPA"],
                    ["Current Role", "Associate Software Consultant @ CapTech"],
                    ["AWS Certs", "Solutions Architect + AI Practitioner"],
                    ["GitHub", "github.com/AyhamHuq"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                      <dt className="w-28 shrink-0 text-xs font-medium text-[var(--text-muted)]">
                        {label}
                      </dt>
                      <dd className="text-sm text-[var(--text-secondary)]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
