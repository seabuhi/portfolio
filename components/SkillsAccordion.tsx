'use client';

import React, { useState } from 'react';
import type { SkillCategory } from '@/data/skills';

interface SkillsAccordionProps {
    skills: SkillCategory[];
}

export default function SkillsAccordion({ skills }: SkillsAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {skills.map((category, index) => (
                <div key={category.category} className="glass-card overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left"
                    >
                        <span className="font-semibold text-white">{category.category}</span>
                        <svg
                            className={`w-5 h-5 text-white/70 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                    >
                        <div className="px-5 pb-4 flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-full glass text-white/90 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
