export const navItems = [
  { label: "Home", path: "/" },
  { label: "Data Packages", path: "/packages" },
  { label: "About / Methodology", path: "/about" },
  { label: "Contact/Request Sample", path: "/contact" },
];

export const scanNavItems = [
  { label: "Heads", path: "/heads" },
  { label: "Hands", path: "/hands" },
  { label: "Ears", path: "/ears" },
];

export const categories = {
  heads: {
    key: "heads",
    label: "Heads",
    path: "/heads",
    type: "head",
    heroTitle: "Head datasets built for global fit decisions.",
    heroBody:
      "High-resolution 3D scan bundles and statistics tables for helmets, eyewear, headphones, and facial-fit products. Built from real human subjects with ancestry, gender, and age representation.",
    stageTitle: "Rotating head scan placeholder",
    stageSubtitle: "Commercial dataset preview",
    stageNote:
      "Integrated preview of high-resolution head geometry with paired facial statistics tables and demographic context.",
    statsTitle: "Facial and cranial tables",
    statsRows: [
      ["Head breadth", "5th / 50th / 95th"],
      ["Face width", "Percentile coverage"],
      ["Landmark map", "Validated indices"],
      ["Deliverables", "Mesh + CSV/XLSX"],
    ],
    overviewTitle: "3D scan previews and statistics tables, presented together.",
    overviewBody:
      "The head package is framed as a working product for design and engineering teams. Visual mesh review, quantified statistics, and demographic coverage are shown in one system rather than split across separate archives.",
    included: [
      "High-resolution head and face mesh exports",
      "Statistics tables for fit-relevant dimensions",
      "Anatomical landmarks aligned to scan geometry",
      "Demographic metadata for ancestry, gender, and age",
    ],
    deliverables: [
      "OBJ, STL, and PLY mesh exports",
      "CSV and XLSX statistics tables",
      "Preview renders and documentation sheets",
      "Package notes for commercial evaluation",
    ],
    demographicCoverage:
      "Coverage includes Black, White, and Chinese ancestry groups with balanced gender representation and a wide adult age range for global fit review.",
    demographics: [
      {
        title: "Ancestry",
        subtitle: "Representative population groups for global fit",
        rows: [
          { label: "Black ancestry", value: 34 },
          { label: "White ancestry", value: 33 },
          { label: "Chinese ancestry", value: 33 },
        ],
      },
      {
        title: "Gender",
        subtitle: "Balanced coverage across men and women",
        rows: [
          { label: "Women", value: 49 },
          { label: "Men", value: 48 },
          { label: "Additional / undisclosed", value: 3 },
        ],
      },
      {
        title: "Ages",
        subtitle: "Adult range for practical product fit decisions",
        rows: [
          { label: "18-29", value: 24 },
          { label: "30-44", value: 32 },
          { label: "45-59", value: 27 },
          { label: "60+", value: 17 },
        ],
      },
    ],
    applications: [
      {
        title: "Helmets",
        body: "Shape coverage for protective systems, padding interfaces, and retention geometry.",
      },
      {
        title: "Eyewear",
        body: "Useful for bridge fit, temple clearance, and facial contact across a global population.",
      },
      {
        title: "Headphones",
        body: "Supports band geometry, ear clearance, clamp force assumptions, and over-ear fit.",
      },
      {
        title: "Facial-fit products",
        body: "Helps resolve seal, interface pressure, and contour-driven fit around the face.",
      },
    ],
    ctaTitle: "Request the full head dataset package.",
    ctaBody:
      "Use the head library for global fit programs, industrial design reviews, and product validation workflows that need both geometry and statistics.",
    ctaPrimary: "Request Head Package",
    ctaSecondary: "Compare Data Packages",
  },
  hands: {
    key: "hands",
    label: "Hands",
    path: "/hands",
    type: "hand",
    dual: true,
    heroTitle: "Hand datasets for grip, control, and wearable fit.",
    heroBody:
      "High-resolution left and right hand scan bundles plus statistics tables for gloves, prosthetics, controllers, tools, and hand-based wearable products.",
    stageTitle: "Rotating hand scan placeholders",
    stageSubtitle: "Integrated left and right hand view",
    stageNote:
      "Preview how scan bundles and statistics tables sit together when grip dimensions, finger proportions, and enclosure fit all matter.",
    statsTitle: "Hand statistics tables",
    statsRows: [
      ["Palm breadth", "Percentile spread"],
      ["Finger length", "Left / right coverage"],
      ["Grip envelope", "Application summary"],
      ["Deliverables", "Mesh + CSV/XLSX"],
    ],
    overviewTitle: "Left and right hand scans with quantified fit data in the same package.",
    overviewBody:
      "The hand page combines mirrored scan previews, measurement tables, and demographic visibility so design teams can judge both tactile form and statistical range without context switching.",
    included: [
      "Left and right hand mesh bundles",
      "Statistics tables for grip and dimension planning",
      "Landmark references for key hand points",
      "Demographic metadata covering ancestry, gender, and age",
    ],
    deliverables: [
      "OBJ, STL, and PLY hand exports",
      "CSV and XLSX statistical summaries",
      "Mirrored preview renders for presentations",
      "Commercial licensing and package notes",
    ],
    demographicCoverage:
      "Coverage includes Black, White, and Chinese ancestry groups, balanced gender representation, and a broad age spread to support ergonomic and wearable fit decisions.",
    demographics: [
      {
        title: "Ancestry",
        subtitle: "Coverage for population-sensitive grip design",
        rows: [
          { label: "Black ancestry", value: 35 },
          { label: "White ancestry", value: 33 },
          { label: "Chinese ancestry", value: 32 },
        ],
      },
      {
        title: "Gender",
        subtitle: "Balanced for ergonomic and wearable applications",
        rows: [
          { label: "Women", value: 50 },
          { label: "Men", value: 47 },
          { label: "Additional / undisclosed", value: 3 },
        ],
      },
      {
        title: "Ages",
        subtitle: "Coverage suitable for consumer and medical products",
        rows: [
          { label: "18-29", value: 22 },
          { label: "30-44", value: 29 },
          { label: "45-59", value: 29 },
          { label: "60+", value: 20 },
        ],
      },
    ],
    applications: [
      {
        title: "Gloves",
        body: "Use hand geometry and tables to size soft goods, finger length, and enclosure volume.",
      },
      {
        title: "Wearables",
        body: "Helps design straps, contact points, and hand-worn form factors with more confidence.",
      },
      {
        title: "Prosthetics",
        body: "Supports realistic shaping, anthropometric reference, and dimensional planning.",
      },
      {
        title: "Controllers / tools",
        body: "Improves grip diameter, trigger reach, and comfort zones across a broader user range.",
      },
    ],
    ctaTitle: "Request the hand dataset package.",
    ctaBody:
      "A strong fit for ergonomic products, prosthetic research, controllers, sports equipment, and hand-based wearable systems.",
    ctaPrimary: "Request Hand Package",
    ctaSecondary: "Compare Data Packages",
  },
  ears: {
    key: "ears",
    label: "Ears",
    path: "/ears",
    type: "ear",
    heroTitle: "Ear datasets for retention, seal, and over-ear comfort.",
    heroBody:
      "High-resolution ear scan bundles and statistics tables focused on ear canal adjacency, back-of-ear geometry, ear angle, and the fit details that matter for audio and hearing products.",
    stageTitle: "Rotating ear scan placeholder",
    stageSubtitle: "Retention and over-ear fit view",
    stageNote:
      "Preview a productized ear dataset designed for earbuds, hearing devices, and over-ear interfaces where small geometry shifts change comfort.",
    statsTitle: "Ear statistics tables",
    statsRows: [
      ["Ear angle", "Percentile spread"],
      ["Concha depth", "Fit coverage"],
      ["Back-of-ear", "Retention planning"],
      ["Deliverables", "Mesh + CSV/XLSX"],
    ],
    overviewTitle: "Ear scans, measurement tables, and demographic context in one system.",
    overviewBody:
      "The ear package is positioned for design teams working on seal, retention, and over-ear interfaces. The page keeps geometry, measurement logic, and population coverage close together.",
    included: [
      "High-resolution ear mesh bundles",
      "Statistics tables for retention and contact dimensions",
      "Anatomical landmarks for auricular analysis",
      "Demographic metadata across ancestry, gender, and age",
    ],
    deliverables: [
      "OBJ, STL, and PLY ear exports",
      "CSV and XLSX table sets",
      "Preview imagery for design review",
      "Methodology and package support notes",
    ],
    demographicCoverage:
      "Coverage includes Black, White, and Chinese ancestry groups with gender and age representation suited to wearable audio, hearing, and over-ear product programs.",
    demographics: [
      {
        title: "Ancestry",
        subtitle: "Useful for retention and contour-sensitive design",
        rows: [
          { label: "Black ancestry", value: 34 },
          { label: "White ancestry", value: 33 },
          { label: "Chinese ancestry", value: 33 },
        ],
      },
      {
        title: "Gender",
        subtitle: "Balanced for audio and medical wearables",
        rows: [
          { label: "Women", value: 48 },
          { label: "Men", value: 49 },
          { label: "Additional / undisclosed", value: 3 },
        ],
      },
      {
        title: "Ages",
        subtitle: "Broad adult range for comfort and retention review",
        rows: [
          { label: "18-29", value: 23 },
          { label: "30-44", value: 31 },
          { label: "45-59", value: 27 },
          { label: "60+", value: 19 },
        ],
      },
    ],
    applications: [
      {
        title: "Earbuds",
        body: "Supports seal geometry, concha engagement, and retention fit across a wider population.",
      },
      {
        title: "Headphones",
        body: "Useful for cup clearance, clamp assumptions, and comfort around the outer ear.",
      },
      {
        title: "Hearing devices",
        body: "Helps teams consider back-of-ear routing, contour changes, and contact comfort.",
      },
      {
        title: "Eyewear / over-ear fit",
        body: "Supports products where the ear and temple interface must work together cleanly.",
      },
    ],
    ctaTitle: "Request the ear dataset package.",
    ctaBody:
      "Ideal for audio wearables, hearing devices, and eyewear programs that depend on retention, seating, and over-ear comfort.",
    ctaPrimary: "Request Ear Package",
    ctaSecondary: "Compare Data Packages",
  },
};

