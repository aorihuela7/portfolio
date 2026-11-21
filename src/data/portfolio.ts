/**
 * ─────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *  Edit copy, links, metrics, media paths, and gallery captions here.
 *  To add a project: append an object to `projects` — its case-study
 *  page at /projects/<slug> is generated automatically.
 *  Inline formatting: **bold** and *italic*.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { CaseStudy, ProjectCategory, VisualKey } from "./types";

export { site, nav } from "./site";

/* ================================================================== */
/*  Hero                                                              */
/* ================================================================== */

export const hero = {
  code: "SYS.01",
  headline:
    "Building resilient software systems and tactile, human-centered interfaces.",
  intro:
    "I'm **Alejandro Orihuela**, an M.S. in Computer Science candidate at the **University of Chicago** specializing in Software Engineering, following a B.S. in Computer Science (HCI Specialization) and a B.A. with Honors in Latin American and Caribbean Studies. I bridge backend architecture, rapid hardware/software prototyping, and inclusive design to build tools people genuinely enjoy using.",
  location: {
    code: "LOC.01",
    city: "Chicago, IL",
    note: "Open to relocation & remote",
  },
  spec: {
    code: "EDU.27",
    rows: [
      { label: "Institution", value: "University of Chicago" },
      { label: "Degree", value: "M.S. CS '27 (4+1 MPCS)" },
      { label: "Focus", value: "Systems · HCI · Hardware" },
      { label: "Languages", value: "EN · ES · PT" },
    ],
    timeline: [
      { year: "2026", label: "B.S. CS + B.A. LACS", done: true },
      { year: "2027", label: "M.S. CS (MPCS)", done: false },
    ],
  },
};

/* ================================================================== */
/*  Research                                                          */
/* ================================================================== */

