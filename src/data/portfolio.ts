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
    "I'm **Alejandro Orihuela**, an M.S. in Computer Science candidate at the **University of Chicago** specializing in Software Engineering, following a B.S. in Computer Science (HCI Specialization) and a B.A. with Honors in Latin American and Caribbean Studies also at The University of Chicago. I bridge backend architecture, rapid hardware/software prototyping, and inclusive design to build tools people genuinely enjoy using.",
  location: {
    code: "LOC.01",
    city: "Chicago, IL",
    note: "Open to relocation & remote",
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
    title: "RunSigner: Government-Accredited Digital Signature & PKI Desktop App",
    shortTitle: "RunSigner · Digital Signature & PKI",
    eyebrow: "Accredited by INDECOPI · Peru's official e-signature authority",
    period: "2021 – 2025",
    categories: ["Systems & Backend"],
    tags: ["Java", "PAdES / CMS", "PKI / X.509", "CRL · OCSP · TSL", "RFC 3161"],
    summary:
      "A Java desktop app for batch PDF signing and verification, **accredited by INDECOPI**, Peru's official e-signature authority, and audited every year since 2021. It signs from CMS up to PAdES-LTA, checks every certificate against CRL, OCSP, and Peru's Trusted Service List, and keeps a tamper-evident audit log.",
    intro:
      "A signature image pasted onto a PDF proves nothing. **RunSigner** is the Java desktop application I built to sign and verify PDFs properly: in batches, with the signer's own certificate, with trusted timestamps, and with the revocation data needed to validate a signature years later. Every operation lands in a tamper-evident audit log. In **May 2021, INDECOPI**, the authority that runs Peru's Official Electronic Signature Infrastructure, accredited RunSigner 1.2 at the medium security level. It has passed every annual follow-up audit since, most recently in **May 2025**.",
    metrics: [
      "INDECOPI-Accredited · 2021",
      "4 Annual Audits Passed",
      "CMS → PAdES-LTA",
      "Batch Sign & Verify",
    ],
    highlights: [
      "Batch **CMS** and **PAdES B / B-T / B-LT / B-LTA** signing with **RFC 3161** timestamps and embedded revocation data.",
      "Certificate gatekeeping: **Windows keystore (MSCAPI)**, Peru's **Trusted Service List**, **CRL / OCSP**, and key-usage checks.",
      "**Tamper-evident audit log.** Every record carries a checksum that is re-verified on search.",
      "Accredited by **INDECOPI**, Peru's e-signature authority, in 2021. It has passed **4 annual audits**, the latest in 2025.",
    ],
    facts: [
      { label: "Type", value: "Desktop security application · Windows 10/11" },
      { label: "Accreditation", value: "INDECOPI · Res. 100-2021/CFE-INDECOPI (May 2021)" },
      { label: "Security level", value: "Medium" },
      { label: "Audits", value: "Annual follow-ups · 4th approved May 2025" },
      { label: "Runtime", value: "Java 8 · MariaDB" },
    ],
    stack: [
      "Java 8",
      "Apache PDFBox",
      "Bouncy Castle",
      "Windows Certificate Store (MSCAPI)",
      "PKCS#7 / CMS",
      "PKCS#12 (.pfx / .p12)",
      "PAdES B · B-T · B-LT · B-LTA",
      "RFC 3161 Timestamping",
      "X.509 · CRL · OCSP",
      "Trusted Service List (XML)",
      "SHA-256",
      "MariaDB",
    ],
    cover: {
      src: "/assets/projects/digital-signature/certificate-manager.png",
      alt: "RunSigner's Certificates tab: a list of certificates from the Windows keystore with issuer and expiry, the certification chain, and General, Attributes, KeyUsage, and CRL/OCSP/TSL detail tabs.",
      caption: "The certificate manager reads straight from the Windows keystore, with chain, key usage, and CRL/OCSP/TSL status.",
      fit: "contain",
    },
    blocks: [
      {
        type: "text",
        eyebrow: "Problem",
        heading: "A visual signature isn't proof",
        paragraphs: [
          "Institutional document signing requires **cryptographic proof of identity**, tamper detection, long-term timestamp verification, and OS-level private key protection. A visual signature overlay pasted onto a PDF provides none of that.",
          "In Peru, a digital signature counts within the **Official Electronic Signature Infrastructure (IOFE)** only when the certificate comes from an accredited certification authority and the signing software is itself **accredited by INDECOPI**. That set the bar for RunSigner. The cryptography had to be correct, the output had to be standards-compliant so any reader can validate it, and the operational controls had to hold up to an auditor every year.",
        ],
      },
      {
        type: "stats",
        eyebrow: "By the numbers",
        heading: "Accredited, audited, in use",
        items: [
          { value: "2021", label: "accredited by INDECOPI at the medium security level" },
          { value: "4", label: "annual follow-up audits passed, the latest in May 2025" },
          { value: "7", label: "signature levels, from CMS to PAdES-LTA" },
          { value: "9.5 s", label: "to verify 14 signatures across 9 PDFs in one batch (test run)" },
        ],
      },
      {
        type: "visual",
        eyebrow: "Pipeline",
        heading: "From keystore to verified PDF",
        intro:
          "Every signature follows the same path. The key stays in the OS keystore, the PDF is signed and timestamped, and the certificate's revocation status is checked before the result is accepted.",
        visual: "pki",
      },
      {
        type: "timeline",
        eyebrow: "How it works",
        heading: "Signing a batch, step by step",
        items: [
          {
            kicker: "Step 01",
            title: "Gate the certificate",
            body: "RunSigner reads certificates from the **Windows Certificate Store (MSCAPI)**, so private keys stay inside the OS or on a USB crypto token instead of being copied into files. .pfx and .p12 files can be imported into the store. A certificate can be selected only if it is unexpired, carries the **digitalSignature** and **nonRepudiation** key-usage bits, is not on its CA's **CRL**, and was issued by a CA on INDECOPI's **Trusted Service List**.",
            media: {
              src: "/assets/projects/digital-signature/revoked-certificate-blocked.png",
              alt: "A warning dialog saying the selected certificate is not enabled for signing because it has been revoked, over the certificate list and chain.",
              caption: "A revoked certificate is blocked before it can sign, and the reason is shown.",
              fit: "contain",
            },
          },
          {
            kicker: "Step 02",
            title: "Choose the signature level",
            body: "There are seven levels: **CMS (PKCS#7)**, CMS with an **RFC 3161** timestamp, CMS with timestamp and OCSP for long-term validation, and **PAdES B, B-T, B-LT, and B-LTA**. B-LT embeds the certificates and CRL/OCSP responses needed to validate the file offline. B-LTA adds a document timestamp over that material, so the signature stays verifiable long after the signing certificate expires.",
            media: {
              src: "/assets/projects/digital-signature/sign-panel.png",
              alt: "RunSigner's main Sign / Verify PDFs window with certificate, signing profile, signature level, and output folder fields above an empty file table.",
              caption: "The signing panel: certificate, profile, signature level, and output folder.",
              fit: "contain",
            },
          },
          {
            kicker: "Step 03",
            title: "Place the visible signature",
            body: "Drag the signature box on a page preview, or enter exact coordinates in PDF user space (A4 is 595 × 842 pt at 72 DPI, with the origin at the bottom left). Non-standard page sizes are rescaled proportionally. The box can go on a chosen page, the last page, or every page. Per-user **signing profiles** save the reason, image, render mode, and position, with 36 preset placements available.",
            media: {
              src: "/assets/projects/digital-signature/signature-placement.png",
              alt: "The signature configuration dialog showing an A4 page preview with the signature box in the top-left corner, X/Y coordinates, box width and height, and page options.",
              caption: "Placing the box in PDF coordinates, on a chosen page, the last page, or all pages.",
              fit: "contain",
            },
          },
          {
            kicker: "Step 04",
            title: "Sign and verify in batches",
            body: "Select single files, ranges, or whole folders. Signing shows live counters and writes to the output folder. Verification checks every signature in every file, since one PDF can carry several, and color-codes each result: valid, valid with observations, or a possible integrity failure. A per-file explorer lists each revision and confirms whether the document changed after it was signed.",
            media: {
              src: "/assets/projects/digital-signature/batch-verification-log.png",
              alt: "The Logs tab listing nine verified PDFs with timestamps and statuses such as FIRMA CORRECTA, NO VALIDO, and INDETERMINADO for each signature.",
              caption: "One batch, nine files, one status per signature. The session log exports to CSV.",
              fit: "contain",
            },
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Architecture & Technical Decisions",
        heading: "Security decisions under the hood",
        items: [
          {
            title: "OS-native key custody",
            body: "Signing goes through the **Windows Certificate Store (MSCAPI)**, so private keys stay protected by the OS or a hardware token and are never written out to files.",
          },
          {
            title: "Standards-compliant output",
            body: "The signing and verification engine is built on **Apache PDFBox** and **Bouncy Castle**. It embeds X.509 certificate chains, uses SHA-256 by default, and writes CMS and PAdES signatures that any compliant PDF reader can validate.",
          },
          {
            title: "Trust anchored in the national TSL",
            body: "RunSigner downloads INDECOPI's **Trusted Service List** (XML). The URL is configurable, and the list refreshes on expiry or at every launch. The app confirms that a certificate's issuer appears on the list, for example \"entry 56 of 70\".",
          },
          {
            title: "Revocation checks at sign and verify time",
            body: "**CRLs** are cached and refreshed on expiry. **OCSP** is available as a stricter online check, and long-term levels embed the responses in the signed file.",
          },
          {
            title: "Certification levels that protect earlier signatures",
            body: "The certification level controls whether later signatures are allowed: none, minimal changes, or co-signing. Signing every page triggers a prompt to lock the document so a later signature can't break earlier ones.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Operational controls",
        heading: "Built to be audited",
        intro:
          "Accreditation covers more than the cryptography. It also covers how the software is operated, so the controls an auditor checks are part of the product.",
        columns: 2,
        items: [
          {
            kicker: "Integrity",
            title: "Tamper-evident audit log",
            body: "Logins, logouts, CRL/OCSP/TSL validations, signatures, verifications, searches, user changes, and configuration updates are all recorded. Each record stores a checksum. Searches can re-verify each row field by field and flag edited rows in red.",
          },
          {
            kicker: "Access",
            title: "Roles and signing profiles",
            body: "Administrators manage users, password rules, and deactivation. Standard users edit only their own profile, and each user can keep signing profiles and a default output folder.",
          },
          {
            kicker: "Configuration",
            title: "Admin-only, safe defaults",
            body: "Administrators set TSL and CRL refresh policy, TSL and OCSP validation, the digest algorithm, certification level, signature appearance, signing reasons, and timestamp-authority credentials and timeouts.",
          },
          {
            kicker: "Accreditation",
            title: "Re-checked every year",
            body: "Each annual audit report goes to INDECOPI's technical accreditation committee. It confirms that RunSigner still meets the medium-level requirements for staff procedures and policies, interoperability, and the usability of its PKI.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Accreditation record",
        heading: "Accredited once, audited every year",
        paragraphs: [
          "INDECOPI accredited RunSigner 1.2 on **May 7, 2021** (Resolución 100-2021/CFE-INDECOPI) under its accreditation guide for digital-signature software, at the medium security level. Accreditation comes with a commitment to an **annual follow-up audit**.",
          "The third audit was approved in **August 2024** (Resolución 217-2024/DGI-INDECOPI) and the fourth in **May 2025** (Resolución 116-2025/DGI-INDECOPI). Both confirmed that the software still meets the technical conditions that justified its accreditation.",
        ],
      },
      {
        type: "principle",
        text: "Security software earns trust by being checkable. Every certificate decision is explained, every operation is logged, and the whole system is audited every year.",
      },
    ],
    galleryHeading: "More screens",
    gallery: [
      {
        src: "/assets/projects/digital-signature/configuration.png",
        alt: "The Configuration tab with TSL and CRL download frequency, the INDECOPI TSL URL, TSL and OCSP validation toggles, SHA-256 digest, certification level, and signature text options.",
        caption: "Configuration: INDECOPI TSL URL, CRL/TSL refresh policy, SHA-256, certification level, and signature appearance.",
        fit: "contain",
      },
      {
        src: "/assets/projects/digital-signature/audit-search.png",
        alt: "The Searches tab with date range, event and user filters, a CRC verification checkbox, and a results table with user, event, date, time, result, detail, and CRC columns.",
        caption: "Audit search, with optional checksum verification of every returned row.",
        fit: "contain",
      },
      {
        src: "/assets/projects/digital-signature/tsl-validation.png",
        alt: "A dialog confirming TSL validation: entry 56 of 70, with issuer and subject distinguished names, SHA256withRSA, and validity dates.",
        caption: "TSL validation: the issuing CA is entry 56 of 70 on Peru's Trusted Service List.",
        fit: "contain",
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
    highlights: [
      "Crowd-sourced data pipeline: kiosk and form reports feed one **Google Sheets** dataset, and the **Sheets API** computes per-location averages.",
      "**OpenStreetMap** integration with a bounded campus area and pins color-coded by live 1–5 condition scores.",
      "Three design iterations from in-class evaluation, then a **task-based usability test with 5 target users**.",
    ],
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
    slug: "record-organizer",
    code: "PRJ.03",
    title: "Record Organizer: Vinyl Shelf Mapping & Archival Toolkit",
    shortTitle: "Record Organizer",
    period: "2026",
    categories: ["Full-Stack & Data", "Systems & Backend", "HCI & Inclusive Design"],
    tags: ["Next.js 16", "TypeScript", "Supabase Postgres", "Discogs API"],
    summary:
      "A live web app that models a collector's real shelves compartment by compartment and computes exactly where every record lives—and where each new one goes—from a Discogs import. A companion Python CLI tracks stylus wear, cleaning cycles, and archival sleeves.",
    intro:
      "Collectors with hundreds or thousands of records rarely know exactly where one is—or where a new purchase should go without reshuffling everything. Record Organizer models your real furniture, compartment by compartment, and computes every record's position from the sort order you choose. You never place records one by one.",
    highlights: [
      "Pure **TypeScript** layout engine with **minimum-move insertion**, moving 23% fewer records than v1. Fully unit-tested with Vitest.",
      "Resumable, idempotent **Discogs** imports with a rate-limit-aware client that backs off exponentially on 429s.",
      "**Supabase Postgres with row-level security**, transactional layout writes, and tests proving users can't touch each other's rows.",
    ],
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
  {
    slug: "hydration-system",
    code: "PRJ.04",
    title: "Actuated Hydration System: A Haptic Smart Glass",
    shortTitle: "Actuated Hydration System",
    period: "2026",
    categories: ["Physical Computing & IoT", "HCI & Inclusive Design"],
    tags: ["Arduino UNO R3", "C++", "MPU-6050 IMU", "Haptics & Servo"],
    summary:
      "A physical-computing prototype that fits around an ordinary drinking glass: a haptic wristband nudges you to drink, an IMU detects when the glass tilts, and a servo taps the glass—slowing as you drink—until you hit your goal.",
    intro:
      "Hydration is easy to forget when you're deep in screen work. Rather than another logging app, this actuated system adapts to a regular glass, uses motion to signal when it's time to drink, and turns progress into touch: taps that slow down as you drink and stop when you've had enough.",
    highlights: [
      "Embedded **C++ on Arduino UNO R3**: a three-state loop driven by the glass's tilt angle from an **MPU-6050** IMU.",
      "Closed-loop actuation: a **DRV2605L** haptic wristband for reminders, plus a servo whose tap rate slows as you drink.",
      "Custom **3D-printed holder** modeled in Autodesk Fusion, with a live **Processing** dashboard showing state, angle, and timers.",
    ],
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
];

/** Desktop column spans for the asymmetrical 5 + 7 / 7 + 5 Home grid. */
export const projectSpans: Record<string, string> = {
  "digital-signature": "lg:col-span-5",
  "study-spaces-map": "lg:col-span-7",
  "record-organizer": "lg:col-span-7",
  "hydration-system": "lg:col-span-5",
};

/**
 * The standalone engineering portfolio at /projects: the link to send when
 * an application asks specifically for a portfolio.
 */
export const portfolio = {
  code: "PRT.01",
  title: "Engineering Portfolio",
  intro:
    "I build dependable systems with careful interfaces. That includes a **government-accredited PKI signing app** in Java, a **full-stack TypeScript and Postgres app** live in production, **sensor-driven hardware** in C++, and data-connected accessibility prototypes. Every project below links to a full technical case study.",
  stats: [
    { value: "4", label: "projects with full technical case studies" },
    { value: "2021", label: "RunSigner accredited by INDECOPI, Peru's e-signature authority" },
    { value: "Live", label: "Record Organizer v2 in production on Vercel" },
    { value: "5", label: "languages shipped: Java, TypeScript, Python, C++, JavaScript" },
  ],
  /** Toolkit groups shown on the portfolio page (labels from `skills`). */
  toolkit: ["Languages", "Systems, Backend & Security", "Frameworks, Data & Testing", "Hardware & Fabrication"],
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
  website: { label: "clacs.uchicago.edu", href: "https://clacs.uchicago.edu" },
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
    metrics: [
      "0 → 75+ Active Members",
      "10+ Flagship Events",
      "Consulate Partnership",
      "1,100+ Instagram Followers",
    ],
    summary:
      "Founded and scaled UChicago's Peruvian student association from scratch across undergraduate and graduate divisions (College, Booth, Harris, PhD), establishing institutional partnerships with the Consulate General of Peru, launching the annual Perú Forum, and building a lasting student onboarding and alumni mentorship ecosystem.",
    facts: [
      { label: "Role", value: "Founding President" },
      { label: "Tenure", value: "2023 – 2026" },
      { label: "Members", value: "75+ across College, Booth, Harris & PhD" },
      { label: "Partners", value: "Consulate General of Peru in Chicago · CLACS" },
      { label: "Public launch", value: "Spring 2024 · 60+ attendees" },
      { label: "Instagram", value: "@ucaps_pe · 1,100+ followers" },
    ],
    links: [
      {
        label: "@ucaps_pe on Instagram",
        href: "https://www.instagram.com/ucaps_pe/",
        kind: "instagram",
      },
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
          "We introduced the association to campus at a **launch event in spring 2024** that filled a room with **60+ attendees**. Since then, UCAPS has kept a steady public presence on Instagram (**@ucaps_pe**, 1,100+ followers), where we announce and recap every event and partnership.",
        ],
      },
      {
        type: "gallery",
        eyebrow: "Launch event · Spring 2024",
        heading: "Presenting UCAPS to campus",
        columns: 2,
        images: [
          {
            src: "/assets/leadership/ucaps/launch-event-2024-selfie.jpg",
            alt: "A selfie in a full classroom: dozens of attendees smile behind a large Peruvian flag held up at the front.",
            caption: "A full room behind the Peruvian flag at the UCAPS launch event, spring 2024.",
          },
          {
            src: "/assets/leadership/ucaps/launch-event-2024-group.jpg",
            alt: "Around forty people posing together in a classroom around a Peruvian flag.",
            caption: "Group photo after presenting the association: 60+ people came out.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Flagship Programming",
        heading: "Academic, policy & cultural events (10+)",
        columns: 2,
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
          {
            kicker: "Tradition",
            title: "Christmas dinner",
            body: "A **December 2024 Christmas dinner** brought together **30 members**. Gatherings like this one keep the community close between flagship events.",
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
      {
        src: "/assets/leadership/ucaps/christmas-dinner-2024.jpg",
        alt: "About twenty UCAPS members posing on a wooden staircase at a holiday dinner, one holding a llama plush with colorful lights.",
        caption: "UCAPS Christmas dinner, December 2024: 30 members.",
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
    metrics: ["Official THFC Recognition", "50+ Active Members", "Est. 2021", "UEL Final · Bilbao 2025"],
    summary:
      "Founded and achieved official international recognition from Tottenham Hotspur Football Club (certified starting with the 2021/22 season), growing an active community of 50+ fans in Lima through organized matchday events, digital branding, and official global club liaison—and carried the Peru Spurs flag to Tottenham's **2025 UEFA Europa League Final** win in Bilbao.",
    facts: [
      { label: "Role", value: "Founding President" },
      { label: "Since", value: "2021" },
      { label: "Members", value: "50+ active" },
      { label: "Recognition", value: "Official Supporters' Club, from 2021/22" },
      { label: "Highlight", value: "2025 UEFA Europa League Final · Bilbao" },
    ],
    links: [
      {
        label: "Official club page on TottenhamHotspur.com",
        href: "https://www.tottenhamhotspur.com/supporters-clubs/873906/peru-spurs-spurs-official-supporters-club",
        kind: "official",
      },
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
      {
        type: "text",
        eyebrow: "Bilbao · May 21, 2025",
        heading: "A call of duty",
        paragraphs: [
          "In May 2025 Tottenham reached the **UEFA Europa League Final** against Manchester United at San Mamés in Bilbao. I was a full-time student at UChicago in the middle of spring quarter, with classes I couldn't miss and **final exams one week away**.",
          "I also had a life-or-death commitment to this club. Being there to support the team in a final wasn't optional. It was a *call of duty*, and I had to answer it.",
          "So I planned the tightest trip of my life. I flew out of Chicago the night before, landed in Bilbao two hours before kickoff, and walked into San Mamés carrying the **Peru Spurs flag**. It was the first time, and so far the only time, I've seen Tottenham play live. That night they won the final, and a couple of hours later I was flying back to Chicago for class.",
        ],
      },
      {
        type: "timeline",
        eyebrow: "Chicago → Bilbao → Chicago",
        heading: "The shortest, craziest, most rewarding trip of my life",
        items: [
          {
            kicker: "The night before · Chicago",
            title: "Leaving at the last possible moment",
            body: "With classes to attend and finals a week away, I couldn't leave early. I flew out of Chicago the night before the match.",
          },
          {
            kicker: "Matchday · Kickoff −2 hours",
            title: "Landing in Bilbao with no time to spare",
            body: "I touched down in Bilbao about **two hours before kickoff** and headed straight for San Mamés.",
            media: {
              src: "/assets/leadership/peru-spurs/bilbao-2025-arrival.jpg",
              alt: "Alejandro in a navy Tottenham jacket standing in front of an orange 'Bilbao Final 2025' banner outside the stadium.",
              caption: "Made it: outside the stadium in Bilbao, hours after landing.",
              position: "center 35%",
            },
          },
          {
            kicker: "21:00 CEST · San Mamés",
            title: "The Peru Spurs flag at a European final",
            body: "Seeing Tottenham live for the first time, in a European final, holding up the **official Peru Spurs flag** among thousands of Spurs fans: the dream of my life.",
            media: {
              src: "/assets/leadership/peru-spurs/bilbao-2025-peru-spurs-flag.jpg",
              alt: "Alejandro holding up the Peru Spurs Official Supporters' Club flag in the stands at San Mamés, with the pitch behind him.",
              caption: "The Peru Spurs flag at San Mamés.",
            },
          },
          {
            kicker: "Full time · Tottenham 1–0 Manchester United",
            title: "Champions of Europe",
            body: "Brennan Johnson scored just before half-time and Spurs held on. It was the club's **first major trophy in 17 years** and its **first European trophy since 1984**, and I was in the stadium to see it.",
            media: {
              src: "/assets/leadership/peru-spurs/bilbao-2025-full-time.jpg",
              alt: "Alejandro in a Tottenham shirt holding a Tottenham Hotspur scarf above his head in the stands after the final, players celebrating on the pitch below.",
              caption: "Full time: Tottenham are Europa League champions.",
              position: "center 40%",
            },
          },
          {
            kicker: "A couple of hours later",
            title: "Straight back to Chicago",
            body: "Shortly after the final whistle I was on a flight back to Chicago to get back to classes and prepare for finals. It was a very short trip, and the most rewarding one I've ever taken.",
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "The final, by the numbers",
        heading: "One night in Bilbao",
        items: [
          { value: "~2 hrs", label: "between landing in Bilbao and kickoff" },
          { value: "1–0", label: "Tottenham over Manchester United (Brennan Johnson, 42′)" },
          { value: "17 yrs", label: "since Tottenham's previous major trophy" },
          { value: "1st", label: "time seeing Tottenham play live" },
        ],
      },
    ],
    galleryHeading: "Matchdays, from Lima to Bilbao",
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
      {
        src: "/assets/leadership/peru-spurs/bilbao-2025-spurs-end.jpg",
        alt: "The Tottenham end at San Mamés covered in a white card display before the 2025 Europa League Final.",
        caption: "The Tottenham end before kickoff at the 2025 Europa League Final, San Mamés.",
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
      date: "Expected graduation · December 2027",
      status: "in-progress",
    },
    {
      degree: "B.S. in Computer Science",
      detail: "Human-Computer Interaction Specialization",
      date: "June 2026",
      status: "completed",
    },
    {
      degree: "B.A. in Latin American and Caribbean Studies",
      detail: "With Honors",
      date: "June 2026",
      status: "completed",
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
    "Design, Build, Ship",
    "Algorithms",
    "Creating Interactive Systems",
    "Interaction Design",
    "Security, Privacy & Consumer Protection",
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
      items: ["Spanish (Native)", "English (Fluent)", "Portuguese (Fluent)"],
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
    { label: "Off the clock", value: "Tennis · PlayStation · Makerspaces" },
  ],
  writing: {
    label: "Published essay · in Spanish",
    title: "Más allá de la tierra: Un análisis de la propuesta de Mariátegui",
    venue: "Revista Væranda, University of Chicago",
    date: "February 2023",
    note: "A critique of José Carlos Mariátegui's land-reform proposal for Peru, written in UChicago's academic writing course for native Spanish speakers.",
    href: "https://voices.uchicago.edu/vaeranda/2023/02/20/mas-alla-de-la-tierra/",
  },
};

/**
 * "Beyond the Code" tiles. Each one is clickable and gets its own page
 * at /beyond/<slug>, rendered with the same case-study template.
 */
export const beyond: CaseStudy[] = [
  {
    slug: "lego",
    code: "BYD.01",
    title: "LEGO Engineering: 20+ Years of Building and a 21,000-Piece Estadio Monumental",
    shortTitle: "LEGO Engineering",
    eyebrow: "Builder since age 2 · 500+ sets · 1,500 minifigures",
    period: "20+ Years",
    tags: ["Custom Design (MOC)", "21,000+ Pieces", "Collector Exhibitions", "Modular Systems"],
    summary:
      "Building since age two: 500+ sets, 1,500 minifigures, and my biggest design yet, a 21,000-piece replica of Universitario's Estadio Monumental.",
    intro:
      "My first LEGO set was **3426, the Adidas Team Transport**, a LEGO Sports football team bus my parents gave me when I was two. More than twenty years later the collection has passed **500 sets and 1,500 minifigures**, and I've taken my building to LEGO competitions and collector exhibitions in Peru. My largest project is a replica of Universitario de Deportes' **Estadio Monumental** that I designed myself. It has more than 21,000 pieces.",
    facts: [
      { label: "First set", value: "LEGO 3426 Adidas Team Transport (age 2)" },
      { label: "Collection", value: "500+ sets · 1,500 minifigures" },
      { label: "Largest build", value: "Estadio Monumental replica · 21,000+ pieces" },
      { label: "Community", value: "LEGO competitions & collector exhibitions in Peru" },
      { label: "Press", value: "Collection photos used in an El Comercio exhibition (2011)" },
    ],
    cover: {
      src: "/assets/beyond/lego/monumental-overview.jpg",
      alt: "A large custom LEGO replica of Estadio Monumental with tan stands, a crowd of multicolored studs, a red U crest, and a green pitch.",
      caption: "My custom LEGO replica of Estadio Monumental (21,000+ pieces).",
      position: "center 60%",
    },
    ctaLabel: "Explore the collection",
    blocks: [
      {
        type: "text",
        eyebrow: "Origin",
        heading: "It started with a team bus",
        paragraphs: [
          "When I was two, my parents gave me **LEGO 3426, the Adidas Team Transport**: a 133-piece LEGO Sports football bus with six minifigures. It was my first set, and I haven't stopped building since.",
          "Over the years LEGO became part collection and part engineering practice. Following instructions showed me how a complex structure breaks down into small, repeatable steps. Building without them taught me to design those structures myself.",
        ],
      },
      {
        type: "gallery",
        eyebrow: "Set 3426",
        heading: "The first set, and the bus I kept",
        columns: 2,
        images: [
          {
            src: "/assets/beyond/lego/first-set-3426.jpg",
            alt: "LEGO set 3426 Adidas Team Transport: a red and white team bus with five players in red Adidas shirts, a goalkeeper in green, and a football.",
            caption: "LEGO 3426 Adidas Team Transport: the bus, five players, a goalkeeper, and the ball.",
            fit: "contain",
          },
          {
            src: "/assets/beyond/lego/first-set-3426-with-me.jpg",
            alt: "Alejandro as a kid holding the red and white LEGO Adidas team bus toward the camera.",
            caption: "Years later, still holding on to the same bus.",
            position: "center 40%",
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "The collection",
        heading: "Two decades in numbers",
        items: [
          { value: "500+", label: "LEGO sets collected since that first bus" },
          { value: "1,500", label: "minifigures across dozens of themes" },
          { value: "1 → 29", label: "every Collectible Minifigures series, complete" },
          { value: "21,000+", label: "pieces in my largest custom build" },
        ],
      },
      {
        type: "pills",
        eyebrow: "Themes",
        heading: "What's on the shelves",
        intro:
          "The minifigure collection spans most of the licensed worlds I grew up with, plus a few lines I've completed end to end.",
        groups: [
          {
            label: "Licensed themes",
            items: [
              "Star Wars",
              "Harry Potter",
              "The Lord of the Rings",
              "The Simpsons",
              "Shrek",
              "Disney",
              "Super Mario",
            ],
          },
          {
            label: "Complete collections",
            items: ["Every LEGO Cars vehicle", "Collectible Minifigures Series 1–29"],
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Beyond the shelf",
        heading: "Building in public",
        items: [
          {
            title: "The yearly terrace showcase",
            body: "As a kid, once a year I carried the **entire collection** out to the terrace at home to film a video and play with every set at once. It was a celebration, and it was also a full inventory check.",
          },
          {
            title: "Competitions & collector exhibitions",
            body: "I've competed in several **LEGO building competitions** and shown my builds at **collector exhibitions in Peru**, alongside other adult fans and collectors.",
          },
          {
            title: "In an El Comercio exhibition",
            body: "In 2011, photos of my collection were used in an exhibition by **El Comercio**, one of Peru's leading newspapers.",
          },
        ],
      },
      {
        type: "video",
        eyebrow: "Archive · 2014",
        heading: "The 2014 terrace showcase, on video",
        intro:
          "Once a year the whole collection came out of the boxes and onto the terrace. This is the 2014 edition: a minute of me walking the layout, past trains, construction sets, city streets, temples, and dragons.",
        video: {
          src: "/assets/beyond/lego/terrace-showcase-2014.mp4",
          poster: "/assets/beyond/lego/terrace-showcase-2014-poster.jpg",
          label: "Terrace showcase · 2014",
          duration: "01:00",
          tag: "Video",
          aspect: "16 / 9",
        },
      },
      {
        type: "gallery",
        eyebrow: "El Comercio · 2011",
        heading: "The collection in 2011",
        intro:
          "These are the photos from the El Comercio exhibition: city layouts, a minifigure stadium with Peruvian club crests years before the Monumental, and a Mindstorms robot in a Peru jersey.",
        columns: 3,
        images: [
          {
            src: "/assets/beyond/lego/el-comercio-2011-stadium.jpg",
            alt: "A LEGO football stadium with stands full of minifigures, a ¡Viva el Perú! banner, a No a la violencia sign, and cars carrying Peruvian club crests on a green pitch.",
            caption: "My first stadium: stands full of minifigures, a “¡Viva el Perú!” banner, and Peruvian club crests on the pitch.",
          },
          {
            src: "/assets/beyond/lego/el-comercio-2011-city.jpg",
            alt: "A LEGO City intersection with race cars, a police motorbike, and Harry Potter minifigures in the street.",
            caption: "A LEGO City intersection, with Harry Potter minifigures caught in the traffic.",
          },
          {
            src: "/assets/beyond/lego/el-comercio-2011-train-yard.jpg",
            alt: "An elevated LEGO train line running above a city layout of trucks, race cars, and a fire station, set up outdoors on grass.",
            caption: "An elevated train line over a city layout, set up outdoors.",
          },
          {
            src: "/assets/beyond/lego/el-comercio-2011-mindstorms.jpg",
            alt: "A LEGO Mindstorms humanoid robot wearing a red Peru jersey, standing on grass surrounded by small LEGO race cars.",
            caption: "A Mindstorms robot in a Peru jersey, surrounded by race cars.",
          },
          {
            src: "/assets/beyond/lego/christmas-2011-pyramid.jpg",
            alt: "Alejandro as a kid smiling in front of a Christmas tree, holding a stepped pyramid built from colorful LEGO bricks.",
            caption: "December 2011: a stepped pyramid I built from basic bricks.",
            position: "center 35%",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Featured build",
        heading: "Estadio Monumental, in LEGO",
        paragraphs: [
          "My biggest personal project is a replica of the **Estadio Monumental**, Universitario de Deportes' home in Lima and the largest stadium in Peru. I designed it myself without an official kit or instructions, and the finished model uses **more than 21,000 pieces**.",
          "The details make it recognizably the U's stadium: the red **U crest** built into the stands, plaques for the **Trinchera Norte** and **Barra Oriente 1968** supporter stands, a pixel-art portrait mosaic in the crowd, and thousands of multicolored studs that read as a packed stadium from a distance. A smartphone mounted on the roofline works as the video board.",
        ],
      },
      {
        type: "iterations",
        eyebrow: "Real vs. replica",
        heading: "The real Monumental, side by side with mine",
        intro:
          "The goal was a model you'd recognize at a glance. Here are three views of the real stadium in Lima next to the same features in the LEGO version.",
        labels: ["Real stadium", "LEGO replica"],
        items: [
          {
            kicker: "View 01",
            title: "The U crest over Trinchera Norte",
            body: "The giant **U crest** painted across the north stand is the stadium's signature, with the Trinchera Norte sign along the pitch below it. In the replica the crest is built into the stands brick by brick.",
            before: {
              src: "/assets/beyond/lego/real-monumental-trinchera-norte.jpg",
              alt: "The real Estadio Monumental seen from the pitch, with a giant red and white U crest across the north stand and a Trinchera Norte sign below it.",
              caption: "The north stand and its U crest, seen from the pitch.",
            },
            after: {
              src: "/assets/beyond/lego/monumental-pitch-level.jpg",
              alt: "Pitch-level view of the LEGO stadium looking toward the goal and the red U crest in the stands.",
              caption: "The same view in LEGO: pitch level, toward the goal and the crest.",
            },
          },
          {
            kicker: "View 02",
            title: "A bowl of multicolored seats",
            body: "The real Monumental's seats come in many colors, so an empty stand still looks busy. I used **thousands of multicolored studs** to get the same effect, and from a distance they read as a packed crowd.",
            before: {
              src: "/assets/beyond/lego/real-monumental-aerial.jpg",
              alt: "Aerial view of the real Estadio Monumental with multicolored seats around a green pitch and the U crest on the far stand.",
              caption: "From above: multicolored seats wrapped around the pitch.",
            },
            after: {
              src: "/assets/beyond/lego/monumental-overview.jpg",
              alt: "Wide view across the LEGO stadium showing a crowd made of multicolored studs, the U crest, and the pitch.",
              caption: "In LEGO: a crowd of multicolored studs, the crest, and a portrait mosaic.",
            },
          },
          {
            kicker: "View 03",
            title: "Rings of upper tiers",
            body: "Stacked rings of upper tiers wrap around the real bowl. In the replica those rings frame the crest and the **Trinchera Norte** stand from above.",
            before: {
              src: "/assets/beyond/lego/real-monumental-panorama.jpg",
              alt: "Panorama of the real Estadio Monumental at sunset, with stacked upper tiers curving around the pitch and hills behind the stadium.",
              caption: "A panorama of the bowl and its stacked upper tiers.",
            },
            after: {
              src: "/assets/beyond/lego/monumental-trinchera-norte.jpg",
              alt: "The U crest and Trinchera Norte plaque seen through a gap in the LEGO stadium's upper ring.",
              caption: "The crest and Trinchera Norte, seen through the replica's upper ring.",
            },
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "Specs",
        heading: "The footprint of a real build",
        items: [
          { value: "21,000+", label: "pieces, designed brick by brick" },
          { value: "1.30 m", label: "long" },
          { value: "95 cm", label: "wide" },
          { value: "35 cm", label: "tall" },
        ],
      },
      {
        type: "video",
        eyebrow: "Walkthrough",
        heading: "Take a lap around the stadium",
        intro:
          "A one-minute walkthrough of the finished replica: the stands, the crest, the supporter plaques, and the pitch.",
        video: {
          src: "/assets/beyond/lego/monumental-walkthrough.mp4",
          poster: "/assets/beyond/lego/monumental-poster.jpg",
          label: "Estadio Monumental in LEGO",
          duration: "00:56",
          tag: "Video",
          aspect: "16 / 9",
        },
      },
      {
        type: "principle",
        eyebrow: "What LEGO taught me",
        text: "Big systems are made of small, standard parts with clean interfaces. I learned that with bricks long before I wrote any code, and it's still how I approach software architecture.",
      },
    ],
    galleryHeading: "The Monumental, up close",
    gallery: [
      {
        src: "/assets/beyond/lego/monumental-overview.jpg",
        alt: "Wide view across the LEGO stadium showing the U crest in the stands, a mosaic portrait, and the pitch.",
        caption: "Across the pitch: the U crest, the portrait mosaic, and a crowd made of multicolored studs.",
      },
      {
        src: "/assets/beyond/lego/monumental-pitch-level.jpg",
        alt: "Pitch-level view of the LEGO stadium looking toward the goal and the red U crest.",
        caption: "Pitch-level view toward the goal and the U crest.",
      },
      {
        src: "/assets/beyond/lego/monumental-trinchera-norte.jpg",
        alt: "The U crest and Trinchera Norte plaque seen through a gap in the LEGO stadium's upper ring.",
        caption: "The Trinchera Norte stand, seen through a gap in the upper ring.",
      },
    ],
  },
  {
    slug: "vinyl",
    code: "BYD.02",
    title: "Analog Audio & Vinyl Archiving",
    shortTitle: "Vinyl Archiving",
    eyebrow: "1,400+ LPs · 300+ CDs · 150+ 7″ singles",
    period: "Ongoing",
    tags: ["Vinyl", "Japanese Pressings", "Archival Care", "Record Organizer"],
    summary:
      "A collection of 1,400+ LPs, 300+ CDs, and 150+ 7″ singles, including Japanese pressings from the '70s and '80s. Keeping it organized and cared for grew into Record Organizer.",
    intro:
      "Vinyl is the most hands-on way I listen to music. My collection has grown past **1,400 LPs, 300 CDs, and 150 7″ singles**, including several **Japanese pressings from the '70s and '80s**. It runs from rock and pop in English and Spanish to Spanish-language ballads and salsa. Records only last if you look after them, and a collection that size is hard to keep in order by hand, so I wrote software for both. That became **Record Organizer**, a full-stack web app and companion CLI built in Design, Build, Ship (MPCS 51238).",
    facts: [
      { label: "Collection", value: "1,400+ LPs · 300+ CDs · 150+ 7″ singles" },
      { label: "Prized pressings", value: "Japanese editions from the '70s and '80s" },
      { label: "Genres", value: "Rock & pop in English and Spanish · Spanish-language ballads · salsa" },
      { label: "Care routine", value: "Ultrasonic cleaning · archival sleeves · stylus tracking" },
      { label: "Built for it", value: "Record Organizer (web app + Python CLI)" },
      { label: "On the turntable", value: "Charly García · Sui Generis · Spinetta · Fito Páez" },
    ],
    cover: {
      src: "/assets/beyond/vinyl/collection-favorites.jpg",
      alt: "Several vinyl records spread on a plaid tablecloth, including Charly García's Hello! MTV Unplugged and Sui Generis's Vida.",
      caption:
        "Argentine rock favorites: Charly García, Sui Generis, Pescado Rabioso, Fito Páez, and Spinetta & Páez.",
      position: "center 55%",
    },
    ctaLabel: "See the collection",
    blocks: [
      {
        type: "stats",
        eyebrow: "The collection",
        heading: "Three formats, one archive",
        items: [
          { value: "1,400+", label: "LPs" },
          { value: "300+", label: "CDs" },
          { value: "150+", label: "7″ singles" },
          { value: "'70s–'80s", label: "Japanese pressings, the most prized shelf" },
        ],
      },
      {
        type: "pills",
        eyebrow: "On the shelves",
        heading: "What I collect",
        intro:
          "Japanese editions are a favorite. They often come with an obi strip and a printed lyric insert.",
        groups: [
          {
            label: "Genres",
            items: [
              "Rock & pop in English",
              "Rock & pop in Spanish",
              "Spanish-language ballads",
              "Salsa",
            ],
          },
          {
            label: "Formats",
            items: ["12″ LPs", "7″ singles", "CDs", "Japanese pressings ('70s–'80s)"],
          },
        ],
      },
      {
        type: "list",
        eyebrow: "The routine",
        heading: "Analog care as maintenance engineering",
        items: [
          {
            title: "Ultrasonic cleaning",
            body: "Records go through **ultrasonic wash cycles** in batches to lift dust and residue out of the grooves before they reach the stylus.",
          },
          {
            title: "Archival sleeves",
            body: "Archival inner and outer sleeves protect the vinyl and the artwork, and I restock the sleeve inventory before it runs out.",
          },
          {
            title: "Stylus-wear tracking",
            body: "Play time is logged per cartridge, so I can tell when a stylus is due for replacement **before** it starts damaging records.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "From hobby to software",
        heading: "The routine became a product",
        paragraphs: [
          "Commercial catalog apps track what you own. They don't track where each record physically sits or how it has been cared for. With more than 1,850 items across three formats, I needed both, so I built them.",
          "That's also why Record Organizer handles **LPs, 7″ singles, and CDs at their real sizes**: a collection like mine mixes all three, and a shelf map that ignores format drifts out of sync with the real shelves.",
          "The **Record Organizer** web app models real shelves compartment by compartment and computes where every record lives, and where each new purchase goes, from a Discogs import. Its companion **Python CLI** handles the analog side: cumulative stylus wear, wash-cycle alerts, sleeve inventory, and track cross-referencing through the Spotify API.",
        ],
      },
      {
        type: "cta",
        eyebrow: "Related project",
        heading: "Record Organizer: Vinyl Shelf Mapping & Archival Toolkit",
        text: "Built with Next.js 16, TypeScript, Supabase Postgres with row-level security, and the Discogs API. It's live on v2, which I reshaped after watching four collectors use v1.",
        href: "/projects/record-organizer",
        label: "Read the case study",
      },
    ],
  },
  {
    slug: "running",
    code: "BYD.03",
    title: "Distance Running & Telemetry",
    shortTitle: "Distance Running",
    eyebrow: "Half-marathoner · Training for the 2027 Chicago Marathon",
    period: "Ongoing",
    tags: ["21.1 km", "Chicago Marathon 2027", "Pace Splits", "Route Heat Maps"],
    summary:
      "Half-marathon runner (multiple 21Ks completed) training for the 2027 Chicago Marathon, who enjoys analyzing pace splits and route heat maps.",
    intro:
      "I've completed multiple half marathons, and I'm now training for my first full marathon: the **2027 Bank of America Chicago Marathon**, on the streets of the city where I study. Running is also a data hobby for me. I log every run in adidas Running, and after a long run I go through the pace splits, look for where my effort drifted, and compare routes on heat maps.",
    facts: [
      { label: "Distance", value: "Multiple half marathons (21.1 km)" },
      { label: "Next goal", value: "2027 Chicago Marathon (42.2 km)" },
      { label: "Tracking", value: "adidas Running" },
      { label: "Favorite data", value: "Pace splits · route heat maps" },
    ],
    visual: "running" as VisualKey,
    ctaLabel: "See the splits",
    blocks: [
      {
        type: "cards",
        eyebrow: "Training log",
        heading: "What I look at after a run",
        columns: 3,
        items: [
          {
            kicker: "Splits",
            title: "Pace per kilometer",
            body: "Per-kilometer splits show whether I paced evenly or faded late. Over 21.1 km I aim for an even or **negative split**, meaning the second half is faster than the first.",
          },
          {
            kicker: "Routes",
            title: "Heat maps",
            body: "Route heat maps show where I actually run, which helps me plan new routes with the distance and terrain a training week needs.",
          },
          {
            kicker: "Progression",
            title: "Road to Chicago 2027",
            body: "Marathon training means adding long-run distance gradually. Watching weekly volume keeps that increase steady and sustainable all the way to the Chicago start line.",
          },
        ],
      },
    ],
  },
  {
    slug: "wwe-john-cena",
    code: "BYD.04",
    title: "WWE & John Cena: A Decade of Never Giving Up",
    shortTitle: "WWE & John Cena",
    eyebrow: "Fan for 10+ years · WrestleMania 33 & 41 · Royal Rumble 2025",
    period: "10+ Years",
    tags: ["WrestleMania 33", "Royal Rumble 2025", "WrestleMania 41", "Meet & Greet"],
    summary:
      "John Cena fan for 10+ years. I've seen him live at WrestleMania 33, the 2025 Royal Rumble, and WrestleMania 41, his last WrestleMania. At FAN EXPO Philadelphia he signed my WWE title belt.",
    intro:
      "I've followed WWE for more than ten years, and John Cena has been at the center of it the whole time. Following him took me from watching on a screen to being there in person for three of his biggest nights: **WrestleMania 33** in Orlando, the **2025 Royal Rumble** in Indianapolis, and **WrestleMania 41** in Las Vegas, his final WrestleMania. A month later I met him at **FAN EXPO Philadelphia**, where he signed my WWE championship belt.",
    facts: [
      { label: "Fan for", value: "10+ years" },
      { label: "Seen live", value: "WrestleMania 33 · Royal Rumble 2025 · WrestleMania 41" },
      { label: "Met him", value: "FAN EXPO Philadelphia, May 2025 · signed my WWE championship belt" },
      { label: "Motto", value: "Hustle, Loyalty, Respect" },
    ],
    cover: {
      src: "/assets/beyond/wwe/wm41-cena-vs-cody-banner.jpg",
      alt: "Alejandro crouching under a giant WrestleMania 41 banner of Cody Rhodes vs. John Cena, holding a towel that reads 'The Last Time Is Now'.",
      caption: "WrestleMania 41 weekend in Las Vegas: The Last Time Is Now.",
      position: "center 35%",
    },
    thumbnail: {
      src: "/assets/beyond/wwe/meet-greet-photo-op.jpg",
      alt: "Alejandro and John Cena holding a WWE championship belt together at FAN EXPO Philadelphia.",
      position: "center 30%",
    },
    ctaLabel: "Read the story",
    blocks: [
      {
        type: "text",
        eyebrow: "The fandom",
        heading: "Why John Cena",
        paragraphs: [
          "For more than a decade, Cena has been the through-line in how I watch WWE: the title runs, the WrestleMania main events, the “You Can't See Me,” and the way he carried himself, summed up in his motto **Hustle, Loyalty, Respect**.",
          "Eventually watching on a screen wasn't enough. I've now been in the building for three of his biggest nights, including the last WrestleMania of his career.",
        ],
      },
      {
        type: "timeline",
        eyebrow: "Seen live",
        heading: "Three nights in the building, and one meet & greet",
        items: [
          {
            kicker: "April 2, 2017 · Orlando, FL",
            title: "WrestleMania 33: the first time",
            body: "My first time seeing Cena live, at Camping World Stadium, wearing his “Respect. Earn It.” shirt. He teamed with Nikki Bella to beat The Miz and Maryse, then proposed to Nikki in the middle of the ring.",
            media: {
              src: "/assets/beyond/wwe/wm33-cena-shirt.jpg",
              alt: "A young Alejandro in a blue John Cena 'Respect. Earn It.' T-shirt in the upper deck of Camping World Stadium, with the WrestleMania 33 set behind him.",
              caption: "WrestleMania 33, Orlando: my first time seeing Cena live.",
              position: "70% center",
            },
          },
          {
            kicker: "February 1, 2025 · Indianapolis, IN",
            title: "Royal Rumble 2025: ringside",
            body: "From the floor at Lucas Oil Stadium. Cena entered the men's Royal Rumble match and made it to the **final two** before Jey Uso eliminated him to win.",
            media: {
              src: "/assets/beyond/wwe/royal-rumble-2025-ringside.jpg",
              alt: "Alejandro taking a selfie at ringside during the 2025 Royal Rumble, pointing up, with the ring behind him.",
              caption: "Ringside at the 2025 Royal Rumble.",
              position: "center 40%",
            },
          },
          {
            kicker: "April 20, 2025 · Las Vegas, NV",
            title: "WrestleMania 41: The Last Time Is Now",
            body: "His final WrestleMania, at Allegiant Stadium, during his farewell tour. I watched him beat Cody Rhodes for the Undisputed WWE Championship, a record-breaking **17th world title**.",
            media: {
              src: "/assets/beyond/wwe/wm41-last-time-sign.jpg",
              alt: "Alejandro holding a red, white, and blue 'The Last Time' sign inside a packed Allegiant Stadium.",
              caption: "Inside Allegiant Stadium for Cena's last WrestleMania.",
              position: "left center",
            },
          },
          {
            kicker: "May 17, 2025 · Philadelphia, PA",
            title: "Meeting John Cena at FAN EXPO",
            body: "A month after WrestleMania 41, I finally met him in person at **FAN EXPO Philadelphia**. He **signed my WWE championship belt**, we took a photo together holding it, I got a selfie with him, and I watched his panel on the main stage.",
          },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Meet & greet · FAN EXPO Philadelphia",
        heading: "The day he signed my belt",
        columns: 2,
        images: [
          {
            src: "/assets/beyond/wwe/meet-greet-photo-op.jpg",
            alt: "Alejandro, in a 'The Last Time Is Now' shirt, and John Cena holding a WWE championship belt together in front of a blue studio backdrop.",
            caption: "Photo op with John Cena, holding my WWE championship belt.",
            position: "center 30%",
          },
          {
            src: "/assets/beyond/wwe/meet-greet-signing-belt.jpg",
            alt: "John Cena signing the WWE championship belt with a gold marker at a table in front of a FAN EXPO backdrop.",
            caption: "Cena signing the belt in gold marker.",
          },
          {
            src: "/assets/beyond/wwe/meet-greet-selfie.jpg",
            alt: "Alejandro taking a selfie with John Cena in front of a FAN EXPO backdrop.",
            caption: "A selfie with the man himself.",
          },
          {
            src: "/assets/beyond/wwe/fan-expo-panel.jpg",
            alt: "John Cena speaking into a microphone on a stage with red lighting at FAN EXPO Philadelphia.",
            caption: "John Cena's panel on the main stage at FAN EXPO Philadelphia.",
            position: "center 35%",
          },
        ],
      },
      {
        type: "principle",
        eyebrow: "Hustle · Loyalty · Respect",
        text: "“Never Give Up” has never been just a T-shirt slogan to me. It means showing up for the people counting on you, whether that's a community I'm building, a team project, or a bug that's still there at 2 a.m.",
      },
    ],
    galleryHeading: "From the stands, 2017 to 2025",
    gallery: [
      {
        src: "/assets/beyond/wwe/wm33-cena-shirt.jpg",
        alt: "A young Alejandro in a John Cena 'Respect. Earn It.' T-shirt at Camping World Stadium for WrestleMania 33.",
        caption: "WrestleMania 33, Orlando (2017), in my John Cena “Respect. Earn It.” shirt.",
        position: "70% center",
      },
      {
        src: "/assets/beyond/wwe/wm33-camping-world-stadium.jpg",
        alt: "Camping World Stadium filling up in daylight, with the WrestleMania 33 ring and stage in the center.",
        caption: "Camping World Stadium filling up before WrestleMania 33.",
      },
      {
        src: "/assets/beyond/wwe/wm33-ring-overhead.jpg",
        alt: "Looking down from the stands at the WrestleMania 33 ring and the entrance ramp.",
        caption: "The WrestleMania 33 ring from the upper deck.",
        position: "center 60%",
      },
      {
        src: "/assets/beyond/wwe/royal-rumble-2025-ringside.jpg",
        alt: "Alejandro taking a ringside selfie at the 2025 Royal Rumble.",
        caption: "Ringside at the 2025 Royal Rumble, Lucas Oil Stadium.",
      },
      {
        src: "/assets/beyond/wwe/royal-rumble-2025-ring.jpg",
        alt: "Wrestlers in the ring during the Royal Rumble match, seen from the crowd.",
        caption: "The Royal Rumble match in progress, Indianapolis.",
      },
      {
        src: "/assets/beyond/wwe/wm41-cena-vs-cody-banner.jpg",
        alt: "Alejandro under the Cody Rhodes vs. John Cena WrestleMania 41 banner with a 'The Last Time Is Now' towel.",
        caption: "WWE World at WrestleMania 41, under the Cody Rhodes vs. John Cena banner.",
      },
      {
        src: "/assets/beyond/wwe/wm41-last-time-sign.jpg",
        alt: "Alejandro holding a 'The Last Time' sign in the crowd at Allegiant Stadium.",
        caption: "“The Last Time”: inside Allegiant Stadium for WrestleMania 41.",
        position: "left center",
      },
      {
        src: "/assets/beyond/wwe/wm41-turnbuckle.jpg",
        alt: "A wrestler standing on the turnbuckle in front of a packed Allegiant Stadium crowd.",
        caption: "WrestleMania 41 from the stands at Allegiant Stadium.",
      },
      {
        src: "/assets/beyond/wwe/wm41-spotlight.jpg",
        alt: "A single spotlight shining down on the ring through a crowd raising their phones.",
        caption: "A spotlight cuts through the crowd at WrestleMania 41.",
        position: "center 40%",
      },
    ],
  },
];

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
  beyond: { label: "Beyond the Code", items: beyond },
} as const;

export function getEntry(section: keyof typeof sections, slug: string) {
  return sections[section].items.find((item) => item.slug === slug);
}