export const categoryList = Object.values(categories);

export const whyItMatters = [
  {
    title: "Wearables",
    body: "Design band, strap, and retention systems against real human geometry rather than a single average.",
  },
  {
    title: "Prosthetics",
    body: "Use measured anatomy and demographic visibility to support more informed fit and interface decisions.",
  },
  {
    title: "Eyewear",
    body: "Evaluate bridge, temple, and ear contact using high-resolution scan bundles plus relevant statistics tables.",
  },
  {
    title: "Audio products",
    body: "Understand over-ear and in-ear fit variation with retention- and comfort-focused anatomical datasets.",
  },
  {
    title: "Medical design",
    body: "Bring anatomical landmarks and representative populations into device development earlier.",
  },
  {
    title: "Ergonomic products",
    body: "Use hands and head geometry to improve grip, contact, comfort, and reach across global user groups.",
  },
];

export const productFeatures = [
  {
    title: "Global Sample",
    body: "Our extensive database includes 1000+ individuals of Chinese, White, and Black ancestry, representing a diverse spectrum of ages and genders.",
  },
  {
    title: "No Nonsense Pricing",
    body: "SIZEGlobal offers a straightforward one-time purchase model with no licensing fees or annual fees.",
  },
  {
    title: "100% Human Subjects",
    body: "No AI, no algorithms, no guesswork. We scan each subject by hand, often two or three times, until we achieve the highest possible level of accuracy. We offer clear visibility into the data's origins, along with the transparency and statistical accuracy that AI does not offer.",
  },
  {
    title: "Design Landmarks",
    body: "With 35 anatomical landmarks, your workflow becomes easier and more precise. These landmarks help designers and engineers understand exact positions on the body's geometry at all times.",
  },
  {
    title: "Scientific Rigor",
    body: "Each scan adheres to stringent anthropometric data collection protocols, ensuring data integrity, statistical accuracy, and scientific rigor.",
  },
  {
    title: "Unmatched Accuracy",
    body: "When precision matters, our 100% real human datasets deliver results that are second to none for fit-critical projects.",
  },
];

