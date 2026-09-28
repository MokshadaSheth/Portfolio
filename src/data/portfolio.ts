// ALL editable content lives here. Values starting with "ADD_" or containing "YOUR_" are treated as empty (buttons hidden).
export type Video = { type: "youtube" | "mp4"; url?: string; src?: string; title?: string; poster?: string };
export type Project = {
  id: string; title: string; shortDescription: string; description: string; date: string; technologies: string[];
  github?: string; liveDemo?: string; caseStudy?: string; featuredImage?: string; images?: string[]; videos?: Video[]; highlights?: string[];
};
export type DanceMedia = { type: "image" | "youtube" | "mp4" | "link"; src?: string; url?: string; title?: string; details?: string };

export const isSet = (v?: string) => !!v && !v.startsWith("ADD_") && !v.includes("YOUR_");

export const portfolioData = {
  personal: {
    name: "Sanskruti Patil",
    title: "Software Developer · AI Enthusiast · Computer Engineering Student",
    description: "Building intelligent applications, scalable backend systems, and AI-powered experiences.",
    email: "sanskruti885@gmail.com", phone: "9403705702",
    linkedin: "ADD_LINKEDIN_LINK_HERE", github: "ADD_GITHUB_LINK_HERE", resume: "/resume.pdf", photo: "/profile.png", // put your photo in /public and set the path here ("" to show initials)
  },
  hero: { chips: ["AI", "RAG", "APIs", "Cloud", "DevOps", "Full Stack"] },
  about: {
    text: [
      "Sanskruti is pursuing B.E. in Computer Engineering at Pune Institute of Computer Technology, Pune, with expected graduation in 2027 and a third-year CGPA of 9.91.",
      "She previously completed a Diploma in Computer Technology from Sanjivani K. B. P. Polytechnic with 97.26%, and completed Visharad Purna in Bharatanatyam with First Class.",
    ],
    stats: [{ value: "9.91", label: "CGPA" }, { value: "97.26%", label: "Diploma" }, { value: "2027", label: "Expected Graduation" }],
  },
  experience: [
    { company: "Barclays", role: "Software Developer Intern", period: "June 2026 – August 2026", points: ["Built an AI-Ops solution to automate troubleshooting of Vault onboarding issues on BCP.", "Built and deployed an OpenShift service for accessing OpenShift data."] },
    { company: "Kingdom Services", role: "Backend Developer", period: "February 2025 – June 2025", points: ["Built automated data scraper for RPA workflow using Node.js.", "Developed trading bot to place orders via APIs."] },
    { company: "Kingdom Services", role: "MEAN Developer", period: "May 2024 – July 2024", points: ["Created Admin Module using MEAN stack to manage user roles and perform CRUD operations."] },
  ],
  projects: [
    { id: "shopwise-ai", title: "ShopWise AI – Multi-Agent Shopping Assistant", shortDescription: "AI shopping assistant that compares products and recommends through an agentic workflow.",
      description: "Developed an AI-powered shopping assistant using LangChain and LLMs to understand user requirements, compare products, and generate personalized shopping recommendations through an agentic workflow.",
      date: "June 2025", technologies: ["Python", "LangChain", "Google Gemini", "Prompt Engineering", "Agentic AI", "Streamlit", "Python-dotenv"],
      github: "ADD_GITHUB_LINK_HERE", liveDemo: "ADD_LIVE_DEMO_LINK_HERE", caseStudy: "",
      featuredImage: "/projects/shopwise-ai/cover.jpg", images: ["/projects/shopwise-ai/screenshot-1.jpg", "/projects/shopwise-ai/screenshot-2.jpg"],
      videos: [{ type: "youtube", url: "ADD_YOUTUBE_URL_HERE", title: "ShopWise AI Demo" }],
      highlights: ["Understands user requirements", "Compares products", "Personalized recommendations via an agentic workflow"] },
    { id: "trading-bot", title: "Automated Trading Bot", shortDescription: "Backend for an automated trading bot with built-in risk management.",
      description: "Built backend for an automated trading bot integrating with a trading API to fetch candle data, place margin orders, and implement dynamic stop-loss/take-profit for risk management.",
      date: "February 2025 – April 2025", technologies: ["Node.js", "JavaScript", "Axios", "Dotenv", "REST API"],
      github: "ADD_GITHUB_LINK_HERE", liveDemo: "", featuredImage: "/projects/trading-bot/cover.jpg", images: [], videos: [],
      highlights: ["Fetches candle data from a trading API", "Places margin orders", "Dynamic stop-loss / take-profit"] },
    { id: "pashu-swasth-dhooth", title: "Pashu Swasth Dhooth", shortDescription: "Multi-page platform for cattle trading, animal care and veterinary information.",
      description: "Built a multi-page platform for buying/selling cattle (cow, buffalo), accessing home remedies, basic animal care, precautionary articles, and managing veterinary doctor information.",
      date: "January 2025 – April 2025", technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Axios", "Validator", "Dotenv", "Bcrypt"],
      github: "ADD_GITHUB_LINK_HERE", liveDemo: "ADD_LIVE_DEMO_LINK_HERE", featuredImage: "/projects/pashu-swasth-dhooth/cover.jpg", images: [], videos: [],
      highlights: ["Buy/sell cattle (cow, buffalo)", "Home remedies and basic animal care", "Veterinary doctor information management"] },
  ] as Project[],
  skills: {
    "Languages": ["C++", "TypeScript", "Java", "RPA (Robotic Process Automation)"],
    "Database": ["MongoDB", "MySQL"],
    "Libraries & Frameworks": ["Node.js", "Angular", "React", "Express.js", "Mongoose", "body-parser", "Cors", "Helmet", "RxJS Cache", "JWT", "Puppeteer", "delta-rest-client"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "jQuery", "JSON"],
    "Web/Application Server": ["Node", "REST API"],
    "Version Control": ["Git"],
    "AI / Generative AI": ["Agentic AI", "RAG", "Prompt Engineering", "LLM Orchestration", "AI Agents", "Multi-Agent Systems", "Vector Embeddings", "Semantic Search", "Tool Calling", "Context Engineering"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "OpenShift", "Helm", "Nexus Repository", "CI/CD"],
  } as Record<string, string[]>,
  aiPipeline: ["User Intent", "Prompt / Context", "RAG / Semantic Search", "AI Agents", "Tool Calling", "LLM", "Application"],
  achievements: [
    { title: "National Level Paper Presentation", result: "Runner Up", year: "2024" },
    { title: "Inter College Speech Competition", result: "Winner", year: "2023" },
    { title: "Inter College Gathering Dance Competition", result: "Winner", year: "2023" },
  ],
  leadership: [
    { role: "President", org: "Debate Society (DEBSOC), PICT", period: "2025–26" },
    { role: "General Secretary", org: "S. K. B. P. Polytechnic", period: "2023–24" },
  ],
  media: [] as DanceMedia[],
  beyondCode: {
    subtitle: "Discipline, expression, and storytelling beyond software.",
    credential: "Visharad Purna in Bharatanatyam · Akhil Bharatiya Gandharva Mahavidyalaya Anagar · 2024 · First Class",
    // Add photos/videos here: { type:"image", src:"/media/dance/performance1.jpg", title:"Performance" } or { type:"youtube", url:"https://youtu.be/ID" }
    danceMedia: [
      { type: "image", src: "ADD_DANCE_PHOTO_PATH", title: "Performance" },
      { type: "youtube", url: "ADD_YOUTUBE_URL" },
    ] as DanceMedia[],
  },
};
