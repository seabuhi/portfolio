'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    variant?: 'desktop' | 'mobile';
}

export default function ProjectCard({ project, variant = 'desktop' }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div
            className={`glass-card overflow-hidden h-full flex flex-col transition-all duration-300 ${variant === 'desktop'
                    ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20'
                    : ''
                } ${isPressed ? 'scale-[0.97]' : ''}`}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            onMouseDown={() => variant === 'mobile' && setIsPressed(true)}
            onMouseUp={() => variant === 'mobile' && setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
        >
            {/* Project Image */}
            <div className="relative w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={() => setImageError(true)}
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 mx-auto rounded-full glass-strong flex items-center justify-center">
                                <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-xs text-white/50">Project Preview</p>
                        </div>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

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

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2.5 text-sm text-center rounded-lg glass-strong hover:bg-white/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all text-white font-medium group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Live
                                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2.5 text-sm text-center rounded-lg glass-strong hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/20 transition-all text-white font-medium group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Code
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
