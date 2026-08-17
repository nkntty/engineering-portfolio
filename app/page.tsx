import Link from "next/link";
import { projects } from "../lib/projects";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-32">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Software Engineer
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl sm:leading-[1.08]">
          I build reliable software and AI systems that solve real business
          problems.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
          I focus on understanding the problem first, making deliberate
          engineering decisions, and building solutions that are reliable,
          testable, and useful.
        </p>

        <div className="mt-9 flex flex-wrap gap-3 text-sm font-medium">
          <a
            href="https://github.com/nkntty"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-white hover:bg-zinc-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tatsuya-nakano-344614208/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-800 hover:border-zinc-500 hover:bg-zinc-50"
          >
            LinkedIn
          </a>

          <a
            href="#work"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-800 hover:border-zinc-500 hover:bg-zinc-50"
          >
            View my work ↓
          </a>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
              Engineering case studies
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              A selection of projects showing how I approach problems,
              engineering decisions, implementation, and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="group rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <p className="text-sm font-medium text-blue-600">
                  {project.title}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-700">
                  {project.headline}
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-7 text-sm font-semibold text-zinc-900">
                  Read case study →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Engineering beyond implementation.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
              I&apos;m a software engineer interested in building reliable
              systems at the intersection of software engineering, AI, and
              machine learning.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              I enjoy understanding how a system works end-to-end, identifying
              where problems actually occur, evaluating trade-offs, and
              turning those findings into practical solutions.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              My recent work includes building and validating an AI-assisted
              Accounts Payable workflow and developing machine-learning models
              for customer churn prediction.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
            Let&apos;s connect.
          </h2>

          <p className="mt-5 text-zinc-600">
            nakatatsu0719@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}