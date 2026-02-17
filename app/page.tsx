'use client';

import { useState, useEffect } from 'react';
import DesktopLayout from '@/components/layout/DesktopLayout';
import MobileLayout from '@/components/layout/MobileLayout';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Animated background blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Render different layouts based on screen size */}
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
