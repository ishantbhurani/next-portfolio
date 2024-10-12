import deluxxeImg from "@/public/deluxxeImg.png";
import flutterTodoImg from "@/public/flutterTodoImg.jpg";
import moneytrackerImg from "@/public/moneytrackerImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [
  {
    title: "Money Tracker",
    description:
      "A fully responsive MERN stack app to track your daily expenses. It supports JWT based email & password authentication.",
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "TypeScript",
    ],
    url: "https://money-tracker-client.netlify.app",
    imageUrl: moneytrackerImg,
  },
  {
    title: "DeLuxxe",
    description:
      "A fully responsive e-commerce app. It support Google authentication. It has a product carousel, products list, and slide-in cart modal.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    url: "https://deluxxe.netlify.app",
    imageUrl: deluxxeImg,
  },
  {
    title: "Flutter Todo App",
    description:
      "An elegant Todo App built with Flutter. It supports dark mode, provider, and data persistence with Isar.",
    tags: ["Flutter", "Provider", "Isar", "Shared Preferences"],
    url: "https://github.com/ishantbhurani/flutter-todo-app",
    imageUrl: flutterTodoImg,
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Prisma",
  "Git",
  "GitHub",
  "VS Code",
  "Android Studio",
  "Sublime",
  "Postman",
  "Flutter",
  "Hive",
  "Arduino",
  "Dart",
  "Python",
  "C/C++",
  "JavaScript",
  "HTML/CSS",
  "Internet of Things (IoT)",
] as const;