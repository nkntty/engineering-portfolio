import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-zinc-800 py-10 md:grid-cols-[180px_1fr]">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">{title}</h2>
      <div className="max-w-3xl leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-20">
      <p className="text-sm text-zinc-500">Case Study</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">{project.headline}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400">{item}</span>)}</div>

      <div className="mt-16">
        <Section title="Context"><p>{project.context}</p></Section>
        <Section title="Problem"><p>{project.problem}</p></Section>
        <Section title="Discovery"><p>{project.discovery}</p></Section>
        <Section title="Investigation"><p>{project.investigation}</p></Section>
        <Section title="Decisions"><ul className="list-disc space-y-2 pl-5">{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Solution"><ul className="list-disc space-y-2 pl-5">{project.solution.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="My Contribution"><p>{project.contribution}</p></Section>
        <Section title="Results"><ul className="list-disc space-y-2 pl-5">{project.results.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Business Impact"><p>{project.businessImpact}</p></Section>
        <Section title="What I Learned"><p>{project.lessons}</p></Section>
      </div>
    </main>
  );
}