export const packageCatalog = [
  {
    title: "Heads dataset",
    path: "/heads",
    packageLabel: "Head package",
    summary:
      "Built for helmets, eyewear, headphones, and facial-fit products that rely on quantified head and facial geometry.",
    included: [
      "Head scan bundles",
      "Facial statistics tables",
      "Anatomical landmarks",
      "Demographic metadata",
    ],
    sampleSizes: "500 subjects, 1000 subjects, or custom",
    deliverables: "OBJ / STL / PLY, CSV / XLSX, documentation",
    demographicCoverage: "Black, White, and Chinese ancestry groups; gender and age representation",
  },
  {
    title: "Hands dataset",
    path: "/hands",
    packageLabel: "Hand package",
    summary:
      "Designed for gloves, prosthetics, controllers, tools, and ergonomic products that depend on grip and reach.",
    included: [
      "Left and right hand scan bundles",
      "Hand statistics tables",
      "Landmark references",
      "Demographic metadata",
    ],
    sampleSizes: "500 subjects, 1000 subjects, or custom",
    deliverables: "OBJ / STL / PLY, CSV / XLSX, mirrored previews",
    demographicCoverage: "Black, White, and Chinese ancestry groups; gender and age representation",
  },
  {
    title: "Ears dataset",
    path: "/ears",
    packageLabel: "Ear package",
    summary:
      "Created for earbuds, headphones, hearing devices, and over-ear systems where retention and contour matter.",
    included: [
      "Ear scan bundles",
      "Ear statistics tables",
      "Auricular landmarks",
      "Demographic metadata",
    ],
    sampleSizes: "500 subjects, 1000 subjects, or custom",
    deliverables: "OBJ / STL / PLY, CSV / XLSX, preview imagery",
    demographicCoverage: "Black, White, and Chinese ancestry groups; gender and age representation",
  },
  {
    title: "Full bundle",
    path: "/contact",
    packageLabel: "Full library",
    summary:
      "A combined commercial package for teams building multi-contact products across heads, hands, and ears.",
    included: [
      "Heads, Hands, and Ears datasets",
      "Statistics tables across all families",
      "Shared methodology documentation",
      "Commercial bundle support",
    ],
    sampleSizes: "500 subjects, 1000 subjects, or custom bundle strategy",
    deliverables: "All mesh and table formats plus package notes",
    demographicCoverage: "Unified ancestry, gender, and age representation across all product families",
  },
];

