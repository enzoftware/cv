import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { MediumIcon } from "@/components/icons/MediumIcon";

export const RESUME_DATA = {
  name: "Enzo Lizama Paredes",
  initials: "EL",
  location: "Lima, Peru 🇵🇪 (GMT -5)",
  locationLink: "https://www.google.com/maps/place/Lima",
  about:
    "Mobile software engineer building impactful apps. User-centric, detail-oriented, and passionate about crafting delightful experiences. Fueled by 🍺 and a love for 🐈‍⬛.",
  summary:
    "5+ years weaving cross-platform mobile marvels with Dart & Flutter. From pixel-perfect UIs to rock-solid performance, I always do my best to craft engaging experiences that captivate users. Teamwork and communication thrive in my remote orbit, ensuring quality every step of the way.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22333076?v=4",
  personalWebsiteUrl: "https://github.com/enzoftware",
  contact: {
    email: "lizama.enzo@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/enzoftware",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/enzolizama/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/enzoftware",
        icon: XIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@enzoftware",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Peruana de Ciencias Aplicadas",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2015",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Superformula",
      link: "https://www.superformula.com/",
      badges: ["Remote"],
      title: "Senior Flutter Developer → Team Lead",
      start: "2021",
      end: "Present",
      description: "",
    },
    {
      company: "Go Social",
      link: "https://www.recsapp.com/",
      badges: ["Remote"],
      title: "Senior Flutter Developer",
      start: "2021",
      end: "2021",
      description:
        "Flutter application focused on share events happen near you. On the technical side I implemented most of the test coverage on the app going from under 20% to near 90% of code coverage inside the app. 🤖",
    },
    {
      company: "JustoMX",
      link: "https://justo.mx/",
      badges: ["Remote"],
      title: "Android Developer",
      start: "2020",
      end: "2021",
      description:
        "Working with an amazing mobile team on an shopping experience for a mexican startup. Technologies: Android, Kotlin, GraphQL 🇲🇽",
    },
    {
      company: "Mandu",
      link: "https://latam.visma.com/",
      badges: [],
      title: "Fullstack Developer",
      start: "2019",
      end: "2020",
      description:
        "Working with Flutter, Node, and Vue tyo build a internal platform for one of the biggest national companies. 🏦",
    },
    {
      company: "Wibo",
      link: "https://www.soywibo.com/",
      badges: [],
      title: "Flutter Developer",
      start: "2019",
      end: "2020",
      description:
        "Working as a Flutter developer to build an app & web dashboard for an early stage startup using Flutter, releasing the app in record time. 🥗",
    },
    {
      company: "New Transport S.A.",
      link: "https://www.soywibo.com/",
      badges: [],
      title: "Freelancer",
      start: "2018",
      end: "2019",
      description:
        "As a solo developer I successfully launched a cross-platform charge truck tracking app using Flutter. This app boasts features like GPS location and route tracking, helping the company improve operational efficiency and driver safety. 🚛",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "Android",
    "Kotlin",
    "Firebase",
    "GraphQL",
    "Typescript",
    "Git",
  ],
  projects: [
    {
      title: "Hotelyn",
      techStack: [
        "Open Source Project",
        "Flutter",
        "Dart",
        "Stream SDK",
        "GraphQL",
        "Firebase",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "Hotelyn GitHub",
        href: "https://github.com/enzoftware/hotelyn",
      },
    },
    {
      title: "Flutter Accesibility",
      techStack: ["Side Project", "Flutter", "Dart", "Accesibility"],
      description:
        "Sample Flutter application to demostrate accesibility into apps and how to use different screen readers,",
      link: {
        label: "Flutter Accesibility GitHub",
        href: "https://github.com/enzoftware/flutter_accessibility_expense_tracker",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;
