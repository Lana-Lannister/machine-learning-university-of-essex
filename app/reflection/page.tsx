import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/mdx-components";
import { getPageContent } from "@/lib/pages";

export function generateMetadata(): Metadata {
  const { data } = getPageContent("reflection");
  return { title: data.title, description: data.summary };
}

export default function ReflectionPage() {
  const { data, content } = getPageContent("reflection");

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Reflection
        </span>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{data.title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{data.summary}</p>
      </header>

      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
        />
      </section>
    </main>
  );
}