export const packageComparison = [
  {
    industry: "Wearable audio",
    best: "Ears dataset",
    support: "Heads dataset",
    reason: "Retention, seal, over-ear clearance, and headband fit all benefit from ear-first coverage with head support.",
  },
  {
    industry: "Protective sports gear",
    best: "Heads dataset",
    support: "Hands dataset",
    reason: "Helmet fit leads, with hand data useful for straps, closures, and user interaction points.",
  },
  {
    industry: "Prosthetics and assistive devices",
    best: "Hands dataset",
    support: "Heads or Ears depending on interface",
    reason: "Hand geometry is central, with additional anatomy selected by the device contact area.",
  },
  {
    industry: "Eyewear",
    best: "Heads dataset",
    support: "Ears dataset",
    reason: "Bridge and facial geometry drive fit, while the ear package improves temple and over-ear contact decisions.",
  },
  {
    industry: "XR and head-worn wearables",
    best: "Heads dataset",
    support: "Ears dataset",
    reason: "Head coverage informs band and facial fit, with ear geometry supporting audio and stability features.",
  },
  {
    industry: "Global product platforms",
    best: "Full bundle",
    support: "None required",
    reason: "Best for teams standardizing fit strategy across multiple contact zones and product families.",
  },
];

export const methodologyPillars = [
  {
    title: "Real human subjects",
    body: "Datasets are framed around real participants rather than synthetic averages, preserving the variation that matters in fit-sensitive products.",
  },
  {
    title: "Design for Diversity",
    body: "Ancestry, gender, and age representation remain visible so global fit decisions are grounded in population range, not just a median user.",
  },
  {
    title: "Anthropometric rigor",
    body: "Anatomical landmarks and repeatable statistics tables help teams connect visual scan review to measurable design criteria.",
  },
  {
    title: "Transparency",
    body: "The site positions methodology, coverage, and package contents clearly so the data feels credible and commercially usable.",
  },
];

export const methodologySteps = [
  {
    step: "01",
    title: "Recruit and document",
    body: "Real human subjects are organized with traceable demographic metadata covering ancestry, gender, and age representation.",
  },
  {
    step: "02",
    title: "Capture and align",
    body: "High-resolution scan capture, cleanup, and alignment produce a reliable geometry set for product review and downstream analysis.",
  },
  {
    step: "03",
    title: "Landmark and quantify",
    body: "Anatomical landmarks and statistics tables convert visual geometry into repeatable design and engineering inputs.",
  },
  {
    step: "04",
    title: "Package and deliver",
    body: "Commercial dataset packages are delivered as scan bundles, tables, documentation, and evaluation paths for sample review.",
  },
];

export const aboutResources = [
  {
    title: "Methodology sheets",
    body: "Space for capture notes, anatomical definitions, and repeatability documentation.",
  },
  {
    title: "Publications",
    body: "Space for research references, validation studies, and technical background.",
  },
  {
    title: "Technical contact",
    body: "Route design and engineering questions into a purchase conversation or sample review.",
  },
];

export const contactPaths = [
  {
    title: "Request a package sheet",
    body: "See exactly what is included for heads, hands, ears, or the full bundle before purchase.",
    cta: "Request Package Sheet",
  },
  {
    title: "Request a sample scan",
    body: "Review quality, mesh fidelity, and file structure with a non-commercial sample asset.",
    cta: "Request Sample",
  },
  {
    title: "Start a purchase conversation",
    body: "Discuss package size, demographic coverage, and whether 500, 1000, or custom is the right fit.",
    cta: "Discuss Purchase",
  },
];

export const purchaseSteps = [
  {
    step: "01",
    title: "Choose a dataset family",
    body: "Heads, Hands, Ears, or a combined bundle depending on where the product meets the body.",
  },
  {
    step: "02",
    title: "Review samples and scope",
    body: "Confirm fit, deliverables, and demographic needs with sample files and package sheets.",
  },
  {
    step: "03",
    title: "Purchase the commercial package",
    body: "Finalize the dataset as a one-time purchase with the appropriate sample size and deliverables.",
  },
];

export const footerGroups = [
  {
    title: "Datasets",
    links: [
      { label: "Heads", path: "/heads" },
      { label: "Hands", path: "/hands" },
      { label: "Ears", path: "/ears" },
      { label: "Packages", path: "/packages" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About / Methodology", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
  },
];
