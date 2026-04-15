import { cn } from "@/lib/utils";
import * as Si from "react-icons/si";

interface SkillBadgeProps {
  name: string;
  icon: string;
  className?: string;
}

type SiIcons = typeof Si;

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  const IconComponent = (Si as SiIcons)[icon as keyof SiIcons] as React.ComponentType<{ className?: string }> | undefined;

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3.5 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]",
        className
      )}
    >
      {IconComponent && (
        <IconComponent className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
      )}
      <span>{name}</span>
    </div>
  );
}
