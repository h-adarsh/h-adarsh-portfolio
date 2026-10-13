export const personalInfo = {
  name: "Adarsh Singh",
  monogram: "/adarsh",
  role: "Software Engineer | AI & Security",
  tagline: "Autonomous AI agents, human-in-the-loop security architectures, and resilient systems.",
  location: "Kolkata, India",
  status: {
    available: true,
    text: "Ex-InfoSec Intern @ Titan (Jan – Aug 2026)",
    dotColor: "bg-emerald-500",
  },
  bio: [
    "I'm a software engineer specializing in AI systems and application security. Completed a 7-month internship at Titan Company Limited (12 Jan 2026 – 10 Aug 2026), engineering browser RPA tooling, vulnerability intelligence engines, and internal LLM gateways.",
    "Currently building autonomous AI agents with human-in-the-loop verification, sandbox container isolation, and defense-in-depth security pipelines.",
  ],
  quote: {
    text: "Security is always excessive until it's not enough.",
    author: "Robbie Sinclair",
  },
  email: "adarsh042021@outlook.com",
  phone: "+91 7439473588",
  github: "https://github.com/h-adarsh",
  linkedin: "https://www.linkedin.com/in/h-adarsh/",
  resumeUrl: "/adarsh_cv.pdf",
  certificateUrl: "/titan_internship_certificate.pdf",
  certificateImage: "/titan_internship_certificate.png",
};

export const experiences = [
  {
    role: "Software & Security Engineering Intern",
    company: "Titan Company Limited",
    location: "Bengaluru, India",
    period: "12 Jan 2026 — 10 Aug 2026",
    duration: "7 months (Completed)",
    type: "Completed",
    hasCertificate: true,
    certificateUrl: "/titan_internship_certificate.pdf",
    certificateImage: "/titan_internship_certificate.png",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "Playwright", "TanStack Virtual", "BullMQ", "Zustand", "Docker"],
    achievements: [
      {
        title: "WAF Request Automation Tool",
        description: "Cut first-run compliance cycles across 170+ WAF-protected domains from 3–4 hours to 45–60 minutes. Built a headless Playwright/Node.js automation engine with saved SSO session reuse, dynamic virtualized dropdown discovery, idempotent retry safety, and CSV audit logging (run 2x/month).",
      },
      {
        title: "VAPT Assessment Portal",
        description: "Reduced report generation time from 7 hours to <1 hour by architecting an enterprise portal replacing manual Excel workflows across 5 assessment types with a 14-table data model. Integrated an internal LLM gateway (JWT auto-refresh) to auto-populate CVSS/CWSS scores and remediation narratives, backed by append-only audit tables and async PDF reporting via BullMQ.",
      },
      {
        title: "Large-Scale Data Diffing Dashboard",
        description: "Replaced manual Excel comparisons by engineering a virtualized React/Node dashboard classifying 396,000+ AWS Inspector findings into New, Common, and Resolved states. Resolved scientific notation account ID collisions, generated in-memory per-account Excel reports, and automated email delivery via Microsoft Graph API.",
      },
    ],
  },
];

