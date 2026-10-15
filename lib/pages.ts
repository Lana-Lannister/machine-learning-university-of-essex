import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

export interface PageFrontmatter {
  title: string;
  summary: string;
}

export function getPageContent(name: string): { data: PageFrontmatter; content: string } {
  const raw = fs.readFileSync(path.join(PAGES_DIR, `${name}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { data: data as PageFrontmatter, content };
}
