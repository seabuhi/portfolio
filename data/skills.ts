export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
        category: "Mobile",
        skills: ["Flutter", "Dart", "Kotlin", "Android SDK", "iOS Development"],
    },
    {
        category: "Backend",
        skills: ["Spring Boot", "Java", "Node.js", "Express", "REST API", "GraphQL"],
    },
    {
        category: "Database",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"],
    },
    {
        category: "DevOps & Tools",
        skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Nginx"],
    },
    {
        category: "Other",
        skills: ["Agile", "Testing", "UI/UX Design", "Performance Optimization"],
    },
]; export const profile = {
    name: "Seabuhi",
    title: "Full-Stack Developer • Mobile (Flutter/Kotlin) • Backend (Spring Boot) • Frontend(Next.js,React,HTML,CSS)",
    bio: "Passionate developer crafting elegant solutions across web, mobile, and backend technologies.",
    email: "seabuhikhazimzada@gmail.com",
    github: "https://github.com/seabuhi",
    linkedin: "https://linkedin.com/in/seabuhi",
    cvUrl: "/cv.pdf",
    avatar: "/photo.jpeg",
    status: "Available for work",
};

