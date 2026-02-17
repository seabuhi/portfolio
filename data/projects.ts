export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    codeUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Full-stack marketplace with real-time inventory, payment integration, and admin dashboard built with Next.js and Spring Boot.",
        tags: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/ecommerce",
        featured: true,
    },
    {
        id: "2",
        title: "Mobile Fitness Tracker",
        description: "Cross-platform fitness app with workout tracking, progress analytics, and social features using Flutter.",
        tags: ["Flutter", "Dart", "Firebase", "REST API"],
        liveUrl: "https://play.google.com/store",
        codeUrl: "https://github.com/seabuhi/fitness-tracker",
        featured: true,
    },
    {
        id: "3",
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, team collaboration, and Kanban boards.",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/task-manager",
        featured: true,
    },
    {
        id: "4",
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, interactive maps, and location-based alerts.",
        tags: ["TypeScript", "React", "OpenWeather API", "Tailwind"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/weather-app",
    },
    {
        id: "5",
        title: "Blog CMS",
        description: "Headless CMS with markdown support, media management, and SEO optimization.",
        tags: ["Next.js", "Contentful", "GraphQL", "Vercel"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/blog-cms",
    },
    {
        id: "6",
        title: "Chat Application",
        description: "Real-time messaging app with end-to-end encryption, file sharing, and video calls.",
        tags: ["Kotlin", "WebRTC", "Firebase", "Material Design"],
        codeUrl: "https://github.com/seabuhi/chat-app",
    },
];
