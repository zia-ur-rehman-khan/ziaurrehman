import { createFileRoute } from "@tanstack/react-router";

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS"],
  "Data & APIs": ["GraphQL", "REST APIs", "Firebase", "Prisma ORM", "TypeORM"],
  "Backend & Craft": ["NestJS", "Node.js", "Redux", "Git", "Figma", "Agile"],
};

const experience = [
  {
    company: "ViableTree",
    role: "Software Engineer",
    dates: "Jun 2023 — Present",
    details: "Crypto trading, ERP modules, Next.js, NestJS, microservices and Selenium automation.",
  },
  {
    company: "Cooperative Computing",
    role: "Software Engineer",
    dates: "Oct 2022 — Feb 2023",
    details: "Built frontend applications using Vue.js and React.js.",
  },
  {
    company: "Incitertech",
    role: "Frontend Developer",
    dates: "Aug 2021 — Oct 2022",
    details: "Social media and school management products with Next.js, GraphQL and Tailwind CSS.",
  },
  {
    company: "Computing Yard",
    role: "Frontend Software Engineer",
    dates: "Oct 2020 — Aug 2021",
    details: "Developed React applications and integrated backend data with MongoDB.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zia Ur Rehman | Frontend Engineer" },
      { name: "description", content: "Portfolio of Zia Ur Rehman, a frontend engineer in Karachi specializing in React, Next.js, TypeScript and scalable web applications." },
      { property: "og:title", content: "Zia Ur Rehman | Frontend Engineer" },
      { property: "og:description", content: "Frontend engineer with four years of experience building responsive, high-performance web applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="portfolio-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="portfolio-wash pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glass-panel panel-drift absolute -left-[18%] top-[18%] h-[340px] w-[65%] -rotate-12 rounded-[32px]" />
        <div className="glass-panel panel-drift panel-slow absolute right-[-12%] top-[6%] h-[300px] w-[48%] rotate-6 rounded-[32px]" />
        <div className="glass-panel panel-drift panel-late absolute bottom-[4%] left-[5%] h-[380px] w-[56%] -rotate-6 rounded-[32px]" />
        <div className="accent-haze absolute right-[8%] bottom-[18%] size-[260px] rounded-full blur-[90px]" />
        <div className="amber-haze absolute left-[20%] top-[8%] size-[200px] rounded-full blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 py-8 sm:px-10">
        <header className="rise flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Zia Ur Rehman, home">
            <span className="size-2.5 shrink-0 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">Zia Ur Rehman</span>
          </a>
          <nav className="flex items-center gap-5 text-sm" aria-label="Contact links">
            <a href="mailto:ziaurrehmanwarsi5@gmail.com" className="nav-link hidden sm:inline">Email</a>
            <a href="https://www.linkedin.com/in/zia-ur-rehman-warsi" target="_blank" rel="noreferrer" className="nav-link hidden sm:inline">LinkedIn</a>
            <a href="https://github.com/zia-ur-rehman-khan" target="_blank" rel="noreferrer" className="nav-link hidden sm:inline">GitHub</a>
            <a href="mailto:ziaurrehmanwarsi5@gmail.com" className="contact-pill">Contact</a>
          </nav>
        </header>

        <section id="top" className="relative mt-16 scroll-mt-8 sm:mt-24">
          <div className="glass-panel panel-drift rise delay-1 absolute -top-6 left-1/2 h-[220px] w-[86%] -rotate-3 rounded-[28px]" aria-hidden="true" />
          <p className="rise delay-1 relative text-sm font-medium uppercase tracking-[0.2em] text-primary">Frontend Engineer · 4 years</p>
          <h1 className="rise delay-2 relative mt-4 max-w-[20ch] text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.95] text-balance">
            Zia builds the interface layer of the product.
          </h1>
          <p className="rise delay-3 relative mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Results-driven engineer building scalable, high-performance applications with React and Next.js. Focused on clean architecture, responsive UI, API integration and seamless user experiences.
          </p>
          <div className="rise delay-4 relative mt-8 flex flex-wrap gap-3">
            <a href="mailto:ziaurrehmanwarsi5@gmail.com" className="contact-pill px-5 py-2">Email Zia</a>
            <a href="https://www.linkedin.com/in/zia-ur-rehman-warsi" target="_blank" rel="noreferrer" className="outline-pill">LinkedIn</a>
            <a href="https://github.com/zia-ur-rehman-khan" target="_blank" rel="noreferrer" className="outline-pill">GitHub</a>
          </div>
        </section>

        <section className="rise delay-3 relative mt-20" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-label">Technical stack</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <article key={category} className="content-panel rounded-2xl p-5">
                <h3 className={index === 0 ? "skill-primary" : index === 1 ? "skill-secondary" : "skill-muted"}>{category}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rise delay-4 relative mt-20" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-label">Experience</h2>
          <ol className="mt-5 divide-y divide-border">
            {experience.map((item) => (
              <li key={item.company} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <h3 className="font-medium text-foreground">{item.company}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">{item.details}</p>
                </div>
                <p className="text-sm text-primary sm:text-right">{item.dates}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rise delay-5 relative mt-20 grid gap-4 sm:grid-cols-3" aria-label="Education and languages">
          <article className="content-panel rounded-2xl p-5">
            <h2 className="skill-muted">Education</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">Pre-Engineering<br />Sindh Muslim Government Science College<br /><span className="text-muted-foreground">2018 — 2020</span></p>
          </article>
          <article className="content-panel rounded-2xl p-5">
            <h2 className="skill-muted">Certification</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">Web and Mobile Application Developer<br /><span className="text-muted-foreground">Jan 2020 — Jan 2021</span></p>
          </article>
          <article className="content-panel rounded-2xl p-5">
            <h2 className="skill-muted">Languages</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">Urdu · Full professional<br />English · Full professional</p>
          </article>
        </section>

        <footer className="rise delay-6 relative mt-20 flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Karachi, Pakistan · Let&apos;s build something useful.</p>
          <a href="tel:+923101037262" className="nav-link text-sm">+92 310 1037262</a>
        </footer>
      </div>
    </main>
  );
}