export const projects = [
  {
    id: "adarshclaw",
    title: "Adarshclaw — Human-in-the-loop AI Assistant",
    category: "opensource",
    categoryLabel: "Autonomous AI Agent",
    date: "Oct 2026",
    summary: "Secure AI coding assistant supporting autonomous task execution, codebase analysis, and isolated web research featuring human-in-the-loop approvals and Telegram control.",
    problem: "Autonomous AI coding agents risk executing untrusted shell commands or destructive file mutations directly on host machines.",
    whatIBuilt: "A secure AI coding assistant supporting autonomous task execution, codebase analysis, and isolated web research featuring human-in-the-loop approvals and Telegram remote control.",
    highlights: [
      "Architected defense-in-depth isolation, routing AI shell execution into network-disabled Docker containers (oven/bun:1) with dropped Linux capabilities and post-execution diff snapshots.",
      "Integrated a secondary AI verification agent to automatically audit staged mutations for prompt injection defense.",
      "Enforces strict tool isolation policies, human-in-the-loop verification, and 10-minute task runtime locks.",
    ],
    result: "Zero unauthorized host filesystem mutations with isolated execution and cryptographic diff auditing.",
    techStack: ["TypeScript", "Node.js", "Bun", "Vercel AI SDK", "Docker"],
    github: "https://github.com/h-adarsh",
    isEnterprise: false,
    featured: true,
  },
  {
    id: "vapt-portal",
    title: "VAPT Assessment Portal",
    category: "enterprise",
    categoryLabel: "Enterprise Security",
    date: "May 2026",
    company: "Titan Company Ltd.",
    summary: "Full-stack enterprise platform that replaces spreadsheet-based security assessments with an AI-assisted, audit-tracked workflow, from raw findings to a client-ready report.",
    problem: "Security assessments across five categories (web, mobile, thick client, network, AI/LLM) were fragmented across disconnected Excel spreadsheets. Testers rewrote the same scoring, impact and remediation text by hand for every finding, turnaround was slow, and there was no unified audit trail.",
    whatIBuilt: "A full-stack workflow platform where testers log findings with notes and PoC screenshots, review AI-generated enrichment, and export a report, with every change auditable.",
    highlights: [
      "Data model: Architected a 14-table relational schema (Prisma + MySQL) supporting 5 assessment categories, with append-only audit logs for compliance-grade traceability.",
      "Multimodal AI enrichment: Integrated Titan's internal LLM gateway (JWT auto-refresh) to turn tester notes and PoC screenshots (Burp, terminal, browser) into CVSS v3.1 vectors, CWSS, CWE mapping, impact and remediation narratives.",
      "Three-action AI contract: Separate generate, regenerate and rescore flows, so rewording a finding never silently changes its scores.",
      "Hallucination control: Assessment-type-specific methodology grounding (OWASP WSTG, MASTG, LLM Top 10, PTES), trusted-domain-only references, and a strict JSON output contract.",
      "Human-in-the-loop: Per-finding review with severity lock, so testers stay accountable for the final report. Malformed AI output never blocks saving.",
      "Async report pipeline: PDF generation and background jobs run through BullMQ and Redis, keeping heavy work off the request path.",
      "API hardening: Zod validation at the API boundary enforces limits such as the 30-finding cap server-side.",
    ],
    result: "Reduced comprehensive security assessment report generation time from 7 hours to under 1 hour.",
    operations: "Production internal platform",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "BullMQ", "Redis"],
    isEnterprise: true,
    featured: true,
  },
  {
    id: "data-diffing-dashboard",
    title: "Large-Scale Data Diffing Dashboard",
    category: "enterprise",
    categoryLabel: "Cloud Security Intelligence",
    date: "Mar 2026",
    company: "Titan Company Ltd.",
    summary: "React and Node.js security dashboard replacing manual spreadsheet comparisons by diffing 396,000+ AWS Inspector findings into New, Common, and Resolved views.",
    problem: "AWS Inspector exports have hundreds of thousands of rows and no history. Analysts could not tell what was new, what was already there, or what had been fixed, making reporting to cloud account owners manual and error-prone.",
    whatIBuilt: "A high-performance React and Node.js dashboard, built with AI assistance, where analysts upload previous and current scans for instant automated comparison.",
    highlights: [
      "Virtualized rendering (TanStack Virtual) drawing only visible rows so 396,000+ rows stay fluid and responsive in the browser.",
      "Fixed a critical parsing bug where two AWS account IDs shown in scientific notation appeared identical and merged, which previously hid one account's findings.",
      "In-memory Excel report generator creating per-account reports and emailing them to account owners via Microsoft Graph API (tested end-to-end).",
      "Maintains a comprehensive session log of all dispatched reports.",
    ],
    result: "Replaces manual Excel comparisons by categorizing 396,000+ findings across two scans into New, Common, and Resolved in a single unified view.",
    operations: "Working internal tool (login not yet added).",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Zustand", "TanStack Virtual", "TanStack Table", "SheetJS", "Microsoft Graph API", "Azure AD"],
    isEnterprise: true,
    featured: true,
  },
  {
    id: "waf-automation",
    title: "WAF Request Automation Tool",
    category: "enterprise",
    categoryLabel: "Browser Automation",
    date: "Feb 2026",
    company: "Titan Company Ltd.",
    summary: "Headless browser tool in Node.js and Playwright eliminating manual report downloads and SwyftComply requests across 170+ WAF-protected domains.",
    problem: "Security analysts had to go through each of the 170+ domains in the WAF portal by hand: downloading current reports, starting SwyftComply requests, and returning 72 hours later to re-download reports across all domains to verify if fixes were made.",
    whatIBuilt: "A headless browser tool in Node.js and Playwright, built with AI assistance, that operates autonomously through every domain once started.",
    highlights: [
      "First run: autonomously downloads each domain's report, starts the SwyftComply request, and advances to the next domain.",
      "Follow-up run (72 hours later): re-downloads reports for delta comparison against the initial baseline to confirm fixes.",
      "Session persistence: reuses saved single sign-on (SSO) session state, avoiding per-domain re-authentication.",
      "Dynamic dropdown discovery: reads every domain from the portal's virtualized dropdown, which loads only a few items at a time.",
      "Idempotent & safe: automatically detects and skips domains that are already requested or unsupported for safe re-runs.",
      "Audit traceability: writes every execution outcome to a persistent CSV log for post-run verification.",
    ],
    result: "Cut the first-run process (downloading reports and starting SwyftComply requests) across 170+ WAF-protected domains from about 3–4 hours to about 45 minutes to 1 hour.",
    operations: "Started manually by the security team twice a month.",
    techStack: ["Node.js", "Playwright", "JavaScript", "CSV Logging"],
    isEnterprise: true,
    featured: true,
  },
  {
    id: "sniply",
    title: "Snip.ly — URL Shortener",
    category: "opensource",
    categoryLabel: "Edge Systems",
    date: "Oct 2025",
    summary: "Serverless URL redirection service on Cloudflare Workers and D1 with SSRF hardening, destination-host validation, and jose JWT verification.",
    detailedDescription: "Built a serverless URL redirection service on Cloudflare Workers (V8 isolates) and D1 (edge SQLite), delivering sub-50ms redirects at the edge. Hardened the API against SSRF with destination-host validation (blocking localhost, loopback, and RFC 1918 private IP ranges), origin-allowlisted CORS with Vary: Origin, and JWT verification via jose (Web Crypto).",
    techStack: ["React", "Vite", "Tailwind CSS", "Cloudflare Workers", "D1 (SQLite)", "JWT"],
    github: "https://github.com/h-adarsh",
    isEnterprise: false,
    featured: true,
  },
  {
    id: "gemini-summarizer",
    title: "Gemini AI Summarizer",
    category: "opensource",
    categoryLabel: "Chrome Extension",
    date: "Aug 2025",
    summary: "Chrome Extension leveraging Google Gemini API for instant summarization of long-form articles and technical papers.",
    detailedDescription: "A developer and researcher utility supporting dark mode, text-to-speech audio playback, and one-click export into clean Markdown notes.",
    techStack: ["JavaScript (ES6+)", "Chrome Extension APIs", "Gemini API", "HTML5/CSS3"],
    github: "https://github.com/h-adarsh/Gemini-AI-Summarizer",
    isEnterprise: false,
    featured: false,
  },
  {
    id: "arcane-pass",
    title: "Arcane Pass CLI",
    category: "opensource",
    categoryLabel: "CLI & Security",
    date: "Sep 2025",
    summary: "Serverless CLI password manager with client-side AES-256 encryption for rapid terminal-based credential access.",
    detailedDescription: "Engineered a serverless CLI tool with local-first architecture, zero external tracking, and developer-friendly terminal keybindings for secret management.",
    techStack: ["Node.js", "CLI", "AES-256", "Serverless"],
    github: "https://github.com/h-adarsh/arcane-pass-cli",
    isEnterprise: false,
    featured: false,
  },
];

