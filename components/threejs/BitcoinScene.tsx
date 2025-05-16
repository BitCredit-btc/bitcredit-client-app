'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the 3D components with no SSR
const Scene = dynamic(() => import('./Scene'), { ssr: false })

export default function BitcoinScene({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-[400px]">
            <Suspense fallback={<div>Loading...</div>}>
                <Scene>
                    {children}
                </Scene>
            </Suspense>
        </div>
    )
}
