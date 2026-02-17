'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AvatarRingProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
};

export default function AvatarRing({ src = '/photo.jpeg', alt = 'Profile', size = 'xl' }: AvatarRingProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative inline-block">
            {/* Glowing ring */}
            <div className={`${sizeClasses[size]} relative`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse"></div>

                {/* Glass ring */}
                <div className="absolute inset-0 rounded-full glass-strong"></div>

                {/* Avatar container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900 border-2 border-white/20">
                    {!imageError ? (
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                            unoptimized
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                            <span className="text-white text-4xl font-bold">
                                {alt.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
