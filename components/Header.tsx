import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-50">
          {siteConfig.studentName}
        </Link>
        <a
          href={siteConfig.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
