'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ParticleBackground.css';

interface ParticleBackgroundProps {
    particleCount?: number;
    particleColor?: string;
    particleSize?: number;
    speed?: number;
    interactionStrength?: number;
    className?: string;
}

export default function ParticleBackground({
    particleCount = 8000,
    particleColor = '#ffffff',
    particleSize = 2,
    speed = 0.5,
    interactionStrength = 1.0,
    className = ''
}: ParticleBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const targetMouseRef = useRef({ x: 0, y: 0 });
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 50;
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Particle geometry
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);

        // Initialize particles in a 3D space
        for (let i = 0; i < particleCount * 3; i += 3) {
            // Random position in a large cube
            positions[i] = (Math.random() - 0.5) * 200;
            positions[i + 1] = (Math.random() - 0.5) * 200;
            positions[i + 2] = (Math.random() - 0.5) * 100;

            // Store original positions
            originalPositions[i] = positions[i];
            originalPositions[i + 1] = positions[i + 1];
            originalPositions[i + 2] = positions[i + 2];

            // Random velocities for organic movement
            velocities[i] = (Math.random() - 0.5) * 0.02;
            velocities[i + 1] = (Math.random() - 0.5) * 0.02;
            velocities[i + 2] = (Math.random() - 0.5) * 0.01;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        geometry.setAttribute('originalPosition', new THREE.BufferAttribute(originalPositions, 3));

        // Particle material
        const material = new THREE.PointsMaterial({
            color: particleColor,
            size: particleSize,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        // Create particle system
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
        particlesRef.current = particles;

        // Mouse move handler
        const handleMouseMove = (event: MouseEvent) => {
            targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Window resize handler
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;

            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
            const velocities = particlesRef.current.geometry.attributes.velocity.array as Float32Array;
            const originalPositions = particlesRef.current.geometry.attributes.originalPosition.array as Float32Array;

            // Smooth mouse movement
            mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

            // Update particle positions
            for (let i = 0; i < particleCount * 3; i += 3) {
                // Apply velocity for organic movement
                positions[i] += velocities[i] * speed;
                positions[i + 1] += velocities[i + 1] * speed;
                positions[i + 2] += velocities[i + 2] * speed;

                // Mouse interaction - repel particles
                const dx = positions[i] - mouseRef.current.x * 100;
                const dy = positions[i + 1] - mouseRef.current.y * 100;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 30) {
                    const force = (30 - distance) / 30;
                    positions[i] += (dx / distance) * force * interactionStrength;
                    positions[i + 1] += (dy / distance) * force * interactionStrength;
                }

                // Gentle pull back to original position
                positions[i] += (originalPositions[i] - positions[i]) * 0.01;
                positions[i + 1] += (originalPositions[i + 1] - positions[i + 1]) * 0.01;
                positions[i + 2] += (originalPositions[i + 2] - positions[i + 2]) * 0.01;

                // Boundary wrapping
                if (Math.abs(positions[i]) > 100) velocities[i] *= -1;
                if (Math.abs(positions[i + 1]) > 100) velocities[i + 1] *= -1;
                if (Math.abs(positions[i + 2]) > 50) velocities[i + 2] *= -1;
            }

            particlesRef.current.geometry.attributes.position.needsUpdate = true;

            // Rotate particle system slowly
            particlesRef.current.rotation.y += 0.0002 * speed;

            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }

            if (rendererRef.current && containerRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }

            geometry.dispose();
            material.dispose();
            rendererRef.current?.dispose();
        };
    }, [particleCount, particleColor, particleSize, speed, interactionStrength]);

    return <div ref={containerRef} className={`particle-background ${className}`} />;
}