export const certifications = [
  {
    title: "OCI 2025 Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    badge: "Verified",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=96B229F237705E21F5D15478CC688CAEC1A522822C62BA1F4095945F9E60CACD",
    verified: true,
  },
  {
    title: "OCI 2025 Certified Developer Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    badge: "Verified",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D46BCF46E94E211952251EAF8445DE1B0F5F18A7B2D95C11FE8F95B999E285A8",
    verified: true,
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Apr 2026",
    badge: "Verified",
    url: "https://verify.skilljar.com/c/iunfncmqju2g",
    verified: true,
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Mar 2026",
    badge: "Verified",
    url: "https://verify.skilljar.com/c/y4m5vtns2okn",
    verified: true,
  },
  {
    title: "Titan Internship Certificate",
    issuer: "Titan Company Ltd",
    date: "Jan – Aug 2026",
    badge: "Verified",
    url: "/titan_internship_certificate.pdf",
    verified: true,
    fullWidth: true,
  },
];

export const techKit = [
  {
    category: "Core Languages",
    items: ["C/C++", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frameworks & AI",
    items: ["React", "Vercel AI SDK", "Node.js", "Express.js", "Bun", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Security & Operations",
    items: ["AppSec & VAPT", "Human-in-the-loop AI", "WAF RPA", "CVSS/CWSS", "Docker Sandboxing", "SSRF Hardening"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "SQLite (D1)", "Prisma ORM", "BullMQ", "Docker", "Cloudflare Workers", "Linux"],
  },
];

export const writings = [
  {
    id: "proxies-loadbalancers",
    title: "Proxies and Load Balancers: What's the Difference?",
    readTime: "4 min read",
    date: "Feb 2026",
    summary: "How large scale services handle massive traffic while keeping data secure: forward proxy for clients, reverse proxy for origins, and load balancers for resilience.",
    content: `Ever wondered how large websites handle massive traffic and keep your data secure at the same time? The answer lies in three distinct infrastructure layers: forward proxy, reverse proxy, and load balancer.

### Forward Proxy (Protecting Clients)
A forward proxy sits between your internal device and the external internet. Requests pass through this layer before reaching any external website. Security teams use it to enforce corporate access policies, inspect outbound traffic for data leakage, block malicious domains, and cache frequently fetched content.

### Reverse Proxy (Protecting Servers)
A reverse proxy works from the other side: it sits in front of backend server fleets and intercepts incoming traffic. Instead of exposing individual services or internal IP addresses directly to the open web, all traffic hits the reverse proxy first. This layer handles:
- SSL/TLS termination and certificate renewal
- DDoS rate-limiting and WAF inspection
- Intelligent URL rewrite and path-based routing
- Edge caching of static responses

### Load Balancing (Ensuring Resilience)
Load balancers distribute traffic across multiple healthy servers to prevent hotspots and failovers. Cloud load balancers balance global ingress, while internal reverse proxies handle granular routing based on headers, cookies, or session affinity.

In short: Forward proxies shield clients; reverse proxies protect infrastructure; load balancers keep systems resilient.`,
  },
  {
    id: "borg-to-k8s",
    title: "From Borg to Kubernetes: Journey to a Cloud Standard",
    readTime: "5 min read",
    date: "Jan 2026",
    summary: "How Google's internal Borg system gave birth to Kubernetes, and why container orchestration became the backbone of modern infrastructure.",
    content: `Before containers became ubiquitous, running web scale software meant provisioning bulky Virtual Machines (VMs). While hypervisors provided isolation, they were resource-heavy, slow to boot, and cumbersome to scale dynamically.

### The Container Revolution
Docker popularized containers by packaging applications and their runtime dependencies directly atop the host kernel. But running isolated containers is easy; orchestrating thousands of interdependent microservices across hundreds of physical nodes is a different challenge entirely.

### Enter Borg and Kubernetes
Google had solved this internally years prior with **Borg**—a cluster management system running hundreds of thousands of jobs across fleets of machines. In 2014, Google took the architectural lessons from Borg and designed **Kubernetes** as an open-source standard, donating it to the Cloud Native Computing Foundation (CNCF).

### Core Problems Kubernetes Solves:
- **Declarative Desired State**: You describe what should run; K8s reconciliation loops ensure it stays running.
- **Self-Healing**: Automatically restarts crashed containers and reschedules pods when a node dies.
- **Service Discovery & Ingress**: Integrated DNS and internal load balancing.
- **Automated Rollouts & Canaries**: Zero-downtime updates with automated rollbacks upon health failure.

Today, Kubernetes is the undisputed operating system of the cloud.`,
  },
  {
    id: "encryption-vs-hashing",
    title: "Encryption vs Hashing: How Secure Systems Decide",
    readTime: "4 min read",
    date: "Dec 2025",
    summary: "Encryption protects confidentiality so authorized parties can read data. Hashing guarantees integrity so you know data hasn't been altered.",
    content: `A frequent question in application security is when to encrypt versus when to hash. While both are cryptographic operations, they serve fundamentally opposite operational goals.

### Encryption: Two-Way Confidentiality
Encryption is reversible. It takes plaintext and transforms it into ciphertext using an encryption algorithm and a secret key:
- **Symmetric (AES-256)**: Single shared key used for both encryption and decryption. Ideal for bulk database fields, file storage, and disk encryption.
- **Asymmetric (RSA, ECC)**: Public key for encryption, private key for decryption. Used in TLS handshakes and digital signatures.

Use encryption when the data must be read again by an authorized user (e.g., stored credentials, payment records, session payloads).

### Hashing: One-Way Integrity & Passwords
Hashing is irreversible. A hash function takes arbitrary input and produces a fixed-length mathematical fingerprint. Even changing a single character produces an entirely different hash (avalanche effect).
- **Integrity**: SHA-256 for checking file checksums and git commit hashes.
- **Passwords**: Salted, deliberately slow key-derivation algorithms like **bcrypt**, **Argon2**, or **scrypt** to protect against GPU brute-force attacks.

**Rule of thumb**: If you ever need to retrieve the original value, encrypt it. If you only ever need to verify a match, hash it.`,
  },
];
