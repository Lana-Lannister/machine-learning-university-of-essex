# Machine Learning E-Portfolio

E-portfolio for the **Machine Learning** module of the **MSc Artificial Intelligence** programme at the **University of Essex**, documenting weekly coursework across 12 weeks for review by the module professor.

Live site: https://machine-learning-university-of-essex.vercel.app/

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [MDX](https://mdxjs.com/) content via `next-mdx-remote` + `gray-matter`
- Deployed on [Vercel](https://vercel.com/)

## Repository structure

```
app/                  Next.js routes (home page, /weeks/[slug] detail pages)
components/           Shared React components (cards, badges, tags, MDX renderer)
lib/                   Types, content loader (lib/weeks.ts), site config
content/weeks/         One .mdx file per week (frontmatter + write-up), week-01.mdx … week-12.mdx
public/weeks/week-NN/  Assets the live site serves directly (PDFs, screenshots)
coursework/week-NN/    Raw working files (notebooks, datasets, scripts), source of truth
```

### Where do artifacts live?

- **`public/weeks/week-NN/`**: anything the live site should serve or link to for direct download: PDF reports, result screenshots, small images referenced from that week's MDX. Keep files small; everything here ships in the Vercel deployment.
- **`coursework/week-NN/`**: the actual working files (Jupyter notebooks, datasets, scripts). These are linked from the week's MDX frontmatter via their GitHub blob URL (e.g. `https://github.com/<user>/<repo>/blob/main/coursework/week-01/notebook.ipynb`), since GitHub renders `.ipynb` notebooks natively, so no in-app notebook viewer is needed.

## Adding a week's content

Each week already has a placeholder at `content/weeks/week-NN.mdx`. To fill it in:

1. Add notebooks/datasets/scripts to `coursework/week-NN/`.
2. Add any PDFs/screenshots to `public/weeks/week-NN/` (images go in `public/weeks/week-NN/images/`).
3. Edit `content/weeks/week-NN.mdx`:
   - Update `status` to `"in-progress"` or `"complete"`.
   - Fill in `summary`, `topics`, and `links` (each link has a `label`, `href`, and `type` of `notebook | dataset | pdf | report | repo | other`).
   - Write the week's body as Markdown/MDX below the frontmatter.
4. Commit and push; pushing to `main` triggers a new Vercel deployment automatically.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build     # production build check, mirrors what Vercel runs
npm run start     # serve the production build locally
```

## Deployment

The project deploys to [Vercel](https://vercel.com/) with zero extra configuration: import this GitHub repository, keep the default root directory, and every push to `main` produces a production deployment (branches/PRs get preview deployments).
