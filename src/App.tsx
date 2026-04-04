import './App.css';

const NAV_LINKS = [
  'About',
  'Education',
  'Experience',
  'Projects',
  'Skills',
  'Contact',
];

const SKILLS = [
  {
    category: 'Languages',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Go',
      'Java',
      'Solidity',
      'Ruby',
      'C++',
      'SQL',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'GraphQL', 'tRPC', 'Django', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Zod'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Prisma', 'Kysely'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'AWS S3', 'Linux', 'VPS / Self-hosting', 'Git'],
  },
];

const EXPERIENCE = [
  {
    date: 'June — Sept 2023',
    role: 'Software Engineer Intern',
    company: 'Notifi Network · Seattle (Remote)',
    desc: 'Built a containerised development environment that let customers and internal developers pull a single Docker image and get a fully functional setup — no dependency management required. Implemented the authentication system for the container using Node.js, TypeScript, and GraphQL. Also designed and built a workflow for uploading and downloading parser modules to and from S3, enabling a clean distribution model for internal tooling. Participated in daily standups with a 15+ person engineering team.',
    tags: ['Node.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS S3', 'Bash'],
  },
  {
    date: 'Dec 2024 — Nov 2025',
    role: 'Freelance Software Engineer',
    company: 'Frequencia Avionics · Witham',
    desc: 'Sole developer on a bespoke CMS web application, taking it from design through to production. Built a full-stack Next.js app with a PostgreSQL database via Prisma, and a React frontend with TypeScript throughout. Deployed and maintained the application on a self-hosted VPS, which deepened my experience with Linux and server administration.',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'React',
      'Linux',
      'Self Hosting',
    ],
  },
];

const PROJECTS: {
  name: string;
  desc: string;
  tags: string[];
  href?: string;
}[] = [
  {
    name: 'Polymarket Analysis Bot',
    desc: 'A CLI tool (built with a friend) for scraping Polymarket prediction market data and surfacing trade suggestions based on historical trends. Uses a dependency-injection factory function architecture to keep the codebase testable and consistent across contributors.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    href: 'https://github.com/liam-michel/polymarket-bot/',
  },
  {
    name: 'Validated Form Library (validated-form)',
    desc: 'A React form library built with Typescript, Zod and React Hook Form. Intended to be a convenient drop-in solution for projects that need validated forms without the overhead of setting up the validation and form state management themselves. Built with a focus on type-safety and developer experience. Published to npm and open-sourced on GitHub.',
    tags: ['React', 'TypeScript', 'Zod', 'React Hook Form'],
    href: 'https://github.com/liam-michel/validated-form/',
  },
  {
    name: 'Gym Fitness App',
    desc: 'Led a seven-person team at university to build a Django web application that generates personalised workout routines based on user measurements and fitness goals. Responsible for distributing tasks and keeping the team on track throughout the project.',
    tags: ['Python', 'Django', 'MySQL'],
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">Liam Michel</span>
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="hero">
      <h1>Liam Michel</h1>
      <p className="hero-subtitle">Software Engineer</p>
      <p className="hero-bio">
        Software engineer with a preference for backend work. I build reliable,
        type-safe systems in TypeScript and Node.js, and I'm comfortable across
        the full stack when the project calls for it.
      </p>
      <div className="hero-links">
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
        <a href="#projects" className="btn btn-outline">
          View projects
        </a>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">// education</p>
      <ul className="experience-list">
        <li className="exp-item">
          <span className="exp-date">2020 — 2024</span>
          <div className="exp-content">
            <h3>BSc Computer Science — 1st Class Honours</h3>
            <p className="exp-company">University of Surrey</p>
            <a
              href="https://github.com/liam-michel/FYP-liquidity-pool"
              target="_blank"
              rel="noreferrer"
            >
              View dissertation code →
            </a>
            <p className="exp-desc">
              Dissertation (76%): designed and implemented an Ethereum ERC-20
              token liquidity pool in Solidity, integrated with a Chainlink
              oracle for real-time price feeds. The project explored how live
              price data can be used to rebalance pools and reduce impermanent
              loss exposure for liquidity providers.
            </p>
            <div className="tags">
              {['Solidity', 'Ethereum', 'Chainlink', 'Smart Contracts'].map(
                (t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">// experience</p>
      <ul className="experience-list">
        {EXPERIENCE.map((exp) => (
          <li key={exp.role} className="exp-item">
            <span className="exp-date">{exp.date}</span>
            <div className="exp-content">
              <h3>{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.desc}</p>
              <div className="tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">// projects</p>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-footer">
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.href && (
                <a href={p.href} className="project-link">
                  View code →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">// skills</p>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skills-group">
            <p className="skills-category">{group.category}</p>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">// contact</p>
      <div className="contact-inner">
        <p>
          Open to any opportunities or collaborations. Feel free to reach out.
        </p>
        <ul className="contact-links" style={{ marginTop: '28px' }}>
          <li>
            <a href="mailto:liamd_michel@hotmail.com" className="contact-link">
              <span className="contact-link-label">email</span>
              liamd_michel@hotmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/liam-michel"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-label">github</span>
              github.com/liam-michel
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-label">linkedin</span>
              https://www.linkedin.com/in/liam-michel-753438317/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Hero />
        <Education />
        <Skills />

        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="page">built with React + Vite</div>
      </footer>
    </>
  );
}

export default App;
