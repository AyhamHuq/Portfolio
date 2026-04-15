import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Ayham Huq
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AyhamHuq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/ayham-huq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FiLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:ayham.huq@gmail.com"
            aria-label="Email"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FiMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
