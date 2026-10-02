export const projects = [
  {
    id: 1,
    number: "01",
    title: "GenLink — Multi-Domain Mobile Lifestyle Application",
    shortTitle: "GenLink",
    category: "Mobile Product Design & Design System",
    role: "Lead UI/UX & Product Designer, Front-End Prototyper",
    timeline: "3 Months (Iterative Design & Prototype)",
    platform: "Mobile iOS & Android, Responsive Web",
    tools: ["Figma", "FigJam", "React", "Tailwind CSS", "Framer"],
    description: "A multi-domain lifestyle application bringing together generational communication, community engagement, and simplified daily utilities through high-contrast accessible design tokens, streamlined user flows, and dual-mode interface personalization.",
    summary: "Bridging generational communication and multi-domain daily utilities with accessible typography, low-friction user flows, and an atomic design system built for effortless developer handoff.",
    tags: ["UI/UX", "Product Design", "User Flow", "Wireframing", "Figma", "Prototype", "Design System"],
    slug: "genlink",
    featured: true,
    accentColor: "#38BDF8",
    caseStudy: {
      overview: "GenLink is a multi-domain lifestyle and communication mobile application created to solve real navigation overload and accessibility barriers. Mobile interfaces frequently bundle community feeds, chat, utilities, and daily tasks into convoluted menus. GenLink structures these distinct domains into clean, dedicated user flows with zero cognitive fatigue.",
      productGoal: "Design an intuitive mobile lifestyle experience that eliminates cognitive friction across diverse user personas while maintaining a modern, engaging interface and a scalable atomic design system.",
      myRole: "Sole Product Designer and Front-End Prototyper. Conducted user journey mapping, designed paper wireframes, developed an accessible high-contrast atomic design system in Figma, built interactive micro-prototypes, and documented component specifications for React/Tailwind implementation.",
      problems: [
        {
          title: "Overwhelming Navigation Hierarchy",
          description: "Multi-domain mobile apps often hide key utilities beneath dense navigation trees, leaving users confused about how to jump between community, tasks, and communication."
        },
        {
          title: "Inaccessible Touch Targets & Low Contrast",
          description: "Small icon-only buttons without text labels and faint gray secondary text (under 3:1 contrast ratio) lead to frequent accidental taps and frustration."
        },
        {
          title: "Disparate Generational Mental Models",
          description: "While younger users navigate fluid gesture-based interactions intuitively, older adults rely on clear visual signifiers, persistent labels, and explicit confirmation feedback."
        }
      ],
      userFlows: [
        {
          stage: "1. One-Tap Family & Community Hub",
          action: "Open App → Dedicated Hub with direct photo avatars and one-tap voice note / video call actions."
        },
        {
          stage: "2. Guided Voice & Photo Sharing",
          action: "Tap 'Share Moment' → Big tactile shutter button → Clear preview with verbal confirmation prompt → Instant dispatch."
        },
        {
          stage: "3. Dual-View Mode Switcher",
          action: "Settings → Toggle 'Comfort Mode' (amplified 18pt typography, high contrast, text-labeled buttons) vs 'Standard Mode' (compact view)."
        }
      ],
      wireframeNotes: "Initial wireframes explored three layout configurations. Testing paper prototypes revealed that horizontal tab carousels caused users to lose track of hidden off-screen content. We shifted to a persistent bottom navigation with only three primary actions: 'Family & Hub', 'Messages', and 'Utilities & Help'.",
      designDecisions: [
        {
          decision: "Comfort Mode vs Standard Mode",
          rationale: "Rather than forcing a single compromise UI, GenLink introduces an adaptive layout. Users who prefer rich dense layouts can use Standard Mode, while those seeking clarity enjoy simplified high-affordance cards with 48px+ touch targets."
        },
        {
          decision: "Text-Accompanied Icons",
          rationale: "Every functional icon is paired with explicit text labels (e.g., 'Call', 'Photos', 'Back') to eliminate ambiguous guesswork."
        },
        {
          decision: "Destructive Action Safeguards",
          rationale: "Accidental deletion of messages or photos is prevented by two-step confirmation modals with unambiguous language ('Keep Photo' vs 'Delete Photo')."
        }
      ],
      designSystem: {
        typography: "Inter typography scale with standardized modular ramps: 32px Display (Bold), 24px Headline, 18px Body (Comfort Mode), 16px Body (Standard), 14px Caption. Strict line-height ratio of 1.5x minimum.",
        colors: [
          { name: "Brand Primary", hex: "#0284C7", role: "Primary action buttons and brand identity" },
          { name: "Accessible High-Contrast Navy", hex: "#0F172A", role: "Deep background & crisp text readability" },
          { name: "Safety Emerald", hex: "#059669", role: "Positive status, online family presence, confirmation" },
          { name: "Warm Amber", hex: "#D97706", role: "Gentle reminders and time-sensitive alerts" },
          { name: "Surface Neutral", hex: "#F8FAFC", role: "High-contrast card backgrounds in light theme" }
        ],
        components: [
          "Avatar Pill Card (Online indicator, relation badge, quick call action)",
          "Voice Note Player with tactile scrub bar and big play/pause button",
          "Tactile Keypad with auditory and haptic feedback confirmation",
          "Modal Dialog with high-contrast dismissal buttons"
        ]
      },
      devHandoff: "Because I have a Computer Science and front-end engineering background, I structured Figma components to match React component architecture: Props defined in Figma (variant: 'comfort' | 'standard', size: 'lg' | 'md', status: 'online' | 'away') map 1:1 to React component props. Tailwind CSS classes were specified for every token to guarantee zero friction during front-end handoff.",
      reflection: [
        "Designing for accessibility is not a restrictive constraint—it is the foundation of clear product design. The solutions created for clarity (larger touch targets, clearer text, explicit labels) made the product faster and more pleasant for all users.",
        "Bridging UI design with React and Tailwind code from day one prevented layout refactors and ensured that every visual decision was achievable with production web standards."
      ]
    }
  },
  {
    id: 2,
    number: "02",
    title: "Product UI Redesign — PulsePay Financial Workflow Optimization",
    shortTitle: "Product UI Redesign",
    category: "Product UI Redesign & Web Experience",
    role: "UI/UX Designer, Front-End Developer",
    timeline: "2 Months (Research, Design Tokens & Implementation)",
    platform: "Desktop Web (1440px) & Responsive Mobile (390px)",
    tools: ["Figma", "Tailwind CSS", "React", "Lucide Icons"],
    description: "A comprehensive product UI redesign streamlining multi-currency conversions and real-time transaction reconciliation for remote contractors in Southeast Asia through disciplined information hierarchy and dark-mode design tokens.",
    summary: "Clear data visual hierarchy, dark mode design tokens, and modular financial dashboard widgets tailored for rapid transaction verification.",
    tags: ["Product Design", "UI/UX", "Design System", "Responsive Design", "React", "Tailwind CSS"],
    slug: "product-ui-redesign",
    featured: true,
    accentColor: "#818CF8",
    caseStudy: {
      overview: "Managing cross-border freelance revenue involves juggling currency volatility, unpredictable platform fees, and fragmented bank statements. This product redesign centralized international payments into a unified, high-clarity financial dashboard.",
      productGoal: "Provide freelancers with immediate financial transparency through clear visual charts, one-click invoice generation, and real-time fee breakdowns.",
      myRole: "End-to-end UX flow design, high-fidelity dark-mode UI design, interactive component token architecture, and responsive React frontend layout.",
      problems: [
        {
          title: "Hidden Exchange Fees",
          description: "Freelancers struggle to determine the net payout amount due to obscured intermediary banking charges."
        },
        {
          title: "Complex Multi-Account Data Clutter",
          description: "Traditional banking dashboards present dense data tables with poor contrast, making it easy to miss unpaid invoice status."
        }
      ],
      userFlows: [
        {
          stage: "1. Quick Financial Snapshot",
          action: "Main Dashboard → Total Balance Overview with instant currency converter widget."
        },
        {
          stage: "2. Transparent Transfer Calculation",
          action: "Send Funds → Live mid-market rate preview with upfront fee breakdown and estimated deposit time."
        }
      ],
      wireframeNotes: "Explored dual-column vs card-grid dashboard layouts. Grid cards allowed users to prioritize balance cards and recent transactions without vertical scrolling fatigue.",
      designDecisions: [
        {
          decision: "High-Contrast Dark Theme",
          rationale: "Freelancers spending long hours on screens requested a dark UI. Developed a dark theme with slate neutrals (#0B0F17) to reduce glare while keeping financial indicators crisp."
        },
        {
          decision: "Visual Currency Pills",
          rationale: "Standardized currency identifiers (USD, KHR, THB, SGD) with national flag tokens and rounded pill badges for instant recognition."
        }
      ],
      designSystem: {
        typography: "JetBrains Mono for numerical data and transaction amounts to guarantee vertical alignment; Inter for headings and UI controls.",
        colors: [
          { name: "Slate Canvas", hex: "#0B0F17", role: "Primary dark background" },
          { name: "Surface Card", hex: "#141C2E", role: "Elevated financial widgets" },
          { name: "Indigo Accent", hex: "#6366F1", role: "Primary actions and graph highlights" },
          { name: "Profit Emerald", hex: "#10B981", role: "Incoming payments & positive rate trends" }
        ],
        components: [
          "Financial KPI Card (Total Revenue, Pending, Net Available)",
          "Interactive Exchange Rate Sparkline Chart",
          "Transaction Status Badge (Settled, Processing, Flagged)"
        ]
      },
      devHandoff: "Documented spacing grids (8px base increment) and CSS Grid template areas, ensuring effortless translation to Tailwind grid classes.",
      reflection: [
        "Numerical information demands disciplined typography: monospaced numbers prevent jitter during live updates.",
        "Designing dark UI requires intentional surface elevation layers rather than flat black backgrounds."
      ]
    }
  },
  {
    id: 3,
    number: "03",
    title: "Responsive Web Experience — EcoTrack Campus Resource Discovery",
    shortTitle: "Responsive Web Experience",
    category: "Responsive Web Experience & Interaction Design",
    role: "UI/UX Researcher & Designer, Frontend Prototyper",
    timeline: "6 Weeks",
    platform: "Responsive Web & Mobile Application (390px - 1440px)",
    tools: ["Figma", "FigJam", "Tailwind CSS", "Responsive Design"],
    description: "A responsive campus discovery experience empowering students to locate available energy-efficient study spaces in real time, view floorplan heatmaps, and participate in campus sustainability initiatives across devices.",
    summary: "Gamified campus resource discovery with intuitive floorplan mapping and micro-interactions designed to promote sustainable student habits.",
    tags: ["Responsive Design", "Mobile-First", "Wireframing", "Figma", "Micro-interactions", "Tailwind CSS"],
    slug: "responsive-web-experience",
    featured: true,
    accentColor: "#34D399",
    caseStudy: {
      overview: "University campuses consume massive amounts of energy with underutilized air-conditioned rooms and scattered recycling stations. EcoTrack provides real-time occupancy and environmental metrics to guide students to optimal campus spots.",
      productGoal: "Encourage sustainable campus habits by making eco-friendly choices tangible and rewarding through real-time occupancy maps and social team milestones.",
      myRole: "User research through peer observation, wireframing, interactive Figma prototype with animated micro-interactions, and design token documentation.",
      problems: [
        {
          title: "Uninformed Study Room Selection",
          description: "Students walk between academic buildings only to find fully occupied or locked rooms, wasting time and campus resources."
        },
        {
          title: "Lack of Tangible Feedback",
          description: "Individual recycling efforts feel inconsequential without visible group impact."
        }
      ],
      userFlows: [
        {
          stage: "1. Campus Heatmap Exploration",
          action: "Search Study Space → Filter by 'Quiet', 'AC Active', 'Natural Light' → Tap room pin for live occupancy rate."
        },
        {
          stage: "2. Green Action Log",
          action: "Scan QR code at recycling hub → Instant point verification → Campus leaderboard update."
        }
      ],
      wireframeNotes: "Iterated on bottom sheet interaction for room details. Testing showed students preferred a half-sheet drawer that keeps the interactive campus map visible in the background.",
      designDecisions: [
        {
          decision: "Color-Coded Capacity Rings",
          rationale: "Circular progress rings provide glanceable capacity feedback (Green: <50%, Amber: 50-80%, Red: Full)."
        },
        {
          decision: "Tactile Celebration Feedback",
          rationale: "Designed subtle confetti micro-interaction upon logging eco-habits to reinforce positive psychological loops."
        }
      ],
      designSystem: {
        typography: "Inter Sans with bold display headers and rounded button pills.",
        colors: [
          { name: "Eco Emerald", hex: "#10B981", role: "Primary green brand accent" },
          { name: "Forest Dark", hex: "#064E3B", role: "High-contrast container surfaces" },
          { name: "Off-White Clean", hex: "#F8FAFC", role: "Clean card background" }
        ],
        components: [
          "Live Room Occupancy Pill",
          "Map Pin Overlay with dynamic status dot",
          "Impact Milestone Card"
        ]
      },
      devHandoff: "Exported SVG map vectors and defined mobile safe-area insets for notched devices.",
      reflection: [
        "Small friction points in mobile navigation dramatically affect student adoption rates. Keeping the primary action within one thumb tap was key."
      ]
    }
  }
];