export const research: CaseStudy[] = [
  {
    slug: "andean-transit",
    code: "RES.01",
    eyebrow: "Featured HCI Research · Tinker Field Research Grant Scholar (2026)",
    title:
      "Architectures of Inclusion: A Comparative HCI Analysis of Digital Transit Accessibility in Lima, Bogotá, and Santiago",
    shortTitle: "Architectures of Inclusion",
    period: "2026",
    tags: [
      "HCI Research",
      "WCAG 2.2 Audits",
      "Payment Gateways",
      "Universal Design",
      "Urban Ethnography",
    ],
    summary:
      "Funded by the **Tinker Field Research Grant (2026)**, this comparative HCI study examines how the rapid digitization of public transit fare systems across the Andean region has created a paradox of **\"exclusionary modernity.\"** Combining **WCAG 2.2 technical audits** of official transit apps with **urban ethnography** and institutional complaint analysis, the research uncovers how rigid software architectures and payment gateways construct a \"digital wall\" for older adults, unbanked commuters, people with disabilities, and international users—proposing universal design frameworks to restore equitable mobility.",
    intro:
      "A field study across three Andean capitals asking a simple question with uncomfortable answers: when transit goes cashless, who gets left at the turnstile? Combining WCAG 2.2 audits, a standardized Foreign User Protocol, contextual inquiry in congested transit hubs, and institutional complaint data, the research shows how software decisions—not physical infrastructure—now decide who can ride and who pays more to do so.",
    facts: [
      { label: "Role", value: "Independent field researcher" },
      { label: "Funding", value: "Tinker Field Research Grant (2026)" },
      { label: "Fieldwork", value: "June – August 2026" },
      { label: "Cities", value: "Lima · Bogotá · Santiago" },
      { label: "Status", value: "Data consolidation & synthesis" },
    ],
    stack: [
      "WCAG 2.2",
      "Heuristic Evaluation",
      "VoiceOver / TalkBack",
      "Foreign User Protocol",
      "Contextual Inquiry",
      "NVivo",
      "Figma Journey Maps",
    ],
    cover: {
      src: "/assets/research/andean-transit/bogota-recharge-kiosk.jpg",
      alt: "A commuter using a red TransMilenio self-service recharge kiosk in Bogotá.",
      caption: "Self-service recharge kiosk, TransMilenio (Bogotá).",
      position: "center 30%",
    },
    visual: "transit",
    ctaLabel: "Read Full Research Case Study",
    blocks: [
      {
        type: "question",
        eyebrow: "Core Research Question",
        heading: "Who does a cashless transit system leave behind?",
        text: "How do software architectures and payment gateways in public transportation systems contribute to creating barriers of exclusion for non-traditional users in Lima, Bogotá, and Santiago?",
      },
      {
        type: "text",
        eyebrow: "Framing",
        heading: "The paradox of “exclusionary modernity”",
        paragraphs: [
          "Transit digitization is frequently engineered around a narrow persona: a **local, banked user with no functional limitations**. As cash payment points disappear in favor of closed mobile apps and personalized digital accounts, software design decisions—not physical infrastructure—begin dictating who can access basic mobility and fare subsidies.",
          "The fieldwork confirms that the rush toward cashless ecosystems is producing a kind of **“second-class citizenship” in public transit**, where urban mobility is bounded by the rigidity of code rather than the physical capacity of the network.",
        ],
      },
      {
        type: "table",
        eyebrow: "Comparative Scope",
        heading: "Three systems, three eras of modernization",
        columns: [
          "City & System",
          "Inaugurated",
          "Modernization Era",
          "Audited Digital Platforms",
          "Regulatory Authority",
        ],
        rows: [
          [
            "**Santiago** — Metro de Santiago",
            "1975",
            "Legacy rail-based metropolitan network",
            "*Red App* & automated kiosks",
            "**DTPM** (Directorio de Transporte Público Metropolitano)",
          ],
          [
            "**Bogotá** — TransMilenio",
            "2000",
            "Mature Bus Rapid Transit (BRT) backbone",
            "*TransMi App* & station recharge terminals",
            "**TransMilenio S.A.**",
          ],
          [
            "**Lima** — Metropolitano",
            "2010",
            "Newer BRT amid a cash-to-digital transition",
            "*Yape / Plin* recharge flows & station kiosks",
            "**ATU** (Autoridad de Transporte Urbano)",
          ],
        ],
      },
      {
        type: "list",
        eyebrow: "Methodology",
        heading: "A 3-phase hybrid methodology",
        ordered: true,
        items: [
          {
            title: "Technical Audit",
            body: "Systematic evaluation of the official apps (*Yape/Plin*, *TransMi App*, *Red App*) against **WCAG 2.2**, heuristic evaluation, and screen-reader testing with **VoiceOver and TalkBack**—plus a standardized **Foreign User Protocol** (non-local IDs, foreign phone numbers and cards) and **Friction Maps** of every breakdown.",
          },
          {
            title: "Field Phase — Contextual Inquiry",
            body: "Passive observation and shadowing in high-congestion hubs—**Estación Central** and **Terminal Naranjal** (Lima), **Portal Américas** (Bogotá), and **Los Héroes** and **Estación Central** (Santiago)—documenting kiosk failures, queues, and the informal workarounds commuters invent.",
          },
          {
            title: "Institutional Synthesis",
            body: "Triangulation with transparency reports and citizen-complaint data from **ATU**, **TransMilenio S.A.**, and **DTPM**; qualitative coding in **NVivo**; and comparative **User Journey Maps** built in Figma.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Technical Diagnosis",
        heading: "Where the software breaks, hub by hub",
        columns: 3,
        items: [
          {
            kicker: "LIM · Estación Central",
            title: "The local identity wall",
            body: "Yape and Plin—the only digital alternatives to cash—require a Peruvian national ID (DNI). Run with a passport, registration breaks entirely on an **unhandled character-mask validation error** in the ID field. Bank cards aren't accepted at all because of per-transaction commissions, so international processors are shut out by design.",
          },
          {
            kicker: "BOG · Portal Américas",
            title: "The friction of online personalization",
            body: "Full functionality requires “personalizing” the TuLlave card. Locals can do it in the TransMi App; without a Colombian ID you must go to a station in person—and even with a passport the flow demands a **Colombian address and phone number**, stripping visitors and temporary residents of online recharge.",
          },
          {
            kicker: "SCL · Los Héroes",
            title: "The biometric labyrinth",
            body: "Red App shows the **strongest WCAG compliance** of the three, but the bip! ecosystem gates subsidies behind mandatory ClaveÚnica registration and biometric enrollment. Enrollment repeatedly fails for older adults with fading fingerprints—**“biometric exhaustion”**—blocking legal senior and student subsidies and pushing them back into physical queues.",
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "Field Findings",
        heading: "The measurable cost of rigid software",
        items: [
          {
            value: "22–28%",
            label:
              "of observed peak-hour passengers at Terminal Naranjal and Portal Américas fell back on informal workarounds",
          },
          {
            value: "43%",
            label:
              "of ATU citizen complaints concern unexplained card blocks with unrecovered balances and reader validation errors",
          },
          {
            value: "Up to 3×",
            label:
              "daily commute cost when a borrowed card breaks journey continuity and voids the transfer subsidy",
          },
          {
            value: "3 × 3",
            label: "cities and official fare apps audited against WCAG 2.2",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Failure Modes",
        heading: "Informal workarounds and the economics of bad UX",
        items: [
          {
            title: "The “digital wall” for international and border-case users",
            body: "Linking cards, reloading online, and applying for concessions fail for non-legal, purely technical reasons—forms reject passport formats or international phone numbers, and payment gateways block foreign card processors.",
          },
          {
            title: "“Tarjeteo” and informal reselling",
            body: "With cash booths removed, automated kiosks are the only physical option—and they frequently fail or refuse non-exact local bills. Riders pay a cash premium to strangers or informal resellers to borrow someone else's card.",
          },
          {
            title: "The transfer penalty",
            body: "Discounted intermodal transfers are hard-coded to a continuous session on **one personalized card**. A borrowed card breaks “journey continuity,” so the rider pays a full second fare—doubling or tripling daily cost. Tight transfer windows at peak hours make it worse.",
          },
          {
            title: "Physical safety vs. digital convenience",
            body: "Santiago's QR fare (*Pasaje QR*) forces riders to hold high-value phones over turnstiles in high-theft hubs, raising the risk of phone snatching (*lanzazos*). Many commuters deliberately choose slow analog cash lines instead—proof that the interaction design ignores its physical context.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Triangulation",
        heading: "Systemic, not anecdotal: what the institutional data shows",
        columns: 3,
        items: [
          {
            kicker: "ATU · Lima",
            title: "Card blocks & lost balances",
            body: "43% of citizen complaints center on unexplained card blocks with unrecovered balances and reader validation errors on Metropolitano buses—matching the technical flaws caught in the field.",
          },
          {
            kicker: "TransMilenio S.A. · Bogotá",
            title: "Failed web recharges",
            body: "A sharp spike in complaints about failed web-recharge synchronization on TuLlave followed the decommissioning of physical cash points—a structural gap between cashless policy and peripheral neighborhoods.",
          },
          {
            kicker: "DTPM · Santiago",
            title: "Seniors without a fallback",
            body: "Sudden account blocks on the state-run CuentaRUT (BancoEstado) linked to the QR fare app leave elderly passengers stranded at the turnstile with no operational digital fallback.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Conclusions",
        heading: "Toward a universal design framework",
        items: [
          {
            title: "Software is now a vector of urban exclusion",
            body: "Mobility barriers in Latin American cities are no longer only physical, like a missing ramp—they are **logical**. Omitting international ID formats or relying on rigid biometrics quietly undermines the right to the city for non-standard populations.",
          },
          {
            title: "Authority-centered design fails people",
            body: "All three ecosystems are engineered for the administrative convenience of the managing agency or the payment processor, forcing people to subordinate natural behavior to a rigid interface.",
          },
          {
            title: "Multi-path interfaces restore agency",
            body: "Transit authorities should provide **redundant, independent payment paths**—NFC, QR, efficient anonymous physical cards, and accessible cash fallbacks—that restore agency, physical safety, and economic dignity. HCI belongs at the core of urban planning in the Global South.",
          },
        ],
      },
      {
        type: "principle",
        eyebrow: "Guiding Design Principle",
        text: "True HCI excellence isn't just making software work for the “average” user—it's designing resilient, universal architectures that protect user agency and offer multiple interaction pathways without forcing people to fight rigid administrative software.",
      },
    ],
    galleryHeading: "From the field",
    gallery: [
      {
        src: "/assets/research/andean-transit/bogota-recharge-kiosk.jpg",
        alt: "A commuter using a red TransMilenio self-service recharge kiosk.",
        caption:
          "A commuter at a TransMilenio self-service recharge kiosk in Bogotá—the only physical option once cash booths disappear.",
      },
      {
        src: "/assets/research/andean-transit/bus-card-validator.jpg",
        alt: "A passenger tapping a transit card on an onboard bus validator at night.",
        caption:
          "Tapping a card on an onboard validator: the moment where journey continuity—and transfer discounts—are decided.",
      },
      {
        src: "/assets/research/andean-transit/valparaiso-fare-gates.jpg",
        alt: "A row of automated fare gates at the entrance to the Limache–Puerto train in Chile.",
        caption: "Automated fare gates at the Tren Limache–Puerto entrance, Chile.",
      },
      {
        src: "/assets/research/andean-transit/valparaiso-efe-train.jpg",
        alt: "A blue and white EFE commuter train approaching a station in Chile.",
        caption: "An EFE commuter train on the Valparaíso–Limache line, Chile.",
      },
    ],
  },
  {
    slug: "voices-of-pilsen",
    code: "RES.02",
    eyebrow: "Quad Faculty Research Grant · 2025 UChicago Research Symposium",
    title: "Voices of Pilsen: The Intersection of Bilingualism, Migration, and Identity",
    shortTitle: "Voices of Pilsen",
    subtitle: "Las voces de Pilsen: La intersección del bilingüismo, migración e identidad",
    period: "2025",
    tags: [
      "Ethnographic Research",
      "Linguistic Landscape",
      "Qualitative Methods",
      "Curriculum Design",
      "Oral Histories",
      "Bilingualism",
    ],
    summary:
      "Funded by the **Quad Faculty Research Grant Program** and presented at the **2025 UChicago Undergraduate Research Symposium**, this qualitative study examines how migration and gentrification reshape bilingualism and cultural identity in Chicago's Pilsen neighborhood—directly informing the design of UChicago's advanced immersive Spanish course *Cultura, lengua e identidad de Pilsen* (SPAN 20801).",
    intro:
      "Pilsen has long been Chicago's most iconic Mexican neighborhood—a hub for working-class migrant families built around churches, cultural centers, local businesses, and bilingual schools. This project, conducted with Dr. Maria Cecilia Lozada, explores how university Spanish curricula can partner with local Spanish-speaking communities to foster not just linguistic proficiency, but critical consciousness, historical memory, and community engagement amid rapid gentrification.",
    facts: [
      { label: "Role", value: "Undergraduate Researcher" },
      { label: "Advisor", value: "Dr. Maria Cecilia Lozada" },
      { label: "Funding", value: "Quad Faculty Research Grant" },
      {
        label: "Presented",
        value: "2025 UChicago Undergraduate Research Symposium · April 2025",
      },
    ],
    cover: {
      src: "/assets/research/voices-of-pilsen/poster-with-dr-lozada.jpg",
      alt: "Alejandro Orihuela and Dr. Maria Cecilia Lozada standing beside their research poster at the symposium.",
      caption: "With Dr. Maria Cecilia Lozada at the 2025 Undergraduate Research Symposium.",
      position: "center 40%",
    },
    ctaLabel: "Read Research Case Study",
    blocks: [
      {
        type: "list",
        eyebrow: "Core Research Questions",
        heading: "What keeps a bilingual neighborhood bilingual?",
        ordered: true,
        items: [
          {
            body: "*How does gentrification affect the linguistic and cultural preservation of Latinx residents?*",
          },
          {
            body: "*What role do schools, businesses, and the arts play in maintaining a vibrant bilingual identity?*",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Methodology",
        heading: "Participatory and qualitative by design",
        items: [
          {
            title: "Ethnographic interviews & oral narratives",
            body: "Conversations with teachers, activists, merchants, and community leaders, gathering family and neighborhood oral histories.",
          },
          {
            title: "Linguistic landscape observation",
            body: "Systematic analysis of public signage, commercial storefronts, murals, and community events to map where Spanish is—and isn't—visible.",
          },
          {
            title: "Participatory classroom fieldwork",
            body: "Integrated with the course **“Chicago habla español” (SPAN 20310)**, where students acted as field contributors through site visits, interviews, analytical essays, podcast episodes, and bilingual campus materials for visiting Spanish-speaking families.",
          },
          {
            title: "Cultural artifacts documented",
            body: "Murals including *El Corazón de Chicago* (Mateo Zapata & Pablo Serrano), *Declaration of Immigration* (Salvador Jiménez), and *Somos Pilsen* (Pablo Serrano & Mateo Zapata).",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Key Findings",
        heading: "Language as something a community actively reshapes",
        columns: 3,
        items: [
          {
            kicker: "01",
            title: "Linguistic visibility",
            body: "Spanish remains vibrant in murals, churches, and neighborhood restaurants, yet is steadily declining across formal commercial signage and institutional educational spaces.",
          },
          {
            kicker: "02",
            title: "Narrative identity",
            body: "Family oral histories reveal deep cultural pride alongside recurring experiences of linguistic loss tied to pressure to assimilate and “fit in.”",
          },
          {
            kicker: "03",
            title: "Cultural resistance",
            body: "Community muralism and informal neighborhood education function as active forms of resistance against cultural homogenization and displacement.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Curricular Impact",
        heading: "From fieldwork to a new UChicago course",
        paragraphs: [
          "The study showed that urban Spanish-speaking communities don't merely preserve language passively—they **actively reconfigure it** in response to gentrification.",
          "Those findings directly shaped the framework for UChicago's advanced course **“Cultura, lengua e identidad de Pilsen” (SPAN 20801)**, embedding local artistic, literary, and community realities as an integral part of language instruction.",
        ],
      },
    ],
    galleryHeading: "At the symposium",
    gallery: [
      {
        src: "/assets/research/voices-of-pilsen/poster-with-dr-lozada.jpg",
        alt: "Alejandro Orihuela and Dr. Lozada beside the Voices of Pilsen poster.",
        caption:
          "Presenting with Dr. Maria Cecilia Lozada at the 2025 UChicago Undergraduate Research Symposium.",
      },
      {
        src: "/assets/research/voices-of-pilsen/symposium-banner.jpg",
        alt: "Alejandro Orihuela and Dr. Lozada standing on either side of the 2025 Undergraduate Research Symposium sign.",
        caption: "2025 Undergraduate Research Symposium, April 2025.",
      },
      {
        src: "/assets/research/voices-of-pilsen/research-poster.jpg",
        alt: "The Voices of Pilsen research poster with sections for background, questions, methods, results, and conclusions.",
        caption:
          "The research poster: background, questions, methods, results, and discussion—illustrated with Pilsen murals.",
      },
    ],
  },
];

/* ================================================================== */
/*  Projects                                                          */
/* ================================================================== */

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Systems & Backend",
  "HCI & Inclusive Design",
  "Physical Computing & IoT",
  "Full-Stack & Data",
];

export const projects: CaseStudy[] = [
  {
    slug: "digital-signature",
    code: "PRJ.01",
    title: "Desktop Digital Signature & PKI Verification App",
    shortTitle: "Digital Signature & PKI App",
    period: "2022 – 2023",
    categories: ["Systems & Backend"],
    tags: ["Java", "PKI / X.509", "Windows Certificate Store", "CRL / OCSP", "PDF Signing"],
    summary:
      "A Java desktop security application for cryptographic PDF signing, trusted timestamping, native OS keystore authentication, and live certificate revocation verification.",
    intro:
      "A secure Java desktop application for end-to-end document authentication: cryptographic PDF signing, RFC 3161 trusted timestamps, OS-protected private keys, and automated verification with live certificate revocation checks.",
    facts: [
      { label: "Type", value: "Desktop security application" },
      { label: "Timeline", value: "2022 – 2023" },
      { label: "Platform", value: "Windows (MSCAPI keystore)" },
    ],
    stack: [
      "Java",
      "Apache PDFBox",
      "Bouncy Castle",
      "Windows Certificate Store (MSCAPI)",
      "PKI / X.509",
      "CRL / OCSP",
      "RFC 3161 Timestamping",
    ],
    visual: "pki",
    blocks: [
      {
        type: "text",
        eyebrow: "Problem",
        heading: "A visual signature isn't proof",
        paragraphs: [
          "Institutional document signing requires **cryptographic proof of identity**, tamper detection, long-term timestamp verification, and OS-level private key protection—not just a visual signature overlay pasted onto a PDF.",
        ],
      },
      {
        type: "list",
        eyebrow: "Architecture & Technical Decisions",
        heading: "Security decisions under the hood",
        items: [
          {
            title: "OS-native key custody",
            body: "Integrated directly with the **Windows Certificate Store (MSCAPI)** so private keys stay protected inside native OS boundaries instead of being exported to files.",
          },
          {
            title: "Cryptographic PDF signing",
            body: "Built the signing and verification flow on **Apache PDFBox** and **Bouncy Castle**, embedding X.509 certificate chains so any compliant reader can validate the document.",
          },
          {
            title: "Trusted timestamping",
            body: "Embedded **RFC 3161**-compliant timestamps for long-term non-repudiation, so signatures remain verifiable after the signing certificate expires.",
          },
          {
            title: "Live revocation checks",
            body: "Implemented **CRL** and **OCSP** checks to verify certificate validity at both signing and verification time, plus automated signature verification for incoming documents.",
          },
        ],
      },
    ],
  },
  {
    slug: "study-spaces-map",
    code: "PRJ.02",
    title: "Campus Study Spaces Map (ADHD & Sensory-Friendly UX)",
    shortTitle: "Campus Study Spaces Map",
    period: "2025",
    categories: ["HCI & Inclusive Design", "Full-Stack & Data"],
    tags: ["Inclusive UX", "JavaScript", "OpenStreetMap", "Google Sheets API"],
    summary:
      "An interactive campus map prototype for neurodivergent students—especially those with ADHD and sensory sensitivities—that aggregates live, crowd-sourced reports on quietness, crowding, lighting, and disruptions across study spaces.",
    intro:
      "Finding a workable study space shouldn't require walking from building to building. This high-fidelity prototype aggregates real-time, anonymous reports on sensory conditions across UChicago study spaces, so students with ADHD, autism, or sensory sensitivities can filter by what matters to them and decide at a glance.",
    facts: [
      { label: "Context", value: "Creating Interactive Systems (CMSC 20360)" },
      { label: "Format", value: "Team project · high-fidelity prototype" },
      { label: "Evaluation", value: "Task-based usability test · 5 target users" },
      { label: "Platform", value: "Public touchscreen kiosk + web" },
    ],
    stack: [
      "HTML / CSS",
      "JavaScript",
      "OpenStreetMap",
      "Google Forms",
      "Google Sheets API",
      "Figma",
    ],
    video: {
      src: "/assets/projects/study-spaces-map/demo.mp4",
      poster: "/assets/projects/study-spaces-map/demo-poster.jpg",
      label: "Final prototype walkthrough",
      duration: "01:05",
    },
    cover: {
      src: "/assets/projects/study-spaces-map/demo-poster.jpg",
      alt: "The study spaces map prototype showing a campus map with color-coded locations and current conditions.",
    },
    blocks: [
      {
        type: "text",
        eyebrow: "Problem",
        heading: "Campus maps show hours, not how a space feels",
        paragraphs: [
          "Study spaces vary widely in noise, crowding, lighting, and disruptions—and those conditions shift throughout the day, yet they're rarely communicated in a centralized, timely way.",
          "For students with ADHD, autism, or sensory hypersensitivity, arriving at a library to find harsh noise or overcrowding can derail an entire study session. Guessing wrong is **time-sensitive, repetitive, and costly**—an unfair barrier to an inclusive learning environment.",
        ],
      },
      {
        type: "cards",
        eyebrow: "Requirements",
        heading: "What our research said the system must do",
        intro:
          "Earlier research with students confirmed the problem is time-sensitive and high-cost when users guess wrong. Participants were clear: reduce cognitive load, be fast to read and fast to report, and never overwhelm with controls.",
        columns: 3,
        items: [
          {
            kicker: "R1",
            title: "Real-time sensory conditions",
            body: "Show conditions that change—quietness, crowding, lighting, disruptions—and degrade gracefully with uneven or incomplete reports.",
          },
          {
            kicker: "R2",
            title: "Minimal by default, customizable",
            body: "A simple interface with 5–7 filters, letting users opt into additional criteria.",
          },
          {
            kicker: "R3",
            title: "Low-effort reporting",
            body: "Reporting must take under a minute to encourage contributions.",
          },
          {
            kicker: "R4",
            title: "Core tasks",
            body: "Search by personal preferences, compare locations quickly, navigate to a space, and update its status.",
          },
          {
            kicker: "R5",
            title: "Privacy & trust",
            body: "Anonymous reporting with no passive tracking.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Architecture",
        heading: "From a Figma mock to a live, data-connected prototype",
        items: [
          {
            title: "Interactive map",
            body: "Replaced hand-drawn location maps with an **OpenStreetMap** integration; a bounding box marks the supported campus area and pins are color-coded by average score (1 = worst/red, 5 = best/green).",
          },
          {
            title: "Crowd-sourced data pipeline",
            body: "Reports flow into a **Google Form** linked to a spreadsheet; the **Google Sheets API** computes per-location averages that the front end reads and renders.",
          },
          {
            title: "Two report channels, one dataset",
            body: "On-screen reports submit straight into the same form using its question entry IDs, so kiosk and form submissions both feed the displayed ratings.",
          },
          {
            title: "What the map shows",
            body: "Fixed stats per location (lighting, distance to food, seat comfort, outlets) and live conditions (space available, low disruptions, quietness, visual clarity) across ten spaces—from Regenstein and Harper libraries to Hutchinson Commons and Quantum Café.",
          },
        ],
      },
      {
        type: "iterations",
        eyebrow: "Design Iterations",
        heading: "Three revisions driven by in-class evaluation",
        items: [
          {
            kicker: "Revision 01",
            title: "One-tap quick-sort",
            body: "Users often had one non-negotiable need (“I need the quietest place right now”). Tapping any category icon now re-sorts every location by that condition, surfacing the best match instantly—fewer steps, lower cognitive load, no extra filters.",
            before: {
              src: "/assets/projects/study-spaces-map/lofi-location-list.jpg",
              alt: "Low-fidelity location list without sorting controls.",
              caption: "Before: users scanned the list manually.",
            },
            after: {
              src: "/assets/projects/study-spaces-map/quick-sort.jpg",
              alt: "High-fidelity table sorted by the Distance to Food column.",
              caption: "After: tap a category to sort by it.",
            },
          },
          {
            kicker: "Revision 02",
            title: "Literal icons, hover labels & positive phrasing",
            body: "Abstract icons caused hesitation, so the set was redesigned to be literal and consistently ordered, with on-demand labels. Every category was rephrased positively (“Quietness,” not “Noise level”) so 5 always means best.",
            before: {
              src: "/assets/projects/study-spaces-map/lofi-icons.jpg",
              alt: "Original abstract category icons in the low-fidelity prototype.",
              caption: "Before: ambiguous abstract icons.",
            },
            after: {
              src: "/assets/projects/study-spaces-map/icon-hover-labels.jpg",
              alt: "Redesigned icons with a 'Space Available' label shown on hover.",
              caption: "After: literal icons with labels on demand.",
            },
          },
          {
            kicker: "Revision 03",
            title: "Minimum-threshold filters",
            body: "Expressing “3 or better” used to take three taps per category. Filters now take a single minimum threshold (3 means 3+), matching how people naturally describe constraints.",
            before: {
              src: "/assets/projects/study-spaces-map/filters-before.jpg",
              alt: "Original filter screen with multi-select 1–5 scales.",
              caption: "Before: multi-select ranges.",
            },
            after: {
              src: "/assets/projects/study-spaces-map/filters-after-threshold.jpg",
              alt: "New filter control with a single selected minimum threshold for lighting level.",
              caption: "After: one tap sets a minimum.",
            },
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Evaluation",
        heading: "Usability testing with five target users",
        paragraphs: [
          "We ran a **task-based usability evaluation** with five students from the target population, followed by open discussion. Participants found the system intuitive and useful—especially seeing current conditions at a glance, comparing locations, and using quick-sort to find, say, the quietest space immediately.",
          "Two concerns stood out. **Data reliability:** with anonymous, login-free reporting on a public screen, one person could submit repeatedly—a deliberate privacy trade-off we flagged for rate limiting, moderation, or smarter aggregation. **Coverage:** participants wanted smaller spots added; we kept the focus on high-traffic locations where a physical kiosk serves the most students.",
        ],
      },
      {
        type: "list",
        eyebrow: "Final Redesigns",
        heading: "Small changes that protect data quality",
        items: [
          {
            title: "Confirm location before reporting",
            body: "Users are prompted to confirm they're actually at the selected space, reducing inaccurate reports.",
          },
          {
            title: "Report only where you are",
            body: "“Report Now” is disabled while browsing other locations, so conditions can only be reported for the kiosk's own space.",
          },
          {
            title: "A more visible Close",
            body: "The filter panel's Close control was made larger and higher-contrast for faster, more accessible exits.",
          },
        ],
      },
    ],
    galleryHeading: "Prototype screens",
    gallery: [
      {
        src: "/assets/projects/study-spaces-map/final-ui-regenstein.jpg",
        alt: "Final kiosk interface: map, stats, current conditions, and a disabled Report button while viewing Regenstein Library.",
        caption:
          "Final kiosk UI: browsing another location disables “Report Now” to keep reports accurate.",
      },
      {
        src: "/assets/projects/study-spaces-map/final-ui-quantum-cafe.jpg",
        alt: "Final kiosk interface viewing Quantum Café with stats and current conditions.",
        caption: "Location detail with fixed stats and live, time-stamped conditions.",
      },
      {
        src: "/assets/projects/study-spaces-map/campus-map.jpg",
        alt: "OpenStreetMap view of campus with color-coded location pins inside a dashed boundary.",
        caption: "OpenStreetMap integration with color-coded pins and the supported campus boundary.",
      },
      {
        src: "/assets/projects/study-spaces-map/map-active-filters.jpg",
        alt: "Map with active filter chips and non-matching locations dimmed.",
        caption: "Active filters dim locations that don't meet the user's thresholds.",
      },
      {
        src: "/assets/projects/study-spaces-map/filters-after-toggles.jpg",
        alt: "Filter panel with toggles grouped into fixed stats and current conditions.",
        caption: "Filters grouped into fixed stats and current conditions.",
      },
      {
        src: "/assets/projects/study-spaces-map/filters-close-button.jpg",
        alt: "Filter panel with a highlighted, more visible Close button.",
        caption: "Redesign: a larger, more visible Close control.",
      },
      {
        src: "/assets/projects/study-spaces-map/filters-before-detail.jpg",
        alt: "Early filter screen with 1–5 scales for crowd, lighting, noise, disruptions, outlets, and distance.",
        caption: "Early iteration: 1–5 scales for every category.",
      },
    ],
  },
  {
    slug: "hydration-system",
    code: "PRJ.03",
    title: "Actuated Hydration System: A Haptic Smart Glass",
    shortTitle: "Actuated Hydration System",
    period: "2026",
    categories: ["Physical Computing & IoT", "HCI & Inclusive Design"],
    tags: ["Arduino UNO R3", "C++", "MPU-6050 IMU", "Haptics & Servo"],
    summary:
      "A physical-computing prototype that fits around an ordinary drinking glass: a haptic wristband nudges you to drink, an IMU detects when the glass tilts, and a servo taps the glass—slowing as you drink—until you hit your goal.",
    intro:
      "Hydration is easy to forget when you're deep in screen work. Rather than another logging app, this actuated system adapts to a regular glass, uses motion to signal when it's time to drink, and turns progress into touch: taps that slow down as you drink and stop when you've had enough.",
    facts: [
      { label: "Type", value: "Physical computing · actuated interface" },
      { label: "Hardware", value: "Arduino UNO R3 · IMU · haptics · servo" },
      { label: "Fabrication", value: "3D-printed holder (Autodesk Fusion)" },
      { label: "Testing", value: "Discovery study · 3 participants" },
    ],
    stack: [
      "Arduino UNO R3",
      "C++",
      "Processing",
      "MPU-6050 (accelerometer + gyro)",
      "DRV2605L haptic driver",
      "Servo motor",
      "Autodesk Fusion (CAD)",
      "3D Printing",
      "Tinkercad",
    ],
    cover: {
      src: "/assets/projects/hydration-system/assembled-holder.jpg",
      alt: "A 3D-printed ring-shaped glass holder with a servo motor and MPU-6050 sensor mounted on it, wired to a breadboard.",
      caption: "The assembled holder: servo tapper and MPU-6050 mounted on the 3D-printed ring.",
      position: "center 55%",
    },
    visual: "hydration",
    blocks: [
      {
        type: "text",
        eyebrow: "Problem",
        heading: "Everyone knows to drink water. Few remember to.",
        paragraphs: [
          "Hydration is one of those habits we need to be reminded of to actually do—especially when distracted by computer work. Logging every sip in an app interrupts focus, so most people stop.",
          "The goal: a reminder that lives on the glass you already use, communicates through **motion and touch** instead of another screen notification, and confirms when you've met your target.",
        ],
      },
      {
        type: "visual",
        eyebrow: "System Behavior",
        heading: "A three-state interaction loop",
        intro:
          "Arduino and a Processing dashboard start in sync, then the system cycles through three states driven by the glass's tilt angle.",
        visual: "hydration",
        caption:
          "Timings were shortened for the exhibition demo and designed to be user-configurable.",
      },
      {
        type: "cards",
        eyebrow: "States",
        heading: "How each state feels to the user",
        columns: 3,
        items: [
          {
            kicker: "State 01",
            title: "Needs to drink",
            body: "The wristband fires **5 rapid vibration pulses every 5 seconds**. After the third cycle, the servo starts tapping the side of the glass every **200 ms** until the user picks it up.",
          },
          {
            kicker: "State 02",
            title: "Drinking",
            body: "A tilt of **≥ 45°** stops the vibrations. Taps stretch from **200 ms toward 1,000 ms** as you drink, and stop once **7 seconds** of cumulative tilt are reached—drinking in parts is supported.",
          },
          {
            kicker: "State 03",
            title: "Rest",
            body: "All actuators go silent for **30 seconds** after a completed drink, then the system returns to “needs to drink” and the cycle repeats.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Hardware & Software",
        heading: "What's inside",
        items: [
          {
            title: "MPU-6050 motion sensor",
            body: "Reads the glass angle to distinguish resting on a surface from drinking.",
          },
          {
            title: "DRV2605L haptic driver + vibration motor",
            body: "Delivers reminder pulses through a wristband, so the cue reaches you even when you're looking at a screen.",
          },
          {
            title: "Servo motor “tapper”",
            body: "Produces persistent taps on the glass, conveying drinking progress through touch.",
          },
          {
            title: "Custom 3D-printed holder",
            body: "Modeled in Autodesk Fusion to adapt to a regular drinking glass, with mounts for the servo and sensor.",
          },
          {
            title: "Live Processing dashboard",
            body: "Displays the current mode, drink time out of 7 s, glass angle, time until the next drink, and vibration count.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "User Testing",
        heading: "What happened when people used it",
        paragraphs: [
          "Three participants received only a one-line overview and had to discover the interaction themselves. **All three figured it out**, though one needed a few extra vibration cycles.",
          "Two gripped the glass from an unexpected side and had to tilt past 45° before drinking time registered. It also wasn't obvious that the glass was attached to the base, and the cables ran short for taller participants—concrete issues that shaped the next iteration.",
        ],
      },
      {
        type: "list",
        eyebrow: "Future Work",
        heading: "Where it goes next",
        items: [
          {
            title: "Go wireless",
            body: "Replace the wired wristband and glass connections for freedom of movement.",
          },
          {
            title: "Sense water, not angle",
            body: "Measure water level instead of tilt, removing the constraint of drinking from a specific side.",
          },
          {
            title: "Relocate the servo",
            body: "Move the tapper beneath the glass so it never obstructs the grip—and looks cleaner.",
          },
          {
            title: "Personalize everything",
            body: "Convert drink time to milliliters and let users set their own goals, rest periods, and vibration frequency.",
          },
        ],
      },
    ],
    galleryHeading: "Build log",
    gallery: [
      {
        src: "/assets/projects/hydration-system/assembled-holder.jpg",
        alt: "Assembled 3D-printed holder with servo and MPU-6050 sensor.",
        caption: "Assembled holder with the servo tapper and MPU-6050 sensor.",
      },
      {
        src: "/assets/projects/hydration-system/breadboard-prototype.jpg",
        alt: "Arduino, breadboard, haptic driver, and a glass connected with jumper wires on a wooden desk.",
        caption: "Full prototype wired up: Arduino UNO, breadboard, haptic driver, and glass.",
      },
      {
        src: "/assets/projects/hydration-system/3d-printed-parts.jpg",
        alt: "Orange 3D-printed circular parts on a dark mat.",
        caption: "Early 3D-printed parts while iterating on the holder's fit.",
      },
      {
        src: "/assets/projects/hydration-system/cad-model.jpg",
        alt: "Autodesk Fusion CAD model of the ring holder with a servo mount and clip pieces.",
        caption: "CAD model of the holder and clips in Autodesk Fusion.",
      },
      {
        src: "/assets/projects/hydration-system/circuit-diagram.jpg",
        alt: "Tinkercad wiring diagram connecting an Arduino UNO, MPU-6050, DRV2605L, vibration motor, and servo.",
        caption: "Wiring view: Arduino UNO, MPU-6050, DRV2605L, vibration motor, and servo.",
      },
      {
        src: "/assets/projects/hydration-system/schematic.jpg",
        alt: "Electrical schematic of the hydration system made in Tinkercad.",
        caption: "Circuit schematic.",
      },
    ],
  },
  {
    slug: "record-organizer",
    code: "PRJ.04",
    title: "Record Organizer: Vinyl Shelf Mapping & Archival Toolkit",
    shortTitle: "Record Organizer",
    period: "2026",
    categories: ["Full-Stack & Data", "Systems & Backend", "HCI & Inclusive Design"],
    tags: ["Next.js 16", "TypeScript", "Supabase Postgres", "Discogs API"],
    summary:
      "A live web app that models a collector's real shelves compartment by compartment and computes exactly where every record lives—and where each new one goes—from a Discogs import. A companion Python CLI tracks stylus wear, cleaning cycles, and archival sleeves.",
    intro:
      "Collectors with hundreds or thousands of records rarely know exactly where one is—or where a new purchase should go without reshuffling everything. Record Organizer models your real furniture, compartment by compartment, and computes every record's position from the sort order you choose. You never place records one by one.",
    facts: [
      { label: "Context", value: "Design, Build, Ship (MPCS 51238) · Autumn 2026" },
      { label: "Focus", value: "Systems" },
      { label: "Status", value: "Live · v2" },
      { label: "Languages", value: "English · Español · Português" },
    ],
    stack: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase Postgres + RLS",
      "Clerk",
      "Discogs API",
      "Vitest",
      "Playwright",
      "Vercel",
      "Python (CLI)",
      "Spotify API (CLI)",
    ],
    links: [
      {
        label: "Live app",
        href: "https://final-project-vinyl-organizer.vercel.app",
        kind: "live",
      },
      {
        label: "Source on GitHub",
        href: "https://github.com/aorihuela7/final-project-vinyl-organizer",
        kind: "repo",
      },
    ],
    cover: {
      src: "/assets/projects/record-organizer/landing.jpg",
      alt: "Record Organizer landing page with the headline 'Know where every record is, and where the next one goes' beside an illustrated walnut record shelf.",
      position: "left top",
    },
    blocks: [
      {
        type: "text",
        eyebrow: "Problem",
        heading: "Catalog apps know what you own—not where it is",
        paragraphs: [
          "Commercial cataloging apps track ownership well but ignore the physical collection: which compartment a record is in, how far in, and what has to move when a new one arrives. They also neglect analog maintenance—cumulative stylus hours, ultrasonic cleaning cycles, and archival sleeve inventory.",
        ],
      },
      {
        type: "stats",
        eyebrow: "By the numbers",
        heading: "Built, measured, and shipped",
        items: [
          { value: "1,000", label: "real records in the no-account demo collection" },
          {
            value: "−23%",
            label:
              "records moved by minimum-move insertion vs. v1 (1,725-record collection at 98% full)",
          },
          { value: "~10M", label: "record pairs tested for overlap in the shelf renderer" },
          { value: "4", label: "collectors observed using v1 to shape v2" },
        ],
      },
      {
        type: "list",
        eyebrow: "What you can do",
        heading: "The core experience",
        items: [
          {
            title: "Import from Discogs",
            body: "Type a public Discogs username; the import runs in resumable steps of 100 records and survives closing the tab.",
          },
          {
            title: "Model your real shelf",
            body: "Start from templates—Kallax 4×4 and 5×5, low 2×4, tower 1×5, crates, record box, or custom—then block compartments, set capacities, reading order, and format (LPs, 7″ singles, or CDs at their real size).",
          },
          {
            title: "Pick a sort order",
            body: "Up to three levels across genre, artist, year, label, and title, with “ignore leading articles,” free space, and thickness by format.",
          },
          {
            title: "Find any record instantly",
            body: "Search shows the shelf, row, column, how far in (“about 40% in from the left”), the neighbors on each side, and the tracklist.",
          },
          {
            title: "Keep the map honest",
            body: "Calibrate by count (“74 fit here”), add new purchases with minimum moves, track records taken out to temporary spots, and share a revocable read-only guest link.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Architecture",
        heading: "Engineering highlights",
        items: [
          {
            title: "Pure TypeScript layout engine",
            body: "Sort keys, traversal, format groups, proportional initial layout, cascading and **minimum-move insertion**, a purchase simulator, calibration, and neighbor lookup—fully unit-tested with Vitest.",
          },
          {
            title: "Resumable, idempotent imports",
            body: "Import jobs are stored in Postgres and upserted by Discogs instance ID; a full sync deletes records it didn't see, and data older than 6 hours refreshes on open.",
          },
          {
            title: "Rate-limit-aware API client",
            body: "A server-only Discogs client reads `X-Discogs-Ratelimit-Remaining`, backs off exponentially on 429s, and splits one shared API budget fairly between imports and searches.",
          },
          {
            title: "Database-level security",
            body: "Supabase migrations with **row-level security**, transactional functions that write a whole layout change at once, and automated tests proving one user can't read or change another's rows.",
          },
          {
            title: "Same algorithm, two persistence modes",
            body: "Guests keep state in localStorage; signed-in users persist to Supabase through Clerk's third-party auth integration.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "v2 — Driven by user research",
        heading: "What watching four collectors changed",
        columns: 2,
        items: [
          {
            kicker: "Finding",
            title: "Small records get lost",
            body: "One tester lost a 10″ behind 12″ LPs. Records are now grouped by size from their Discogs formats, and singles get their own shelves.",
          },
          {
            kicker: "Finding",
            title: "Maps drift from reality",
            body: "A tester's map was off by one or two compartments by the end of the shelf. Live capacity while building, calibration by count, and thickness by format fixed it.",
          },
          {
            kicker: "Finding",
            title: "Records leave the shelf",
            body: "Three of four testers lose records outside the sorted shelf—a DJ's gig bag, a discards box. Temporary locations and “Put it back” give the exact spot and neighbors.",
          },
          {
            kicker: "Finding",
            title: "Guests misplace things",
            body: "A record went missing after a party. A revocable, read-only guest link lets visitors find records and see where they go—no account needed.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Security & data stewardship",
        heading: "Hardening pass",
        items: [
          {
            body: "Content-Security-Policy for Clerk, generic error messages, and cross-site checks on import routes.",
          },
          {
            body: "Nightly purge (pg_cron) of Discogs data from accounts inactive for 90 days, plus a webhook that deletes all rows when an account is removed—honoring Discogs' data-retention terms.",
          },
          {
            body: "Per-account quotas so no single user can exhaust the shared free database or API budget.",
          },
        ],
      },
      {
        type: "visual",
        eyebrow: "Companion Module",
        heading: "Archival Maintenance CLI",
        intro:
          "A keyboard-first Python CLI covers the analog side of collecting: it syncs the Discogs library, cross-references tracks through the **Spotify API**, tracks cumulative stylus wear per cartridge, and raises threshold alerts for ultrasonic wash batches and archival sleeve restocking.",
        visual: "terminal",
      },
    ],
    galleryHeading: "Product screens",
    gallery: [
      {
        src: "/assets/projects/record-organizer/landing.jpg",
        alt: "Landing page with Discogs import and an illustrated shelf.",
        caption: "Landing page: try the 1,000-record demo or import your own Discogs collection.",
      },
      {
        src: "/assets/projects/record-organizer/shelf-map-record-card.jpg",
        alt: "Shelf map with brass letter-range plates and a record card showing Billy Joel's Piano Man with its position and tracklist.",
        caption:
          "The shelf map with letter-range plates, and a record card with its exact position, neighbors, and tracklist.",
      },
      {
        src: "/assets/projects/record-organizer/compartment-view.jpg",
        alt: "Close-up of a single shelf compartment showing record spines leaning, with one record highlighted.",
        caption: "Compartment close-up: records drawn leaning into free space, in order.",
      },
      {
        src: "/assets/projects/record-organizer/shelves-and-sort-order.jpg",
        alt: "Shelves and sort-order settings with shelf templates like Kallax 4x4 and multi-level sort options.",
        caption: "Shelf templates and multi-level sort order.",
      },
    ],
  },
];

/** Desktop column spans for the asymmetrical 5 + 7 / 7 + 5 Home grid. */
export const projectSpans: Record<string, string> = {
  "digital-signature": "lg:col-span-5",
  "study-spaces-map": "lg:col-span-7",
  "hydration-system": "lg:col-span-7",
  "record-organizer": "lg:col-span-5",
};

/* ================================================================== */
/*  Experience                                                        */
/* ================================================================== */

export const experience = {
  code: "EXP.01",
  role: "Information Technology & Process Optimization Intern (Metcalf Intern)",
  organization:
    "Center for Latin American and Caribbean Studies (CLACS), The University of Chicago",
  period: "July 2023 – Present",
  duration: "3+ years",
  location: "Chicago, IL",
  overview:
    "Leading technical modernization, website redesign, database automation, and multilingual digital operations supporting interdisciplinary research and public programming.",
  bullets: [
    {
      title: "Web Redesign & Institutional Presence",
      body: "Redesigned, deployed, and administer the Center's website (Drupal CMS) and verified public Google Search/Maps profiles, significantly improving WCAG accessibility, navigation, and information architecture.",
    },
    {
      title: "Workflow & Newsletter Automation",
      body: "Automated weekly newsletter distribution reaching **1,800+ subscribers** by integrating the Mailchimp API with Python, modernizing underlying contact databases and recurring communication pipelines.",
    },
    {
      title: "Digital Migrations & AI Workflows",
      body: "Executed end-to-end digital account migrations and evaluated AI-assisted productivity workflows supporting institutional communications across English, Spanish, and Portuguese.",
    },
    {
      title: "Operations & Budget Planning",
      body: "Manage multi-platform event outreach and contributed directly to planning the Center's annual operational budget.",
    },
  ],
  stats: [
    { value: "3+", label: "years" },
    { value: "1,800+", label: "subscribers" },
    { value: "3", label: "languages" },
  ],
  visual: "newsletter" as VisualKey,
};

/* ================================================================== */
/*  Leadership                                                        */
/* ================================================================== */

export const leadership: CaseStudy[] = [
  {
    slug: "ucaps",
    code: "LDR.01",
    title: "UCAPS — University of Chicago Association of Peruvian Students",
    shortTitle: "UCAPS",
    eyebrow: "Founding President · Chicago, IL",
    period: "2023 – 2026",
    tags: ["0-to-1 Leadership", "Governance", "Partnerships", "Event Production", "Mentorship"],
    metrics: ["0 → 75+ Active Members", "10+ Flagship Events", "Consulate Partnership"],
    summary:
      "Founded and scaled UChicago's Peruvian student association from scratch across undergraduate and graduate divisions (College, Booth, Harris, PhD), establishing institutional partnerships with the Consulate General of Peru, launching the annual Perú Forum, and building a lasting student onboarding and alumni mentorship ecosystem.",
    facts: [
      { label: "Role", value: "Founding President" },
      { label: "Tenure", value: "2023 – 2026" },
      { label: "Members", value: "75+ across College, Booth, Harris & PhD" },
      { label: "Partners", value: "Consulate General of Peru in Chicago · CLACS" },
    ],
    cover: {
      src: "/assets/leadership/ucaps/community-gathering.jpg",
      alt: "A large group of UCAPS members gathered in a classroom with the red UCAPS banner and Peruvian flag garlands.",
      position: "center 45%",
    },
    ctaLabel: "Explore Initiatives & Event Gallery",
    blocks: [
      {
        type: "text",
        eyebrow: "0-to-1 Organization Building",
        heading: "From an idea to a lasting institution",
        paragraphs: [
          "Authored the founding bylaws, established executive board structures and succession processes, and secured recurring university funding through Student Government and SAC proposals.",
          "United students across the **College, Booth School of Business, Harris School of Public Policy, and PhD divisions**—scaling the community to **75+ active members**.",
        ],
      },
      {
        type: "cards",
        eyebrow: "Flagship Programming",
        heading: "Academic, policy & cultural events (10+)",
        columns: 3,
        items: [
          {
            kicker: "Policy",
            title: "Perú Forum (Foro Perú)",
            body: "Spearheaded the flagship annual symposium convening Peruvian public officials, policy leaders, and faculty from the **University of Chicago** and **Columbia University** to examine economic, social, and bilateral issues.",
          },
          {
            kicker: "Culture",
            title: "Consulate partnership & Shipibo exhibition",
            body: "Formalized a partnership with the **Consulate General of Peru in Chicago**, co-producing a photography exhibition on an Indigenous **Shipibo** community at CLACS, paired with a public roundtable (*conversatorio*) featuring a community representative.",
          },
          {
            kicker: "Community",
            title: "Dialogues, town halls & LAMsGiving",
            body: "Organized diplomatic dialogues on US–Peru relations, town halls, and cross-organization cultural gatherings such as **LAMsGiving** at International House.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Onboarding & Mentorship",
        heading: "Making it easier for the next Peruvian student",
        items: [
          {
            title: "Manual del Peruano en UChicago",
            body: "Co-authored the onboarding guide for newly admitted Peruvian students.",
          },
          {
            title: "Aterrizando en UChicago",
            body: "Hosted pre-arrival webinars for newly admitted students.",
          },
          {
            title: "Alumni mentorship & outreach",
            body: "Launched a structured alumni mentorship network and hosted prospective-student coffee chats in **Lima, Peru**.",
          },
        ],
      },
    ],
    galleryHeading: "Event gallery",
    gallery: [
      {
        src: "/assets/leadership/ucaps/community-gathering.jpg",
        alt: "UCAPS members posing with the UCAPS banner and Peruvian flag garlands.",
        caption: "A UCAPS community gathering on campus.",
      },
      {
        src: "/assets/leadership/ucaps/members-at-clacs.jpg",
        alt: "UCAPS members holding the red UCAPS banner in front of a photography exhibition at CLACS.",
        caption:
          "UCAPS members at the Center for Latin American and Caribbean Studies (CLACS).",
      },
      {
        src: "/assets/leadership/ucaps/cultural-event.jpg",
        alt: "A large group photo with students, guests, and dancers in traditional Peruvian costumes.",
        caption: "Students, guests, and traditional dancers at a UCAPS cultural event.",
      },
      {
        src: "/assets/leadership/ucaps/event-guests.jpg",
        alt: "Four people in formal attire posing with a person in a white llama costume.",
        caption: "UCAPS leaders and guests—with a llama mascot—at a flagship event.",
      },
    ],
  },
  {
    slug: "peru-spurs",
    code: "LDR.02",
    title: "Peru Spurs — Tottenham Hotspur Official Supporters' Club",
    shortTitle: "Peru Spurs",
    eyebrow: "Founding President · Lima, Peru",
    period: "2021 – Present",
    tags: ["Community Building", "Official Accreditation", "Digital Branding", "Event Operations"],
    metrics: ["Official THFC Recognition", "50+ Active Members", "Est. 2021"],
    summary:
      "Founded and achieved official international recognition from Tottenham Hotspur Football Club (certified starting with the 2021/22 season), growing an active community of 50+ fans in Lima through organized matchday events, digital branding, and official global club liaison.",
    facts: [
      { label: "Role", value: "Founding President" },
      { label: "Since", value: "2021" },
      { label: "Members", value: "50+ active" },
      { label: "Recognition", value: "Official Supporters' Club, from 2021/22" },
    ],
    cover: {
      src: "/assets/leadership/peru-spurs/mollys-watch-party.jpg",
      alt: "A large group of Peru Spurs members in Tottenham shirts holding club flags at a watch party.",
      position: "center 40%",
    },
    ctaLabel: "View Story & Photos",
    blocks: [
      {
        type: "list",
        eyebrow: "The story",
        heading: "Building an official community from zero",
        items: [
          {
            title: "Official club accreditation",
            body: "Navigated Tottenham Hotspur Football Club's formal international accreditation process, earning the **Official Supporters' Club Certificate of Recognition** starting with the 2021/22 season.",
          },
          {
            title: "Community scaling & event operations",
            body: "Grew the organization from zero to **50+ active members** across Peru, coordinating matchday watch parties, community gatherings, and member onboarding.",
          },
          {
            title: "Digital identity & global liaison",
            body: "Manage digital assets, visual branding, and community communications while serving as the official representative linking Peruvian supporters with Tottenham Hotspur's international network.",
          },
        ],
      },
    ],
    galleryHeading: "Matchdays",
    gallery: [
      {
        src: "/assets/leadership/peru-spurs/official-banner.jpg",
        alt: "Official Spurs Supporters' Club banner reading 'Peru Spurs' with the Tottenham cockerel crest.",
        caption: "Official Spurs Supporters' Club identity.",
      },
      {
        src: "/assets/leadership/peru-spurs/mollys-watch-party.jpg",
        alt: "Peru Spurs members in Tottenham shirts holding 'Tottenham Till I Die' and club flags.",
        caption: "A packed Peru Spurs watch party in Lima.",
      },
      {
        src: "/assets/leadership/peru-spurs/watch-party-flag.jpg",
        alt: "Members holding the official 2024/25 Peru Spurs supporters' club flag in front of a screen showing Premier League Live.",
        caption: "Matchday with the club's official 2024/25 supporters' club flag.",
      },
    ],
  },
];

/* ================================================================== */
/*  Philosophy, Education & Toolkit                                   */
/* ================================================================== */

export const principles = [
  {
    title: "Design for Edge Cases First",
    body: "Research across Andean transit systems showed me that software breaks most visibly at the margins—international formats, accessible inputs, and non-standard workflows. Designing for real human diversity yields cleaner, stronger systems for everyone.",
  },
  {
    title: "Prototype Early in Code & Hardware",
    body: "Working artifacts beat abstract speculation—whether shipping a sensory-friendly web prototype, building a full-stack app for my own record shelves, or wiring an Arduino inside a 3D-printed holder.",
  },
  {
    title: "Protect User Agency Under the Hood",
    body: "Great UX depends on reliable engineering—from OS-native PKI verification in Java to WCAG 2.2 compliance, row-level security, and automated data pipelines.",
  },
];

export const education = {
  code: "EDU.01",
  school: "The University of Chicago",
  location: "Chicago, IL",
  degrees: [
    {
      degree: "M.S. in Computer Science (4+1 MPCS)",
      detail: "Software Engineering Specialization",
      date: "Expected Dec 2027",
    },
    {
      degree: "B.S. in Computer Science",
      detail: "Human-Computer Interaction Specialization",
      date: "June 2026",
    },
    {
      degree: "B.A. in Latin American and Caribbean Studies",
      detail: "With Honors",
      date: "June 2026",
    },
  ],
  honors: [
    "Tinker Field Research Grant Scholar (2026)",
    "Quad Faculty Research Grant Scholar",
    "Global Honors",
    "Odyssey Scholar",
    "Dean's Scholar",
  ],
  coursework: [
    "Design, Build, Ship (MPCS 51238)",
    "Algorithms",
    "Creating Interactive Systems (CMSC 20360)",
    "Introduction to Interaction Design (CMSC 30310)",
    "Security, Privacy & Consumer Protection (CMSC 33206)",
    "Computer Security",
    "Database Systems",
    "Graduate Software Design",
  ],
};

export const skills = {
  code: "STK.01",
  groups: [
    {
      label: "Languages",
      items: ["Python", "Java", "TypeScript", "JavaScript", "C", "C++", "Rust", "SQL", "HTML5", "CSS3"],
    },
    {
      label: "Systems, Backend & Security",
      items: [
        "PostgreSQL",
        "Supabase",
        "Relational Data Modeling",
        "REST APIs",
        "Linux / Unix",
        "Git & GitHub",
        "CI/CD",
        "AWS",
        "Google Cloud",
        "PKI / X.509",
        "CRL / OCSP",
        "Windows Certificate Store",
        "CLI Tooling",
        "Drupal CMS",
        "Automation Workflows",
      ],
    },
    {
      label: "Frameworks, Data & Testing",
      items: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Pandas",
        "PyTorch",
        "TensorFlow",
        "NLTK",
        "Scrapy",
        "Vitest",
        "Playwright",
      ],
    },
    {
      label: "HCI, Design & Accessibility",
      items: [
        "WCAG 2.2 Auditing",
        "Screen Readers (VoiceOver / TalkBack)",
        "Usability Testing",
        "Contextual Inquiry",
        "Urban Ethnography",
        "Heuristic Evaluation",
        "User Journey Mapping",
        "Inclusive Design (ADHD & Sensory UX)",
        "Rapid Interactive Prototyping",
        "Figma",
        "NVivo",
        "Adobe Creative Suite",
      ],
    },
    {
      label: "Hardware & Fabrication",
      items: [
        "Arduino (UNO R3)",
        "Embedded Sensors & Actuators",
        "Processing",
        "3D Printing & CAD (Autodesk Fusion)",
        "MADD Center & CSIL Makerspaces",
      ],
    },
    {
      label: "Human Languages",
      items: ["Spanish (Native)", "English (Fluent)", "Portuguese (Professional)"],
    },
  ],
};

/* ================================================================== */
/*  About & Beyond the Code                                           */
/* ================================================================== */

export const about = {
  code: "ABT.01",
  bio: "My work sits at the intersection of **software engineering, human-computer interaction, and social context**. Trained in both computer science and Latin American studies at the University of Chicago, I approach engineering from two angles: writing clean, dependable systems under the hood while auditing how real users—especially non-standard or underserved users—experience interfaces in the wild. Whether I'm implementing cryptographic PDF signing in Java, building API-driven tools for my own record collection, wiring Arduino-based prototypes, or auditing public transit apps across South America, my goal is eliminating unnecessary friction and expanding user agency.",
  now: [
    "M.S. in Computer Science (Software Engineering) at UChicago",
    "Synthesizing Andean transit field data from Summer 2026",
    "Iterating on Record Organizer v2 with real collectors",
  ],
  quickFacts: [
    { label: "Based in", value: "Chicago, IL" },
    { label: "Speaks", value: "Spanish · English · Portuguese" },
    { label: "Builds", value: "Systems · Interfaces · Prototypes" },
  ],
  interests: [
    {
      code: "BYD.01",
      title: "Modular Systems & LEGO Engineering",
      body: "Lifelong collector and builder fascinated by structural modularity—which fuels my passion for modular software architecture and tactile physical-digital systems.",
      image: {
        src: "/assets/beyond/lego-stadium.jpg",
        alt: "A large custom LEGO football stadium with colorful stands and a green pitch.",
        caption: "A large-scale custom LEGO stadium build.",
        position: "center 60%",
      },
    },
    {
      code: "BYD.02",
      title: "Analog Audio & Vinyl Archiving",
      body: "Dedicated vinyl collector treating analog care like a mini engineering routine: ultrasonic cleaning, archival sleeves, and tracking stylus wear in code—which grew into Record Organizer.",
      image: {
        src: "/assets/beyond/vinyl-records.jpg",
        alt: "Several vinyl records spread on a plaid tablecloth, including Charly García's Unplugged.",
        caption: "A few favorites from the collection.",
        position: "center 55%",
      },
    },
    {
      code: "BYD.03",
      title: "Distance Running & Telemetry",
      body: "Half-marathon runner (multiple 21Ks completed, training for a full marathon) who enjoys analyzing pace splits and route heat maps.",
      visual: "running" as VisualKey,
    },
    {
      code: "BYD.04",
      title: "Aviation & Spatial Systems",
      body: "Frequent traveler who watches live flight maps instead of movies, thinks in IATA airport codes, tracks flights on Flightradar24, and studies eastbound vs. westbound jet-stream speeds. Also plays tennis, games on PlayStation, and tinkers in campus makerspaces.",
      visual: "aviation" as VisualKey,
    },
  ],
};

/* ================================================================== */
/*  Contact                                                           */
/* ================================================================== */

export const contact = {
  heading: "Let's Build Something Together",
  body: "I'm actively seeking **Summer 2027 internships** across Software Engineering, Full-Stack Development, and Human-Computer Interaction. Whether you're hiring, want to discuss inclusive systems or physical computing, or want to swap vinyl or LEGO recommendations, my inbox is open.",
};

/* ================================================================== */
/*  Helpers                                                           */
/* ================================================================== */

export const sections = {
  research: { label: "Research", items: research },
  projects: { label: "Projects", items: projects },
  leadership: { label: "Leadership", items: leadership },
} as const;

export function getEntry(section: keyof typeof sections, slug: string) {
  return sections[section].items.find((item) => item.slug === slug);
}
