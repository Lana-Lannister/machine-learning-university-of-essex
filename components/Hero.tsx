import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3 border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <p className="text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        {siteConfig.university}
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {siteConfig.studentName}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300">
        {siteConfig.programme} — {siteConfig.module} e-portfolio
      </p>
      <p className="max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">{siteConfig.bio}</p>
    </section>
  );
}
