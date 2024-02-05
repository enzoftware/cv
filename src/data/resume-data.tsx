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
    "Devoted mobile software developer constructing impactful applications with a user-focused approach. Meticulous and fervent about shaping delightful user experiences. Enthusiastic ⚽️ aficionado.",
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
      description:
        "As a key contributor to an app with over one million users, I actively developed pivotal features using Flutter, specifically focusing on enhancing the Rewards feature within the MGM Resorts app. In my role as a Team Lead, I assumed responsibility for incident management across the entire application, ensuring seamless functionality and user satisfaction. Additionally, I played a crucial role in the hiring process, serving on the interview team to identify and onboard new developers, thereby contributing to the growth and success of the team. ",
    },
    {
      company: "Go Social",
      link: "https://www.recsapp.com/",
      badges: ["Remote"],
      title: "Senior Flutter Developer",
      start: "2021",
      end: "2021",
      description:
        "I being part of the development of a Flutter application with a primary focus on seamlessly sharing local events. From a technical standpoint, I significantly elevated the app's reliability by implementing robust testing strategies. This initiative led to a remarkable enhancement in test coverage, escalating from under 20% to nearly 90% of the app's code coverage. 🤖",
    },
    {
      company: "JustoMX",
      link: "https://justo.mx/",
      badges: ["Remote"],
      title: "Android Developer",
      start: "2020",
      end: "2021",
      description:
        "Collaborating with an exceptional mobile team, I actively contributed to crafting an outstanding shopping experience for a Mexican startup. Leveraging technologies such as Android, Kotlin, and GraphQL, our work aimed to redefine the e-commerce landscape, providing users with a seamless and innovative platform. 🇲🇽",
    },
    {
      company: "Mandu",
      link: "https://latam.visma.com/",
      badges: [],
      title: "Fullstack Developer",
      start: "2019",
      end: "2020",
      description:
        "Collaborating with Flutter, Node, and Vue, I spearheaded the development of an internal platform for one of the largest national companies, seamlessly integrating cutting-edge technologies. This endeavor involves creating a robust and sophisticated system that addresses the unique needs of the organization, contributing to the enhancement of its operational capabilities. 🏦",
    },
    {
      company: "Wibo",
      link: "https://www.soywibo.com/",
      badges: [],
      title: "Flutter Developer",
      start: "2019",
      end: "2020",
      description:
        "In the role of a Flutter developer, I played a pivotal part in crafting both a dynamic app and a web dashboard for an early-stage startup. Demonstrating efficiency and expertise, I work with the team to release the app in record time. This achievement showcase my commitment to delivering high-quality solutions within tight timelines. 🚀",
    },
    {
      company: "New Transport S.A.",
      link: "https://www.soywibo.com/",
      badges: [],
      title: "Freelancer",
      start: "2018",
      end: "2019",
      description:
        "As the sole developer for a dynamic cross-platform charge truck tracking app built with Flutter, I achieved a successful launch that significantly elevated operational efficiency and enhanced driver safety for the company. The app seamlessly incorporates GPS location and route tracking functionalities, empowering the organization with real-time insights into fleet movements 🚛 ",
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
      techStack: ["Open Source Project", "Flutter", "Dart", "Firebase"],
      description:
        "Explore a sleek Flutter demo for a hotel booking app 🏩 ❤️ Witness the synergy of code and care, delivering a polished user interface.",
      link: {
        label: "Hotelyn GitHub",
        href: "https://github.com/enzoftware/hotelyn",
      },
    },
    {
      title: "Flutter Accesibility",
      techStack: ["Side Project", "Flutter", "Dart", "Accesibility"],
      description:
        "Explore the importance of making apps universally accessible. Dive into the code to witness the principles and practices of building more inclusive applications.",
      link: {
        label: "Flutter Accesibility GitHub",
        href: "https://github.com/enzoftware/flutter_accessibility",
      },
    },
    {
      title: "Android IPTV",
      techStack: ["Side Project", "Android", "Java", "Kotlin"],
      description:
        "Explore the intricacies of parsing M3U/M3U8 files from the internet, offering a hands-on example of seamless integration.",
      link: {
        label: "android_iptv",
        href: "https://github.com/enzoftware/android_iptv",
      },
    },
  ],
} as const;
