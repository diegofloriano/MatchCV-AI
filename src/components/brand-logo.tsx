import { cn } from "@/lib/utils";

export function BrandLogo({ showWordmark = true, className }: { showWordmark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path
          d="M7 2.5h11.5L27 11v16.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 27.5v-22A2.5 2.5 0 0 1 7 2.5Z"
          className="fill-primary"
        />
        <path d="M18.5 2.5 27 11h-6a2.5 2.5 0 0 1-2.5-2.5V2.5Z" className="fill-primary-strong" />
        <circle cx="16" cy="19" r="6" className="stroke-highlight-border" strokeWidth="2.2" fill="none" />
        <circle cx="16" cy="19" r="2.4" className="fill-highlight-border" />
        <path
          d="M16 10.5V13M16 25v2.5M7.5 19H10M22 19h2.5"
          className="stroke-highlight-border"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span className="whitespace-nowrap font-display text-lg font-semibold text-foreground">MatchCV AI</span>
      )}
    </span>
  );
}
