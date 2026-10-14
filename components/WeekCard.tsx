import Link from "next/link";
import type { Week } from "@/lib/types";
import StatusBadge from "./StatusBadge";

export default function WeekCard({ week }: { week: Week }) {
  const { frontmatter, slug } = week;

  return (
    <Link
      href={`/weeks/${slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Week {frontmatter.week}
        </span>
        <StatusBadge status={frontmatter.status} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {frontmatter.title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{frontmatter.summary}</p>
      <span className="mt-auto text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
        View week →
      </span>
    </Link>
  );
}
