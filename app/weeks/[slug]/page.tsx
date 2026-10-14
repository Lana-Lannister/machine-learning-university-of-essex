import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllWeekSlugs, getAllWeeks, getWeekBySlug } from "@/lib/weeks";
import { mdxComponents } from "@/components/mdx-components";
import StatusBadge from "@/components/StatusBadge";
import TopicTag from "@/components/TopicTag";
import ArtifactLink from "@/components/ArtifactLink";

export function generateStaticParams() {
  return getAllWeekSlugs().map((slug) => ({ slug }));
}

export default async function WeekPage({
  params,
}: PageProps<"/weeks/[slug]">) {
  const { slug } = await params;
  const week = getWeekBySlug(slug);
  if (!week) notFound();

  const { frontmatter, content } = week;
  const allSlugs = getAllWeeks().map((w) => w.slug);
  const index = allSlugs.indexOf(slug);
  const prevSlug = index > 0 ? allSlugs[index - 1] : undefined;
  const nextSlug = index < allSlugs.length - 1 ? allSlugs[index + 1] : undefined;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Week {frontmatter.week}
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {frontmatter.title}
          </h1>
          <StatusBadge status={frontmatter.status} />
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{frontmatter.dateRange}</p>
        {frontmatter.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.topics.map((topic) => (
              <TopicTag key={topic} label={topic} />
            ))}
          </div>
        )}
      </header>

      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </section>

      {frontmatter.links.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Artifacts</h2>
          <div className="flex flex-col gap-2">
            {frontmatter.links.map((link) => (
              <ArtifactLink key={link.href} {...link} />
            ))}
          </div>
        </section>
      )}

      <nav className="flex items-center justify-between border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        {prevSlug ? (
          <a href={`/weeks/${prevSlug}`} className="text-indigo-600 hover:underline dark:text-indigo-400">
            ← Previous week
          </a>
        ) : (
          <span />
        )}
        {nextSlug ? (
          <a href={`/weeks/${nextSlug}`} className="text-indigo-600 hover:underline dark:text-indigo-400">
            Next week →
          </a>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
