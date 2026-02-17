'use client';

import React from 'react';
import GlassCard from './GlassCard';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <GlassCard hover className="p-6 h-full flex flex-col">
            <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full glass text-white/90 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm text-center rounded-lg glass-strong hover:bg-white/20 transition-all text-white font-medium"
                    >
                        Live Demo
                    </a>
                )}
                {project.codeUrl && (
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm text-center rounded-lg glass-strong hover:bg-white/20 transition-all text-white font-medium"
                    >
                        View Code
                    </a>
                )}
            </div>
        </GlassCard>
    );
}
