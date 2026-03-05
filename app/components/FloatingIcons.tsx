'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Database,
    Network,
    Brain,
    Bot,
    Zap,
    Code,
    Terminal,
    Infinity as InfinityIcon,
    Cloud,
    Layers,
    Lock,
    Server,
    Sparkles,
    CircuitBoard,
    Binary
} from 'lucide-react';

const icons = [
    Cpu, Database, Network, Brain, Bot, Zap, Code, Terminal,
    InfinityIcon, Cloud, Layers, Lock, Server, Sparkles, CircuitBoard, Binary
];

interface IconNode {
    id: number;
    Icon: React.ElementType;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

export default function FloatingIcons() {
    const [mounted, setMounted] = useState(false);
    const [nodes, setNodes] = useState<IconNode[]>([]);

    useEffect(() => {
        setMounted(true);
        const count = 35; // More icons for better coverage
        const newNodes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 30 + 20, // 20px to 50px
            opacity: Math.random() * 0.12 + 0.08, // Subtle but visible (0.08 to 0.2)
            duration: Math.random() * 20 + 20, // Much slower for smoothness (20s to 40s)
            delay: Math.random() * -40, // Uniform start
        }));
        setNodes(newNodes);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    initial={{
                        opacity: 0,
                        x: `${node.x}vw`,
                        y: `${node.y}vh`,
                        rotate: 0,
                    }}
                    animate={{
                        opacity: [0, node.opacity, node.opacity, 0],
                        y: [`${node.y}vh`, `${node.y - 15}vh`, `${node.y}vh`, `${node.y + 15}vh`, `${node.y}vh`],
                        x: [`${node.x}vw`, `${node.x + 5}vw`, `${node.x}vw`, `${node.x - 5}vw`, `${node.x}vw`],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut", // Much smoother than linear
                    }}
                    style={{
                        position: 'absolute',
                        color: 'var(--brand-blue)',
                        filter: 'blur(0.10px)',
                    }}
                >
                    <node.Icon size={node.size} strokeWidth={1} />
                </motion.div>
            ))}

            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    backgroundImage: `radial-gradient(var(--brand-blue) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px', // Spaced out more
                    opacity: 0.03
                }}
            />
        </div>
    );
}
