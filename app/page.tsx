import { getAllWeeks } from "@/lib/weeks";
import Hero from "@/components/Hero";
import WeekCard from "@/components/WeekCard";

export default function HomePage() {
  const weeks = getAllWeeks();

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
      <Hero />
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
