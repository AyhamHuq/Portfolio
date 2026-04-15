import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/AyhamHuq",
    href: "https://github.com/AyhamHuq",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayham-huq",
    href: "https://linkedin.com/in/ayham-huq",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    value: "ayham.huq@gmail.com",
    href: "mailto:ayham.huq@gmail.com",
    icon: FiMail,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg-subtle)] py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeading>Contact</SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-lg">
            <p className="mb-8 text-[var(--text-secondary)] leading-relaxed">
              I&apos;m always open to interesting conversations, new opportunities, or just
              talking shop. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-3">
              {LINKS.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-4 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-sm"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
