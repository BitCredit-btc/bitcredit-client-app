"use client"

import { Cloud, Environment, OrbitControls, Sparkles } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { Points } from "three"

function Starfield() {
    const starsRef = useRef<Points>(null)
    const starCount = 1000

    const positions = new Float32Array(starCount * 3).map(() => (Math.random() - 0.5) * 100)

    return (
        <points ref={starsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={starCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial color="#ffaa00" size={0.1} transparent opacity={0.8} />
        </points>
    )
}

function EnergyField() {
    return (
        <>
            <Cloud
                opacity={0.5}
                speed={0.4}
                segments={20}
                position={[0, 2, -10]}
            />
            <Cloud
                opacity={0.3}
                speed={0.3}
                segments={20}
                position={[-4, -2, -8]}
            />

            <Sparkles
                count={100}
                scale={12}
                size={4}
                speed={0.4}
                color="#ffaa00"
                opacity={0.2}
            />
            <Sparkles
                count={100}
                scale={10}
                size={2}
                speed={0.2}
                color="#ff6b00"
                opacity={0.1}
            />

            <Environment preset="sunset" />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6b00" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffaa00" />
        </>
    )
}

export function AtmosphericBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/30 to-black">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>
            </div>

            <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }} shadows>
                <EnergyField />
                <Starfield />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2.5}
                />
            </Canvas>

            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
    )
} 