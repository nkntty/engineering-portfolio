import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function Section({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <section
      className={`grid gap-5 border-t py-10 md:grid-cols-[180px_1fr] ${
        highlight
          ? "border-blue-200 bg-blue-50/50 px-6 md:px-8"
          : "border-zinc-200"
      }`}
    >
      <h2
        className={`text-sm font-semibold uppercase tracking-[0.16em] ${
          highlight ? "text-blue-700" : "text-zinc-500"
        }`}
      >
        {title}
      </h2>

      <div className="max-w-3xl text-[16px] leading-8 text-zinc-700">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (project) => project.slug === params.slug
  );

  if (!project) notFound();

  return (
    <main className="bg-white text-zinc-900">
      <article className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:pt-20">
        
        {/* Back */}
        <Link
          href="/#work"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to projects
        </Link>

        {/* Hero */}
        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Case Study
          </p>

          <p className="mt-4 text-lg font-medium text-zinc-600">
            {project.title}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.1]">
            {project.headline}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-700">
            {project.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="mt-16">
          <Section title="Context">
            <p>{project.context}</p>
          </Section>

          <Section title="Problem">
            <p>{project.problem}</p>
          </Section>

          <Section title="Discovery">
            <p>{project.discovery}</p>
          </Section>

          <Section title="Investigation">
            <p>{project.investigation}</p>
          </Section>

          <Section title="Decisions">
            <ul className="list-disc space-y-3 pl-5 marker:text-zinc-400">
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Solution">
            <ul className="list-disc space-y-3 pl-5 marker:text-zinc-400">
              {project.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="My Contribution">
            <p>{project.contribution}</p>
          </Section>

          <Section title="Results" highlight>
            <ul className="space-y-3">
              {project.results.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-medium text-zinc-900"
                >
                  <span className="text-blue-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Business Impact">
            <p>{project.businessImpact}</p>
          </Section>

          {project.futureFeatures && project.futureFeatures.length > 0 && (
  <Section title="Future Roadmap">
    <ul className="list-disc space-y-3 pl-5 marker:text-zinc-400">
      {project.futureFeatures.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </Section>
)}

          <Section title="What I Learned">
            <p>{project.lessons}</p>
          </Section>
        </div>
      </article>
    </main>
  );
}