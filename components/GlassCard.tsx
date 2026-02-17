import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export default function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
    return (
        <div
            onClick={onClick}
            className={`glass-card ${hover ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
