import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="mx-auto max-w-4xl px-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        {siteConfig.studentName} · {siteConfig.programme} · {siteConfig.university}
      </div>
    </footer>
  );
}
