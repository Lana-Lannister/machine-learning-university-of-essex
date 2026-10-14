import type { WeekLink } from "@/lib/types";

const TYPE_LABELS: Record<WeekLink["type"], string> = {
  notebook: "Notebook",
  dataset: "Dataset",
  pdf: "PDF",
  report: "Report",
  repo: "Repository",
  other: "Link",
};

export default function ArtifactLink({ label, href, type }: WeekLink) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 px-4 py-3 text-sm transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
    >
      <span className="font-medium text-zinc-900 dark:text-zinc-100">{label}</span>
      <span className="shrink-0 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {TYPE_LABELS[type]}
      </span>
    </a>
  );
}
