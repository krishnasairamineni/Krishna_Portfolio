import {
  ArrowDownToLine,
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  capabilities,
  clientWorkflow,
  contact,
  experience,
  floatingCards,
  freelanceWebsites,
  navItems,
  projects,
  services,
  skills,
  wordpressTools,
} from './data/portfolioData';

const iconMap = {
  Globe2,
  Blocks,
  Database,
  ShieldCheck,
  ServerCog,
  Wrench,
  Sparkles,
  BriefcaseBusiness,
};

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, children, align = 'left', dark = false }) {
  return (
    <Reveal className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${dark ? 'text-white/72' : 'text-slate-600'}`}>
          {children}
        </p>
      )}
    </Reveal>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-cloud/88 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-field font-display text-lg font-extrabold text-white">
            KR
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-extrabold text-ink">Krishna</span>
            <span className="block text-xs font-semibold text-slate-500">Digital Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-field"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring action-button hidden rounded-md bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-field md:inline-flex"
        >
          Start a conversation
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-md bg-white text-ink shadow-sm lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-cloud"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cloud pt-32">
      <div className="hero-wash absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(98,195,165,0.26),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(232,93,117,0.22),transparent_28%),linear-gradient(135deg,#f8fbfc_0%,#eef8f5_46%,#fff7e8_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-45" />
      <div className="section-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-14 pb-16 lg:grid-cols-[1.03fr_0.97fr]">
        <Reveal className="hero-copy">
          <p className="eyebrow">Web Development / CMS Support / Marketing Operations</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Krishna</span>
          </h1>
          <p className="mt-5 text-2xl font-bold text-field">Website & Digital Solutions Developer</p>
          <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-700 sm:text-lg">
            PHP | JavaScript | HTML/CSS | SQL | WordPress | Secure Web Applications
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I build and support responsive websites, WordPress CMS pages, landing pages, portals,
            dashboards, and SQL-backed systems for teams that need dependable execution, clear
            communication, and practical website maintenance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#freelance"
              className="focus-ring action-button inline-flex items-center justify-center gap-2 rounded-md bg-field px-5 py-3 font-bold text-white shadow-card transition hover:-translate-y-1 hover:bg-ink"
            >
              View Website Work <ArrowRight size={18} />
            </a>
            <a
              href={assetPath('/Krishna_Web_Developer_Resume.pdf')}
              download
              className="focus-ring action-button inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-field shadow-card transition hover:-translate-y-1"
            >
              Download Resume <ArrowDownToLine size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-field/20 px-5 py-3 font-bold text-field transition hover:-translate-y-1 hover:bg-white"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal className="relative min-h-[480px]" delay={180}>
          <div className="drift-orb absolute left-4 top-8 h-72 w-72 rounded-full bg-mint/25 blur-3xl" />
          <div className="drift-orb drift-orb-alt absolute bottom-8 right-4 h-80 w-80 rounded-full bg-citrus/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-[560px] grid-cols-2 gap-4 sm:gap-5">
            <div className="shine-card group col-span-2 overflow-hidden rounded-md border border-white/80 bg-white/80 p-2 shadow-glow backdrop-blur">
              <img
                src={assetPath('/assets/digital-solutions-studio.png')}
                alt="Digital solutions studio workspace with web dashboards and code interfaces"
                className="h-56 w-full rounded object-cover transition duration-700 group-hover:scale-105 sm:h-64"
              />
            </div>
            {floatingCards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <div
                  key={card.title}
                  style={{ animationDelay: `${index * 140}ms` }}
                  className={`shine-card rounded-md border border-white/80 bg-white/82 p-5 shadow-glow backdrop-blur transition hover:-translate-y-2 hover:bg-white ${
                    index % 2 === 0 ? 'animate-float' : 'animate-float-slow'
                  } ${index === 1 || index === 4 ? 'translate-y-8' : ''}`}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-field text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="About" title="Website support that understands both code and marketing deadlines.">
            I work best where websites need steady hands: page updates, WordPress support, bug fixes,
            content changes, dashboards, forms, access, and communication with people who may not be technical.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Production-ready updates', 'Responsive pages, CMS sections, forms, menus, and content edits with QA.'],
              ['Business systems focus', 'SQL dashboards, portals, reporting flows, and small-business operational tooling.'],
              ['Security aware', 'SSL/TLS, authentication, hosting access, SSH, firewalls, and careful maintenance habits.'],
              ['Marketing friendly', 'SEO-ready page updates, landing pages, image swaps, copy changes, and stakeholder clarity.'],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 90} className="rounded-md border border-slate-200 bg-cloud p-6">
                <CheckCircle2 className="text-mint" size={24} />
                <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="profile-showcase">
          <div className="profile-frame">
            <div className="profile-halo" />
            <img
              src={assetPath('/assets/krishna-profile-transparent.png')}
              alt="Krishna, Website and Digital Solutions Developer"
              className="profile-photo"
            />
            <div className="profile-ribbon profile-ribbon-top">Web Developer</div>
            <div className="profile-ribbon profile-ribbon-bottom">Client-ready support</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-cloud py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Services" title="Website execution for marketing teams, agencies, and small businesses.">
          I can step into everyday website work: build the page, fix the issue, update the content,
          check the mobile view, and explain what changed.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal
                key={service.title}
                delay={index * 55}
                className="shine-card group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:border-mint hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-field/8 text-field transition group-hover:bg-field group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-ink">{service.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="Practical range for CMS pages, front-end fixes, data, and hosting." />
        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 80} className="rounded-md border border-slate-200 bg-cloud p-6">
              <h3 className="font-display text-xl font-extrabold text-ink">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tooling() {
  return (
    <section id="tools" className="bg-cloud py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="CMS & workflow" title="WordPress builders, CMS tools, and support workflows I use on real website work.">
          The goal is simple: keep pages accurate, campaigns moving, and technical issues from slowing down the team.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {wordpressTools.map((tool, index) => (
            <Reveal
              key={tool.title}
              delay={index * 80}
              className="group flex min-h-[300px] flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-field/30 hover:shadow-card"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-mint transition group-hover:w-24" />
              <h3 className="font-display text-xl font-extrabold text-ink">{tool.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{tool.copy}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {tool.items.map((item) => (
                  <span key={item} className="rounded-md bg-cloud px-3 py-1.5 text-xs font-bold text-field">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-ink py-24 text-white">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Website, CMS, data, and support experience across business environments." dark>
          Recent work spans website support, PHP and JavaScript applications, WordPress maintenance,
          reporting dashboards, CI/CD workflows, and stakeholder-facing digital support.
        </SectionHeading>
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-white/20 md:block" />
          <div className="grid gap-5">
            {experience.map((role, index) => (
              <Reveal key={`${role.company}-${role.period}`} delay={index * 85} className="relative md:pl-12">
                <div className="absolute left-2 top-7 hidden h-5 w-5 rounded-full border-4 border-ink bg-citrus md:block" />
                <div className="rounded-md border border-white/10 bg-white/7 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-extrabold">{role.company}</h3>
                      <p className="mt-1 font-semibold text-mint">{role.title}</p>
                    </div>
                    <div className="text-sm font-bold text-citrus md:text-right">
                      <p>{role.period}</p>
                      <p className="mt-1 text-white/70">{role.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-cloud py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Strengths" title="Where I can be useful to a marketing or web team quickly.">
          These are the habits I bring to website work: clear scope, steady updates, careful QA,
          practical troubleshooting, and enough technical depth to support the system behind the page.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 85}
              className="shine-card group flex min-h-[360px] flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-coral hover:shadow-card"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-md bg-field px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                  Strength
                </span>
                <ExternalLink className="text-slate-400 transition group-hover:text-coral" size={20} />
              </div>
              <h3 className="font-display text-xl font-extrabold text-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-cloud px-3 py-1.5 text-xs font-bold text-field">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-coral">Why it matters</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{project.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientWorkflow() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Client process" title="How I turn requests into finished website work.">
          I focus on understanding the real business need first, then turning that conversation into
          clear website work, simple communication, and practical delivery.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative overflow-hidden rounded-md border border-slate-200 bg-cloud p-6 shadow-card">
            <div className="client-scene" aria-hidden="true">
              <div className="client-chat client-chat-left">
                <span>What do you need the site to do?</span>
              </div>
              <div className="client-chat client-chat-right">
                <span>Bring in more local customers.</span>
              </div>
              <div className="client-laptop">
                <div />
                <span />
                <span />
                <span />
              </div>
              <div className="client-checklist">
                <p>Plan</p>
                <span>Pages</span>
                <span>Content</span>
                <span>Launch</span>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientWorkflow.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="rounded-md border border-slate-200 bg-cloud p-6 transition hover:-translate-y-2 hover:shadow-card"
              >
                <span className="text-sm font-extrabold text-coral">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteMockup({ variant, logo, image, title }) {
  if (logo) {
    return (
      <div className={`website-mockup logo-only-preview logo-only-preview-${variant}`} aria-hidden="true">
        <img src={assetPath(logo)} alt="" />
      </div>
    );
  }

  if (image) {
    return (
      <div className="website-mockup website-photo-preview" aria-hidden="true">
        <img src={assetPath(image)} alt="" />
        <div className="website-photo-label">{title}</div>
      </div>
    );
  }

  return (
    <div className={`website-mockup website-mockup-${variant}`} aria-hidden="true">
      <div className="mockup-browser">
        <div className="mockup-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-viewport">
          <div className="mockup-hero" />
          <div className="mockup-line mockup-line-a" />
          <div className="mockup-line mockup-line-b" />
          <div className="mockup-grid">
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-orbit">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function FreelanceWebsites() {
  return (
    <section id="freelance" className="overflow-hidden bg-ink py-24 text-white">
      <div className="section-shell">
        <SectionHeading eyebrow="Portfolio links" title="Website References" dark />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {freelanceWebsites.map((site, index) => (
            <Reveal
              key={site.title}
              delay={index * 65}
              className="freelance-card group rounded-md border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition hover:-translate-y-2 hover:border-mint/70 hover:bg-white/[0.1]"
            >
              <WebsiteMockup variant={site.visual} logo={site.logo} image={site.image} title={site.title} />
              {site.url ? (
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-extrabold text-field transition hover:-translate-y-0.5 hover:bg-mint hover:text-ink"
                >
                  {site.title} <ExternalLink size={16} />
                </a>
              ) : (
                <div className="mt-4 rounded-md border border-white/10 px-3 py-2 text-center text-sm font-extrabold text-white/60">
                  {site.title}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="support" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Website support" title="How I help web and marketing teams" align="center">
          I can support the visible website, the CMS workflow, and the technical details behind forms,
          content, hosting, reporting, and access.
        </SectionHeading>
        <Reveal className="mb-10 overflow-hidden rounded-md border border-slate-200 bg-cloud p-2 shadow-card">
          <img
            src={assetPath('/assets/website-support-systems.png')}
            alt="Website support systems with dashboards, responsive layouts, API connections, and secure web tools"
            className="h-72 w-full rounded object-cover sm:h-80 lg:h-96"
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="rounded-md border border-slate-200 bg-cloud p-6 transition hover:-translate-y-2 hover:shadow-card">
              <div className="mb-6 h-1.5 w-20 origin-left rounded-full bg-coral animate-pulseLine" />
              <h3 className="font-display text-xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="bg-field py-20 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-citrus">Resume</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Need the one-page version?</h2>
          <p className="mt-4 leading-7 text-white/78">
            Download Krishna's web developer resume for a concise overview of
            development, website support, database, CMS, hosting, and automation experience.
          </p>
        </div>
        <a
          href={assetPath('/Krishna_Web_Developer_Resume.pdf')}
          download
          className="focus-ring action-button inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-extrabold text-field shadow-card transition hover:-translate-y-1"
        >
          Download Resume <ArrowDownToLine size={18} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-cloud py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="Contact" title="Let's talk about the website work your team needs handled.">
          Available for web developer, WordPress CMS support, PHP developer, website support,
          small-business website maintenance, and digital marketing support roles.
        </SectionHeading>
        <div className="rounded-md border border-slate-200 bg-white p-6 shadow-card">
          <div className="grid gap-4">
            <a href={`mailto:${contact.email}`} className="focus-ring flex items-center gap-4 rounded-md bg-cloud p-4 transition hover:bg-white hover:shadow-sm">
              <Mail className="text-coral" size={24} />
              <span>
                <span className="block text-sm font-bold text-slate-500">Email</span>
                <span className="font-extrabold text-ink">{contact.email}</span>
              </span>
            </a>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="focus-ring flex items-center gap-4 rounded-md bg-cloud p-4 transition hover:bg-white hover:shadow-sm">
              <Phone className="text-mint" size={24} />
              <span>
                <span className="block text-sm font-bold text-slate-500">Phone</span>
                <span className="font-extrabold text-ink">{contact.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-md bg-cloud p-4">
              <MapPin className="text-citrus" size={24} />
              <span>
                <span className="block text-sm font-bold text-slate-500">Location</span>
                <span className="font-extrabold text-ink">{contact.location}</span>
              </span>
            </div>
          </div>
          <a
            href={`mailto:${contact.email}?subject=Portfolio%20Inquiry%20for%20Krishna`}
            className="focus-ring action-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-field"
          >
            Send a Message <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-semibold">© 2026 Krishna. Website & Digital Solutions Developer.</p>
        <div className="flex items-center gap-4 text-white/70">
          <a href={`mailto:${contact.email}`} className="focus-ring rounded-md hover:text-white" aria-label="Email Krishna">
            <Mail size={20} />
          </a>
          <a href="#freelance" className="focus-ring rounded-md hover:text-white" aria-label="View website references">
            <Github size={20} />
          </a>
          <a href="#home" className="focus-ring rounded-md hover:text-white" aria-label="Back to top">
            <Globe2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Tooling />
        <Experience />
        <ClientWorkflow />
        <Projects />
        <FreelanceWebsites />
        <Capabilities />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

