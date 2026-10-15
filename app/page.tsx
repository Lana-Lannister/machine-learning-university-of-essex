import Link from "next/link";
import { getAllWeeks } from "@/lib/weeks";
import Hero from "@/components/Hero";
import WeekCard from "@/components/WeekCard";

export default function HomePage() {
  const weeks = getAllWeeks();

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
      <Hero />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Link
          href="/evaluation"
          className="group flex flex-col gap-2 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-5 transition-colors hover:border-indigo-400 dark:border-indigo-900 dark:bg-indigo-950/30 dark:hover:border-indigo-700"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Project Evaluation
          </span>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Unit 6 Group Project vs. Unit 11 Individual Project
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            A comparative evaluation of the Airbnb marketplace optimisation group project and the
            individual Recommender Systems project: methodology, growth, and what each taught me.
          </p>
          <span className="mt-1 text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
            Read the evaluation →
          </span>
        </Link>
        <Link
          href="/reflection"
          className="group flex flex-col gap-2 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-5 transition-colors hover:border-indigo-400 dark:border-indigo-900 dark:bg-indigo-950/30 dark:hover:border-indigo-700"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Reflection
          </span>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Final Reflective Piece
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            My knowledge of the ML algorithms covered, my contributions to team activities, my
            experience as a member of a development team, and the impact on my professional growth.
          </p>
          <span className="mt-1 text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
            Read the reflection →
          </span>
        </Link>
      </div>
      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Weekly progress
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <WeekCard key={week.slug} week={week} />
          ))}
        </div>
      </section>
    </main>
  );
}
