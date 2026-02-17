import React from 'react';
import type { SkillCategory } from '@/data/skills';

interface SkillChipsProps {
    skills: SkillCategory[];
}

export default function SkillChips({ skills }: SkillChipsProps) {
    return (
        <div className="space-y-8">
            {skills.map((category) => (
                <div key={category.category}>
                    <h3 className="text-lg font-semibold mb-4 text-white/90">{category.category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full glass-strong text-white text-sm font-medium hover:scale-105 transition-transform cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
