import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
        {children}
      </h2>
      <div className="mt-3 h-px w-12 bg-[var(--accent)]" />
    </div>
  );
}
