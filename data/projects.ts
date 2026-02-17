export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    codeUrl?: string;
    image?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: "1",
        title: "Savelya",
        description: "Marketplace + chat + payments built with Spring Boot and Next.js. Full-featured e-commerce platform with real-time messaging and secure payment integration.",
        tags: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket"],
        liveUrl: "https://savelya.com",
        codeUrl: "https://github.com/seabuhi/savelya",
        image: "/projects/Gemini_Generated_Image_khdtnhkhdtnhkhdt.png",
        featured: true,
    },
    {
        id: "2",
        title: "Mobile Fitness Tracker",
        description: "Cross-platform fitness app with workout tracking, progress analytics, and social features using Flutter.",
        tags: ["Flutter", "Dart", "Firebase", "REST API"],
        liveUrl: "https://play.google.com/store",
        codeUrl: "https://github.com/seabuhi/fitness-tracker",
        image: "/projects/fitness.png",
        featured: true,
    },
    {
        id: "3",
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, team collaboration, and Kanban boards.",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/task-manager",
        image: "/projects/taskmanager.png",
        featured: true,
    },
    {
        id: "4",
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, interactive maps, and location-based alerts.",
        tags: ["TypeScript", "React", "OpenWeather API", "Tailwind"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/weather-app",
        image: "/projects/weather.png",
    },
    {
        id: "5",
        title: "Blog CMS",
        description: "Headless CMS with markdown support, media management, and SEO optimization.",
        tags: ["Next.js", "Contentful", "GraphQL", "Vercel"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/seabuhi/blog-cms",
        image: "/projects/blog.png",
    },
    {
        id: "6",
        title: "Chat Application",
        description: "Real-time messaging app with end-to-end encryption, file sharing, and video calls.",
        tags: ["Kotlin", "WebRTC", "Firebase", "Material Design"],
        codeUrl: "https://github.com/seabuhi/chat-app",
        image: "/projects/chat.png",
    },
];
