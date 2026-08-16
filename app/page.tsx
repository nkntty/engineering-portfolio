import Link from "next/link";
import { projects } from "../lib/projects";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Software Engineer</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I build reliable software that solves real business problems.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          I focus on understanding the problem first, making deliberate engineering trade-offs, and measuring the impact of what I build.
        </p>
        <div className="mt-8 flex gap-4 text-sm">
          <a href="https://github.com/nkntty" target="_blank" className="rounded-full border border-zinc-700 px-5 py-2.5 hover:border-zinc-500">GitHub</a>
          <a href="https://www.linkedin.com/in/tatsuya-nakano-344614208/" target="_blank" className="rounded-full border border-zinc-700 px-5 py-2.5 hover:border-zinc-500">LinkedIn</a>
        </div>
      </section>

      <section id="work" className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold">Case studies</h2>
          </div>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group rounded-2xl border border-zinc-800 p-7 hover:border-zinc-600">
                <p className="text-sm text-zinc-500">{project.title}</p>
                <h3 className="mt-2 text-2xl font-semibold group-hover:text-white">{project.headline}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400">{item}</span>)}
                </div>
                <p className="mt-6 text-sm">Read case study →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-800">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div><p className="text-sm uppercase tracking-[0.2em] text-zinc-500">About</p></div>
          <div>
            <h2 className="text-3xl font-semibold">Engineering beyond implementation.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">I care about finding the right problem, understanding constraints, comparing trade-offs, and building solutions that create measurable value for users and the business.</p>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">Replace this section with your background, specialization, and the kinds of engineering problems you want to solve in Canada.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s build something useful.</h2>
          <p className="mt-5 text-zinc-400">nakatatsu0719@gmailc.com</p>
        </div>
      </section>
    </main>
  );
}
