export const portfolioData = {
  hero: {
    name: 'Muhammad Umair Ahmed',
    title: 'Product Manager · Product Owner · Business Analyst',
    tagline: 'Fintech & Payments, SaaS, WaaS & RaaS · Analytical & Entrepreneurial',
    roles: ['Product Manager', 'Product Owner', 'Business Analyst', 'Associate PM', 'Product Analyst'],
    cta: 'View My Work',
    resume: '/resume.pdf',
  },

  summary: {
    title: 'Professional Summary',
    description:
      'Analytical and entrepreneurial product professional working across Product Manager, Product Owner, and Business/Product Analyst functions — delivering end-to-end fintech and SaaS products across payments, EMI, and digital banking. Launched Tap-to-Pay (NFC) and EMI Business Account — scalable solutions that generated £30K revenue within the first month. Comfortable owning a roadmap end-to-end as a PM, running backlog and delivery as a PO, or driving requirements and data analysis as a BA — turning complex problems into simple, scalable solutions by collaborating with Design, Engineering, and Operations. Proven track record in data-informed product decisions, user testing, roadmap strategy, and cross-functional stakeholder management in fast-paced Agile environments.',
    kpis: [
      { value: '2+', label: 'Years Experience' },
      { value: '£30K', label: 'Revenue in Month 1' },
      { value: '100%', label: 'On-Schedule Delivery' },
    ],
  },

  experience: [
    {
      company: 'ACE Union',
      role: 'Product Officer',
      duration: '2025 – Present',
      location: 'Manchester, UK',
      description:
        'A hybrid Product Manager / Product Owner / Business Analyst function — owning roadmap strategy and go-to-market as a PM, running backlog and delivery through Agile squads as a PO, and authoring BRDs, PRDs, and acceptance criteria as a BA, for fintech products across payments and digital banking.',
      achievements: [
        'Owned end-to-end product strategy, roadmap, innovation, feature planning and smooth implementation for EMI Business Account — a scalable fintech solution delivering Faster Payments, Dynamic QR, Direct Debits, Contactless Payments, and Cross-Border Transfers, shipped on schedule',
        'Spearheaded Tap-to-Pay (NFC) product launch enabling merchants to accept contactless transactions; designed pricing strategy generating £30K revenue within the first month',
        'Gathered and analysed user feedback, market insights, and competitor data to inform product roadmap priorities and identify scalable solution opportunities',
        'Authored clear product requirements — BRDs, PRDs, and user stories — with precise acceptance criteria, reducing development rework and improving sprint clarity across engineering teams',
        'Collaborated with Design, Engineering, Compliance, and Operations to deliver initiatives from concept to launch, managing external partner integrations end-to-end',
        'Conducted user testing and iterated on features based on results, tracking progress and presenting outcomes to global stakeholders across teams',
        'Drove data-informed product decisions by analysing customer behaviour, funnel performance, and retention data, improving ARPU, reducing churn, and optimising CAC efficiency',
        'Received regular structured feedback to accelerate development and improve cross-functional collaboration within Agile squads',
      ],
      tech: ['Product Strategy', 'Roadmapping', 'BRD/PRD/User Stories', 'User Testing', 'Data Analysis', 'Fintech', 'Agile/Scrum', 'Stakeholder Management'],
    },
    {
      company: 'Goflare',
      role: 'Project Coordinator',
      duration: '2023 – 2024',
      location: 'Jhelum, PK',
      description:
        'Supported senior stakeholders across product strategy, project planning, and delivery — the requirements-gathering, documentation, and stakeholder-alignment backbone of a Business Analyst / Product Owner function, across multiple concurrent initiatives.',
      achievements: [
        'Supported senior stakeholders with product strategy, project planning, coordination, and execution across multiple concurrent initiatives, ensuring alignment with business objectives and delivery timelines',
        'Coordinated cross-functional teams across technical and business units, improving project delivery timelines and ensuring on-time execution through effective planning and progress tracking',
        'Gathered and analysed project data, stakeholder feedback, and operational metrics to support decision-making and identify process improvement opportunities',
        'Documented project requirements, maintained project records, and tracked implementation progress, facilitating communication between technical and non-technical stakeholders',
        'Identified delivery risks and implemented mitigation plans, keeping initiatives on roadmap schedule and reducing project delays',
        'Prepared structured project status updates and presented progress reports to stakeholders, improving project visibility and supporting informed decision-making',
      ],
      tech: ['Project Coordination', 'Stakeholder Management', 'Risk Management', 'Cross-functional Teams', 'Process Tracking'],
    },
    {
      company: 'Acquity Software',
      role: 'Web Developer',
      duration: '2022 – 2023',
      location: 'Jhelum, PK',
      description:
        'Built the technical foundation that now underpins every product role above — enough hands-on frontend and systems fluency to translate business requirements into feasible specs and hold a credible technical conversation with Engineering.',
      achievements: [
        'Developed and maintained frontend web applications, building a strong foundation in responsive design, user interface development, and modern web technologies',
        'Collaborated with product and design teams to implement UI features, translating wireframes and design mockups into functional, responsive, and user-friendly interfaces',
        'Conducted frontend testing, debugging, and performance optimisation, supporting release cycles and contributing to a seamless user experience across web applications',
      ],
      tech: ['Frontend Development', 'Responsive Design', 'UI Implementation', 'Testing & Debugging'],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // PROJECTS / WORK SAMPLES
  // ─────────────────────────────────────────────────────────────────────────
  // How to add your own work here:
  // 1. Drop the actual file (PDF, PPTX, PNG, DOCX, ZIP, etc.) into:
  //      /public/projects/
  //    e.g. /public/projects/emi-business-account-prd.pdf
  // 2. Copy one of the objects below and edit the fields:
  //      - title, category, description, tags  -> just text, edit freely
  //      - image        -> optional thumbnail, path inside /public/projects
  //                         (leave null to show an auto-generated placeholder)
  //      - links.live       -> a live product / demo URL (or null)
  //      - links.caseStudy  -> a link to a Notion/Medium/Figma write-up (or null)
  //      - links.github     -> a repo link (or null)
  //      - file.path    -> "/projects/your-file-name.pdf"  (must match the
  //                         file you placed in /public/projects)
  //      - file.label   -> text shown on the download button, e.g.
  //                         "Download PRD (PDF)" or "Download Case Study"
  //    Set file to null if there's nothing to download for that project.
  // 3. Delete the two placeholder entries once you've replaced them with
  //    your real work, or just keep adding new objects below them.
  // ─────────────────────────────────────────────────────────────────────────
  projects: [
    {
      title: 'ACE Union Product Dashboard — Business Requirements Document',
      category: 'Fintech · Business Requirements Document',
      description:
        'BRD for a unified Product Dashboard at ACE Union, consolidating accounts, transactions, and competitor data into one platform — covering customer lifecycle tracking, termination forecasting (CAGR, growth rate, linear & regression models), and pricing optimisation.',
      image: '/projects/ace-union-product-dashboard-brd-preview.jpg',
      tags: ['BRD', 'Fintech', 'Data & Analytics', 'Pricing Strategy'],
      links: {
        live: null,
        caseStudy: null,
        github: null,
      },
      file: {
        path: '/projects/ace-union-product-dashboard-brd.docx',
        label: 'Download BRD (DOCX)',
      },
      featured: true,
    },
    {
      title: 'Yonna Wallet — Personal Account Overview',
      category: 'Fintech · Product One-Pager',
      description:
        'Product overview for Yonna Wallet, a cross-border wallet built for African payment corridors — unifying QR payments, live FX exchange, multi-country wallet-to-wallet transfers, and physical card issuance into one platform.',
      image: '/projects/yonna-wallet-preview.jpg',
      tags: ['Wallet', 'Cross-Border', 'FX', 'Card Issuance'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/yonna-wallet-personal-account-overview.docx', label: 'Download Overview (DOCX)' },
      featured: true,
    },
    {
      title: 'Churn & Retention Dashboard — BRD',
      category: 'Fintech · Business Requirements Document',
      description:
        'BRD for a centralised customer-lifecycle analytics layer giving Product, Growth, and Leadership a real-time, cohort-driven view of how customers acquire, activate, engage, disengage, and return across a UK EMI\u2019s payments, transfers, cards, and wallet ecosystem.',
      image: '/projects/churn-retention-brd-preview.jpg',
      tags: ['BRD', 'Churn & Retention', 'Cohort Analytics', 'Fintech'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/churn-retention-dashboard-brd.docx', label: 'Download BRD (DOCX)' },
      featured: true,
    },
    {
      title: 'Consumer Onboarding Event Mapping',
      category: 'Analytics · Event Tracking Spec',
      description:
        'Full analytics event registry for a consumer onboarding & KYC flow — 198 tracked events across 28 screens, each mapped to trigger, properties, and implementation status, used to align Product and Engineering on measurement before build.',
      image: '/projects/event-mapping-preview.jpg',
      tags: ['Event Tracking', 'Analytics', 'Onboarding', 'KYC'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/consumer-onboarding-event-mapping.xlsx', label: 'Download Event Map (XLSX)' },
      featured: false,
    },
    {
      title: 'Forward Contracts — FX Hedging for UK SMEs',
      category: 'Fintech · Product One-Pager',
      description:
        'One-pager proposing Forward Contracts for UK SMEs exposed to FX volatility — 54% of UK SMEs report FX losses averaging £53K a year. Scopes a plain-English \u2018lock your rate\u2019 experience built on Corpay\u2019s Forward Contract API with flexible drawdown.',
      image: '/projects/forward-contract-preview.jpg',
      tags: ['FX Hedging', 'SME Banking', 'Product Strategy'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/forward-contracts-fx-hedging-one-pager.docx', label: 'Download One-Pager (DOCX)' },
      featured: true,
    },
    {
      title: 'Go-Live Plan — Payments MVP Launch',
      category: 'Product · Launch Planning',
      description:
        'Cross-functional go-live plan coordinating Product, Engineering, Compliance, and Operations for an MVP launch covering Faster Payments, BACS, Standing Orders, and card acquiring (Debit, Apple/Google Pay) — tracking readiness from UAT through to production.',
      image: '/projects/go-live-plan-preview.jpg',
      tags: ['Launch Planning', 'Payments', 'Cross-Functional'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/go-live-plan-payments-mvp.docx', label: 'Download Go-Live Plan (DOCX)' },
      featured: false,
    },
    {
      title: 'Monthly Task Closing Report — May 2026',
      category: 'Product · Delivery Tracking',
      description:
        'Monthly closing report for the Product Department tracking every deliverable across Product, Finance, and Compliance — status, ownership, and outcomes for the reporting cycle, used to close the loop with leadership each month.',
      image: '/projects/may-closing-report-preview.jpg',
      tags: ['Reporting', 'Delivery Tracking', 'Product Ops'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/may-2026-task-closing-report.xlsx', label: 'Download Report (XLSX)' },
      featured: false,
    },
    {
      title: 'UK EMI Multi-Director Onboarding & KYC/AML Research',
      category: 'Research · Regulatory & UX Analysis',
      description:
        'Comparative research into how five leading UK-regulated EMIs (Wise, Revolut, Tide, Soldo, Payoneer) onboard limited companies with multiple directors — analysed against FCA rules, MLR 2017, JMLSG guidance, and the PSC regime to surface UX and compliance gaps.',
      image: '/projects/multi-director-research-preview.jpg',
      tags: ['Competitive Research', 'KYC/AML', 'Regulatory', 'UX Analysis'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/uk-emi-multi-director-onboarding-research.docx', label: 'Download Report (DOCX)' },
      featured: true,
    },
    {
      title: 'Pakistan Digital Payments — EMI & MFB Fee Benchmark',
      category: 'Research · Market & Pricing Analysis',
      description:
        'Market and fee-structure benchmark across Pakistan\u2019s digital payments landscape (NayaPay, SadaPay, JazzCash, Easypaisa) — mapping the complete wallet transaction universe and comparing account, funding, and transfer fees between EMI and MFB-led ecosystems.',
      image: '/projects/pakistan-emi-research-preview.jpg',
      tags: ['Market Research', 'Pricing Strategy', 'Fintech', 'Pakistan'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/pakistan-emi-mfb-fee-benchmark.xlsx', label: 'Download Research (XLSX)' },
      featured: true,
    },
    {
      title: 'Q1 2026 Progress Report — Product Department',
      category: 'Product · Quarterly Reporting',
      description:
        'Quarterly report on the Product Department\u2019s strategic vision of customer-behaviour-led optimisation — summarising foundational feature delivery, friction points resolved across consumer and business touchpoints, and the pipeline entering Q2.',
      image: '/projects/q1-progress-report-preview.jpg',
      tags: ['Quarterly Reporting', 'Product Strategy', 'Stakeholder Comms'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/q1-2026-product-progress-report.docx', label: 'Download Report (DOCX)' },
      featured: false,
    },
    {
      title: 'Product Roadmap 2026 — Consumer & Business',
      category: 'Product · Roadmapping',
      description:
        'Executive-view roadmap spanning Q2\u2013Q4 2026 across consumer and business swimlanes, with a companion \u2018Why This Timeline\u2019 document justifying each initiative\u2019s estimated duration by technical complexity, dependencies, and regulatory risk.',
      image: '/projects/roadmap-2026-preview.jpg',
      tags: ['Roadmapping', 'Prioritisation', 'Stakeholder Comms'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/product-roadmap-2026.xlsx', label: 'Download Roadmap (XLSX)' },
      featured: true,
    },
    {
      title: 'Stripe Issuing — End-to-End Implementation Guide',
      category: 'Product · Technical Implementation',
      description:
        'A 26-step, 6-phase implementation framework for launching Stripe Issuing inside a UK EMI — covering setup, technical integration, FCA-relevant compliance controls, and ongoing card programme management.',
      image: '/projects/stripe-issuing-preview.jpg',
      tags: ['Card Issuing', 'Stripe', 'Technical Spec', 'Compliance'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/stripe-issuing-e2e-implementation-guide.docx', label: 'Download Guide (DOCX)' },
      featured: true,
    },
    {
      title: 'Tap-to-Pay QA Testing Report',
      category: 'QA · Multi-Environment Issue Tracking',
      description:
        'Multi-environment QA report for a Tap-to-Pay (NFC) rollout, tracking issue volume across Pre, Staging, and Production by department — showing the defect count drop from 63 in Pre to just 2 in Production ahead of go-live.',
      image: '/projects/testing-report-preview.jpg',
      tags: ['QA', 'Testing', 'Tap-to-Pay', 'Issue Tracking'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/tap-to-pay-qa-testing-report.xlsx', label: 'Download Report (XLSX)' },
      featured: false,
    },
    {
      title: 'UAT Test Cases — Payroll Onboarding',
      category: 'QA · Test Case Design',
      description:
        'Structured UAT test case set for a business payroll onboarding flow — covering KYB document upload, validation, and missing-document handling, with expected results defined for each scenario before sign-off.',
      image: '/projects/uat-test-cases-preview.jpg',
      tags: ['UAT', 'Test Cases', 'KYB', 'Payroll'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/uat-test-cases-payroll-onboarding.xlsx', label: 'Download Test Cases (XLSX)' },
      featured: false,
    },
    {
      title: 'UK EMI Lending Landscape & Shariah Assessment',
      category: 'Research · Regulatory & Market Analysis',
      description:
        'Assessment of which UK Electronic Money Institutions offer lending or credit, mapping direct, partner-led, and no-lending models across providers including Monese, PayPal UK, Stripe Payments UK, and Tide — plus a dedicated review of Shariah-compliant lending options.',
      image: '/projects/uk-lending-landscape-preview.jpg',
      tags: ['Regulatory Research', 'Lending', 'Shariah Compliance', 'EMI'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/uk-emi-lending-landscape-shariah-assessment.docx', label: 'Download Report (DOCX)' },
      featured: false,
    },
    {
      title: 'Personal Task & Delivery Tracker',
      category: 'Product · Personal Productivity System',
      description:
        'A self-managed delivery tracker spanning 37 tasks across Testing, Finance, and Compliance workstreams — logging status, priority, and progress with a 76% completion rate, reflecting day-to-day execution discipline behind the other artefacts here.',
      image: '/projects/task-tracker-preview.jpg',
      tags: ['Personal Ops', 'Delivery Tracking', 'Prioritisation'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/personal-task-delivery-tracker.xlsx', label: 'Download Tracker (XLSX)' },
      featured: false,
    },
    {
      title: 'Wallet-as-a-Service — Partnership Proposal',
      category: 'Fintech · Partnership Proposal',
      description:
        'Partnership proposal for a Wallet-as-a-Service platform offering infrastructure-grade embedded finance to regulated entities — enabling any EMI, fintech, or payment provider to deploy a fully branded, white-label digital wallet ecosystem.',
      image: '/projects/waas-proposal-preview.jpg',
      tags: ['Embedded Finance', 'WaaS', 'Partnerships', 'B2B Fintech'],
      links: { live: null, caseStudy: null, github: null },
      file: { path: '/projects/waas-partnership-proposal.docx', label: 'Download Proposal (DOCX)' },
      featured: true,
    },
  ],
  // ─────────────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
  // CERTIFICATIONS
  // ─────────────────────────────────────────────────────────────────────────
  // View-only: certifications are shown as click-to-view images (a modal/
  // lightbox), never as a direct download link. To add a new one: drop the
  // PDF and a preview image into /public/certifications/, then add an entry
  // below pointing `image` at the preview and `file` at the PDF.
  // ─────────────────────────────────────────────────────────────────────────
  certifications: [
    { title: 'Anti Bribery & Anti Corruption (Global)', issuer: 'Compliance Training', date: 'Jun 2025', score: '88.89%', image: '/certifications/anti-bribery-anti-corruption-global-preview.jpg', file: '/certifications/anti-bribery-anti-corruption-global.pdf' },
    { title: 'Anti Money Laundering & Counter Terrorist Financing', issuer: 'Compliance Training', date: 'Feb 2026', score: '93.33%', image: '/certifications/anti-money-laundering-counter-terrorist-financing-preview.jpg', file: '/certifications/anti-money-laundering-counter-terrorist-financing.pdf' },
    { title: 'Anti-Bribery & Anti-Corruption / Whistleblowing / Conflict of Interest', issuer: 'Compliance Training', date: 'May 2026', score: '100%', image: '/certifications/anti-bribery-anti-corruption-whistleblowing-coi-preview.jpg', file: '/certifications/anti-bribery-anti-corruption-whistleblowing-coi.pdf' },
    { title: 'APP Fraud Reimbursement — A Cross-Functional View', issuer: 'Compliance Training', date: 'Jul 2025', score: '93.33%', image: '/certifications/app-fraud-reimbursement-cross-functional-view-preview.jpg', file: '/certifications/app-fraud-reimbursement-cross-functional-view.pdf' },
    { title: "Financial Crime Prevention & Fraud Detection Y'26", issuer: 'Compliance Training', date: 'Mar 2026', score: '100%', image: '/certifications/financial-crime-prevention-fraud-detection-y26-preview.jpg', file: '/certifications/financial-crime-prevention-fraud-detection-y26.pdf' },
    { title: 'Fraud Prevention Presentation (Global)', issuer: 'Compliance Training', date: 'Jun 2025', score: '88.89%', image: '/certifications/fraud-prevention-presentation-global-preview.jpg', file: '/certifications/fraud-prevention-presentation-global.pdf' },
    { title: 'General Data Protection Regulation (GDPR) (EU)', issuer: 'Compliance Training', date: 'Jun 2025', score: '88.24%', image: '/certifications/gdpr-eu-preview.jpg', file: '/certifications/gdpr-eu.pdf' },
    { title: 'General Data Protection Regulation (GDPR)', issuer: 'Compliance Training', date: 'Jun 2026', score: '100%', image: '/certifications/gdpr-preview.jpg', file: '/certifications/gdpr.pdf' },
    { title: 'Information Security & Cyber Risk Awareness', issuer: 'Compliance Training', date: 'Jun 2025', score: '87.5%', image: '/certifications/information-security-cyber-risk-awareness-preview.jpg', file: '/certifications/information-security-cyber-risk-awareness.pdf' },
    { title: 'Preventing Financial Crime', issuer: 'Compliance Training', date: 'Jun 2025', score: '100%', image: '/certifications/preventing-financial-crime-preview.jpg', file: '/certifications/preventing-financial-crime.pdf' },
    { title: 'Sanctions', issuer: 'Compliance Training', date: 'Apr 2026', score: '100%', image: '/certifications/sanctions-preview.jpg', file: '/certifications/sanctions.pdf' },
    { title: 'Sanctions (Global)', issuer: 'Compliance Training', date: 'Jun 2025', score: '88.89%', image: '/certifications/sanctions-global-preview.jpg', file: '/certifications/sanctions-global.pdf' },
  ],
  // ─────────────────────────────────────────────────────────────────────────


  skills: {
    categories: [
      {
        title: 'Product Ownership',
        skills: [
          { name: 'Product Strategy & Roadmapping', proficiency: 90 },
          { name: 'Backlog & Feature Prioritisation', proficiency: 90 },
          { name: 'MVP Definition', proficiency: 85 },
          { name: 'Discovery & Delivery', proficiency: 85 },
          { name: 'OKRs / KPIs', proficiency: 85 },
          { name: 'Product Lifecycle Management', proficiency: 90 },
          { name: 'Scalable Solution Design', proficiency: 85 },
          { name: 'Go-to-Market Execution', proficiency: 85 },
        ],
      },
      {
        title: 'User Research & UX',
        skills: [
          { name: 'User Testing', proficiency: 90 },
          { name: 'User Feedback Analysis', proficiency: 90 },
          { name: 'Customer Behaviour Analysis', proficiency: 85 },
          { name: 'Funnel & Retention Analysis', proficiency: 85 },
          { name: 'Market Research', proficiency: 85 },
          { name: 'Competitor Benchmarking', proficiency: 85 },
          { name: 'Customer Experience Optimisation', proficiency: 85 },
        ],
      },
      {
        title: 'Cross-functional Collaboration',
        skills: [
          { name: 'Agile / Scrum', proficiency: 90 },
          { name: 'Sprint Planning', proficiency: 90 },
          { name: 'Stakeholder Management', proficiency: 90 },
          { name: 'BRDs / PRDs / User Stories', proficiency: 90 },
          { name: 'Concept-to-Launch Delivery', proficiency: 85 },
        ],
      },
      {
        title: 'Data & Analytics',
        skills: [
          { name: 'Data-informed Decision Making', proficiency: 85 },
          { name: 'ARPU & CAC Optimisation', proficiency: 80 },
          { name: 'Churn Reduction', proficiency: 80 },
          { name: 'KPI Definition & Tracking', proficiency: 85 },
          { name: 'Market Insights Analysis', proficiency: 85 },
        ],
      },
      {
        title: 'Tools & Technical',
        skills: [
          { name: 'Jira', proficiency: 90 },
          { name: 'Figma', proficiency: 80 },
          { name: 'Postman', proficiency: 75 },
          { name: 'Miro', proficiency: 80 },
          { name: 'A/B Testing', proficiency: 80 },
          { name: 'UAT & QA', proficiency: 90 },
          { name: 'System Architecture', proficiency: 75 },
          { name: 'Microsoft Office', proficiency: 87 },
        ],
      },
    ],
  },

  education: [
    {
      institution: 'University of Gujrat',
      degree: 'Bachelor of Science in Software Engineering',
      gpa: '3.39 / 4.0',
      graduationYear: 2025,
      details: 'Graduated: May 2025 · First-Class Equivalent (Pakistani grading scale)',
    },
    {
      institution: 'Govt Post Graduate College Jhelum',
      degree: 'FSC Pre-Engineering',
      gpa: null,
      graduationYear: 2021,
      details: 'Completed FSC Pre-Engineering (2019–2021)',
    },
  ],

  strengths: [
    {
      title: 'Problem Solver',
      description: 'Analytical approach to identifying and solving complex business challenges',
      icon: 'Lightbulb',
    },
    {
      title: 'Data Driven',
      description: 'Uses metrics and insights to inform strategic product decisions',
      icon: 'BarChart3',
    },
    {
      title: 'Team Player',
      description: 'Excellent collaborator who builds strong cross-functional relationships',
      icon: 'Users',
    },
    {
      title: 'Adaptable',
      description: 'Thrives in fast-paced, changing environments and evolving requirements',
      icon: 'Zap',
    },
    {
      title: 'Detail Oriented',
      description: 'Meticulous attention to quality, process consistency, and acceptance criteria',
      icon: 'CheckCircle2',
    },
    {
      title: 'Leadership',
      description: 'Natural ability to guide cross-functional teams and drive accountability',
      icon: 'Award',
    },
  ],

  contact: {
    email: 'umairahmed1317@gmail.com',
    phone: '+92 310 5876228',
    location: 'Jhelum, Pakistan',
    relocation: 'Open to relocate: UK · Poland · Portugal · Spain · UAE',
  },
}