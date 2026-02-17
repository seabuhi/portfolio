import React from 'react';

interface NavbarProps {
    status?: string;
}

export default function Navbar({ status = 'Available for work' }: NavbarProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="glass-card px-6 py-3">
                    <span className="text-white font-bold text-lg">Seabuhi</span>
                </div>

                {/* Status pill */}
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">{status}</span>
                </div>
            </div>
        </nav>
    );
}
