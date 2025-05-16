import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export function NavbarEffect() {
    const meshRef = useRef<THREE.Mesh>(null)
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    // Custom shader for the glowing effect
    const shaderMaterial = {
        uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color("#ff8f00") }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 color;
            varying vec2 vUv;

            void main() {
                float alpha = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
                alpha *= 1.0 - pow(abs(vUv.y - 0.5) * 2.0, 2.0);
                gl_FragColor = vec4(color, alpha * 0.3);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
    }

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = clock.getElapsedTime()
        }
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, -1]} scale={[3, 0.15, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial ref={materialRef} attach="material" {...shaderMaterial} />
        </mesh>
    )
} 