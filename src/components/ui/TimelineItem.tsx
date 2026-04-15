import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/data/experience";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

const typeColors: Record<ExperienceEntry["type"], string> = {
  work: "bg-[var(--accent)]",
  education: "bg-emerald-500",
  certification: "bg-amber-500",
  hackathon: "bg-purple-500",
};

export function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn("mt-1.5 h-3 w-3 shrink-0 rounded-full", typeColors[entry.type])}
        />
        {!isLast && <div className="mt-1 w-px flex-1 bg-[var(--border-color)]" />}
      </div>

      {/* Content */}
      <div className={cn("pb-10", isLast && "pb-0")}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            {entry.title}
          </h3>
          <span className="text-sm text-[var(--text-secondary)]">
            {entry.organization}
          </span>
          {entry.location && (
            <span className="text-sm text-[var(--text-muted)]">
              · {entry.location}
            </span>
          )}
        </div>
        {entry.period && (
          <p className="mb-2 mt-0.5 text-xs text-[var(--text-muted)]">{entry.period}</p>
        )}
        <ul className="space-y-1.5">
          {entry.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
