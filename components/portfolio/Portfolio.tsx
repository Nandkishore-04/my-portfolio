import ProjectExplorer from "./ProjectExplorer";
import { education, experience, profile, projects, skills } from "@/lib/portfolioData";

function SectionHeading({ title, note, count }: { title: string; note?: string; count?: number }) {
    return (
        <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-ink pb-2">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink">
                {title}
                {count !== undefined && (
                    <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-ink px-1.5 text-[11px] font-semibold leading-none text-white">
                        {count}
                    </span>
                )}
            </h2>
            {note && <span className="hidden text-right text-xs text-ink/55 sm:inline">{note}</span>}
        </div>
    );
}

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-paper font-sans text-ink antialiased">
            {/* Nav */}
            <header className="sticky top-0 z-50 bg-ink text-white">
                <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6">
                    <a href="#top" className="shrink-0 text-sm font-semibold" aria-label={profile.name}>
                        <span className="min-[380px]:hidden">NK</span>
                        <span className="hidden min-[380px]:inline">{profile.name}</span>
                    </a>
                    <ul className="flex gap-3 text-xs text-white/75 min-[380px]:gap-4 sm:gap-6 sm:text-sm">
                        {navLinks.map((l) => (
                            <li key={l.href} className="whitespace-nowrap">
                                <a href={l.href} className="hover:text-white">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Hero */}
            <section id="top" className="border-b border-ink/10 bg-mist">
                <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
                    <div>
                        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                            AI engineer. I ship
                            <br />
                            things people use.
                        </h1>
                        <p className="mt-4 text-sm text-ink/65 sm:text-base">
                            GSoC 2026 with Intel OpenVINO, plus products running for real clients.
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 flex items-center gap-2 text-xs text-ink/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            {profile.availability}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary">
                                Résumé
                            </a>
                            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline">
                                GitHub
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="scroll-mt-12 border-b border-ink/10">
                <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
                    <SectionHeading title="Projects" count={projects.length} note="Pick one to see how it works" />
                    <ProjectExplorer />
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="scroll-mt-12 border-b border-ink/10">
                <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
                    <SectionHeading title="Experience" note="Where I've shipped" />
                    <ol className="border border-ink/15 bg-white">
                        {experience.map((job) => (
                            <li key={job.role + job.org} className="border-b border-ink/10 p-4 last:border-b-0 sm:p-5">
                                <div className="grid gap-3 md:grid-cols-[150px_1fr] md:gap-6">
                                    <div>
                                        <div className="font-display text-sm font-bold">{job.period}</div>
                                        <div className="text-[11px] text-ink/55">{job.type}</div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold">
                                            {job.role} <span className="font-normal text-ink/60">· {job.org}</span>
                                        </h3>
                                        <p className="mt-1 text-sm text-ink/70">{job.summary}</p>
                                        <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
                                            {job.bullets.map((b) => (
                                                <li key={b} className="flex gap-2">
                                                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-ink/60" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {job.tags.map((t) => (
                                                <span key={t} className="rounded-full border border-ink/20 px-2.5 py-0.5 text-[11px] text-ink/70">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Skills + Education */}
            <section id="skills" className="scroll-mt-12">
                <div className="mx-auto grid max-w-5xl gap-12 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-10">
                    <div>
                        <SectionHeading title="Skills" note="What I build with" />
                        <dl className="border border-ink/15 bg-white">
                            {skills.map((s) => (
                                <div
                                    key={s.area}
                                    className="grid gap-1 border-b border-ink/10 px-4 py-3 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-4"
                                >
                                    <dt className="text-sm font-semibold">{s.area}</dt>
                                    <dd className="text-xs leading-relaxed text-ink/65">{s.items}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div>
                        <SectionHeading title="Education" note="Chennai and Tokyo" />
                        <ul className="border border-ink/15 bg-white">
                            {education.map((e) => (
                                <li key={e.title} className="border-b border-ink/10 px-4 py-3 last:border-b-0">
                                    <div className="text-sm font-semibold">{e.title}</div>
                                    <div className="text-xs text-ink/60">{e.place}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-12 bg-ink text-white">
                <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            Hiring for AI/ML, GenAI or MLOps?
                        </h2>
                        <p className="mt-1 text-sm text-white/65">
                            Immediate joiner. Write to{" "}
                            <a href={`mailto:${profile.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
                                {profile.email}
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <a href={`mailto:${profile.email}`} className="btn-light">
                            Email me
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost-light">
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </section>

            <footer className="border-t border-ink/10 bg-paper">
                <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-5 text-xs text-ink/55 sm:flex-row sm:justify-between sm:px-6">
                    <span>
                        © {new Date().getFullYear()} {profile.name} · {profile.location}
                    </span>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink">
                        {profile.githubLabel}
                    </a>
                </div>
            </footer>
        </div>
    );
}
