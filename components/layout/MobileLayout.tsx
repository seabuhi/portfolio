'use client';

import React from 'react';
import BottomBar from '../BottomBar';
import AvatarRing from '../AvatarRing';
import GlassCard from '../GlassCard';
import ProjectCard from '../ProjectCard';
import SkillsAccordion from '../SkillsAccordion';
import ContactCard from '../ContactCard';
import { profile } from "@/data/skills";
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

export default function MobileLayout() {
    return (
        <>
            <main className="relative z-10 pt-8 pb-32 px-4">
                <div className="space-y-16">
                    {/* Hero Section - Compact Glass Stack */}
                    <section id="hero" className="space-y-6">
                        <div className="flex justify-center">
                            <AvatarRing src={profile.avatar} alt={profile.name} size="lg" />
                        </div>

                        <GlassCard className="p-6 text-center space-y-4">
                            <h1 className="text-3xl font-bold text-white">
                                {profile.name}
                            </h1>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {profile.title}
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {profile.bio}
                            </p>

                            <div className="flex items-center justify-center gap-2 pt-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                <span className="text-sm text-white/80">{profile.status}</span>
                            </div>
                        </GlassCard>

                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-4 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white text-sm font-medium active:scale-95"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-4 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white text-sm font-medium active:scale-95"
                            >
                                Contact
                            </button>
                            <a
                                href={profile.cvUrl}
                                download
                                className="px-4 py-3 rounded-lg glass-strong hover:bg-white/20 transition-all text-white text-sm font-medium text-center active:scale-95"
                            >
                                CV
                            </a>
                        </div>
                    </section>

                    {/* Projects Section - Horizontal Swipe */}
                    <section id="projects" className="space-y-6">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
                            <p className="text-sm text-gray-400">Swipe to explore</p>
                        </div>

                        <div className="overflow-x-auto hide-scrollbar snap-x -mx-4 px-4">
                            <div className="flex gap-4 pb-2">
                                {projects.map((project) => (
                                    <div key={project.id} className="flex-shrink-0 w-[85vw] snap-center">
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Skills Section - Accordion */}
                    <section id="skills" className="space-y-6">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-white">Skills & Technologies</h2>
                            <p className="text-sm text-gray-400">Tap to expand categories</p>
                        </div>

                        <SkillsAccordion skills={skills} />
                    </section>

                    {/* Contact Section - Stacked */}
                    <section id="contact" className="space-y-6">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
                            <p className="text-sm text-gray-400">Get in touch</p>
                        </div>

                        <ContactCard
                            email={profile.email}
                            github={profile.github}
                            linkedin={profile.linkedin}
                        />
                    </section>
                </div>
            </main>

            <BottomBar />
        </>
    );
}
