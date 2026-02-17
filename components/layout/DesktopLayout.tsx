import React from 'react';
import Navbar from '../Navbar';
import AvatarRing from '../AvatarRing';
import GlassCard from '../GlassCard';
import ProjectCard from '../ProjectCard';
import SkillChips from '../SkillChips';
import ContactCard from '../ContactCard';
import { profile } from "@/data/skills";
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

export default function DesktopLayout() {
    return (
        <>
            <Navbar status={profile.status} />

            <main className="relative z-10 pt-24 pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    {/* Hero Section - Split Layout */}
                    <section id="hero" className="min-h-[80vh] flex items-center">
                        <div className="grid grid-cols-2 gap-12 w-full">
                            {/* Left: Text */}
                            <div className="flex flex-col justify-center space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-6xl font-bold text-white leading-tight">
                                        {profile.name}
                                    </h1>
                                    <p className="text-xl text-gray-300 leading-relaxed">
                                        {profile.title}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        {profile.bio}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-6 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white font-medium"
                                    >
                                        View Projects
                                    </button>
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-6 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white font-medium"
                                    >
                                        Contact Me
                                    </button>
                                    <a
                                        href={profile.cvUrl}
                                        download
                                        className="px-6 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white font-medium"
                                    >
                                        Download CV
                                    </a>
                                </div>
                            </div>

                            {/* Right: Preview Panel */}
                            <div className="flex items-center justify-center">
                                <GlassCard className="p-12">
                                    <AvatarRing src={profile.avatar} alt={profile.name} size="xl" />
                                </GlassCard>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section - 3-column Grid */}
                    <section id="projects" className="space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                            <p className="text-gray-400">Some of my recent work</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>

                    {/* Skills Section - Glass Chips Grid */}
                    <section id="skills" className="space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
                            <p className="text-gray-400">Tools and technologies I work with</p>
                        </div>

                        <GlassCard className="p-8">
                            <SkillChips skills={skills} />
                        </GlassCard>
                    </section>

                    {/* Contact Section - 2-column Layout */}
                    <section id="contact" className="space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-4xl font-bold text-white">Let&apos;s Connect</h2>
                            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly chat</p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <ContactCard
                                email={profile.email}
                                github={profile.github}
                                linkedin={profile.linkedin}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
