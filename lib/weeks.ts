import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import type { Week, WeekFrontmatter } from "./types";

const WEEKS_DIR = path.join(process.cwd(), "content", "weeks");

export function getAllWeeks(): Week[] {
  const files = fs.readdirSync(WEEKS_DIR).filter((f) => f.endsWith(".mdx"));

  const weeks = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(WEEKS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return { frontmatter: data as WeekFrontmatter, slug, content };
  });

  return weeks.sort((a, b) => a.frontmatter.week - b.frontmatter.week);
}

export function getWeekBySlug(slug: string): Week | undefined {
  return getAllWeeks().find((w) => w.slug === slug);
}

export function getAllWeekSlugs(): string[] {
  return getAllWeeks().map((w) => w.slug);
}

export interface AssessmentHeading {
  title: string;
  anchor: string;
}

export function getAssessmentHeadings(content: string): AssessmentHeading[] {
  const slugger = new GithubSlugger();
  const matches = [...content.matchAll(/^##\s+(Assessment\s+\d+:.*)$/gm)];

  return matches.map((match) => {
    const title = match[1].trim();
    return { title, anchor: slugger.slug(title) };
  });
}
