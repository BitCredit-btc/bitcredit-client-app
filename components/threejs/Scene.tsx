import { Cloud, Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Mesh, Points, Vector3 } from "three";

function BitcoinCoin() {
    const ref = useRef<Mesh>(null);
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={ref} position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[1, 1, 0.2, 64]} />
            <meshStandardMaterial color="#f2a900" metalness={1} roughness={0.3} />
        </mesh>
    );
}

function EnergyField() {
    const particlesRef = useRef<Points>(null);
    const particleCount = 100;

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < particleCount; i++) {
            const radius = 3;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.random() * Math.PI;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            temp.push({
                position: new Vector3(x, y, z),
                velocity: new Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                ),
                size: Math.random() * 0.2 + 0.1
            });
        }
        return temp;
    }, []);

    const positions = useMemo(() => new Float32Array(particleCount * 3), []);
    const sizes = useMemo(() => new Float32Array(particleCount), []);

    useFrame(({ clock }) => {
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i];

            // Update position
            particle.position.add(particle.velocity);

            // Keep particles within a sphere
            if (particle.position.length() > 4) {
                particle.position.normalize().multiplyScalar(4);
                particle.velocity.multiplyScalar(-0.5);
            }

            // Add some circular motion
            const time = clock.elapsedTime;
            const angle = time * 0.2 + i * 0.01;
            particle.position.x += Math.sin(angle) * 0.02;
            particle.position.y += Math.cos(angle) * 0.02;

            // Update buffers
            positions[i * 3] = particle.position.x;
            positions[i * 3 + 1] = particle.position.y;
            positions[i * 3 + 2] = particle.position.z;
            sizes[i] = particle.size * (1 + Math.sin(time * 2 + i) * 0.3);
        }

        if (particlesRef.current) {
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
            particlesRef.current.geometry.attributes.size.needsUpdate = true;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particleCount}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.2}
                color="#ff8f00"
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                vertexColors
                sizeAttenuation
            />
        </points>
    );
}

function Starfield() {
    const starsRef = useRef<Points>(null);
    const starCount = 1000;

    const positions = new Float32Array(starCount * 3).map(() => (Math.random() - 0.5) * 100);

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
    );
}

function CloudAnimation({ children, speed = 1 }: { children: React.ReactNode, speed?: number }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        groupRef.current.position.y = Math.sin(clock.getElapsedTime() * speed) * 0.3;
    });

    return <group ref={groupRef}>{children}</group>;
}

function AtmosphericBackground() {
    return (
        <>
            <CloudAnimation speed={0.4}>
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    segments={20}
                    position={[0, -2, -10]}
                />
            </CloudAnimation>

            <CloudAnimation speed={0.3}>
                <Cloud
                    opacity={0.3}
                    speed={0.3}
                    segments={20}
                    position={[-4, -4, -8]}
                />
            </CloudAnimation>

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
    );
}

export default function App({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-black via-orange-950/30 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>

            <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }} shadows>
                <AtmosphericBackground />
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

            {children}

            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
    );
}
