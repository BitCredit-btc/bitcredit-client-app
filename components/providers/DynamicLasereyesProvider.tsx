"use client";

import { UtxoProvider } from "@/hooks/useUtxos";
import dynamic from "next/dynamic";
import { ComponentProps } from "react";


const LasereyesProvider = dynamic(
    () => import('@omnisat/lasereyes').then((mod) => mod.LaserEyesProvider),
    { ssr: false }
)

const DynamicLasereyesProvider: React.FC<ComponentProps<"div">> = ({ children }) => {
    return (
        <LasereyesProvider>
            <UtxoProvider>
                {children}
            </UtxoProvider>
        </LasereyesProvider>
    );
};

export default DynamicLasereyesProvider;
