import { useEffect, useRef, useState } from 'react';
import React from 'react';
export default function GridBackground() {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const gridRef = useRef([]);
    const animationRef = useRef();
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const spacing = 50;
        const grid = [];
        for (let x = 0; x < canvas.width; x += spacing) {
            for (let y = 0; y < canvas.height; y += spacing) {
                grid.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                });
            }
        }
        gridRef.current = grid;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cursorRadius = 150;
            const strength = 30;
            // Update grid points based on cursor position
            grid.forEach((point) => {
                const dx = mousePos.x - point.baseX;
                const dy = mousePos.y - point.baseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < cursorRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (1 - distance / cursorRadius) * strength;
                    point.x = point.baseX - Math.cos(angle) * force;
                    point.y = point.baseY - Math.sin(angle) * force;
                }
                else {
                    point.x = point.baseX;
                    point.y = point.baseY;
                }
            });
            // Draw lines
            ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(251, 191, 36, 0.15)';
            ctx.lineWidth = 1.5;
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    const point = grid.find((p) => p.baseX === x && p.baseY === y);
                    if (!point)
                        continue;
                    // Draw horizontal line
                    const rightPoint = grid.find((p) => p.baseX === x + spacing && p.baseY === y);
                    if (rightPoint) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(rightPoint.x, rightPoint.y);
                        ctx.stroke();
                    }
                    // Draw vertical line
                    const bottomPoint = grid.find((p) => p.baseX === x && p.baseY === y + spacing);
                    if (bottomPoint) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(bottomPoint.x, bottomPoint.y);
                        ctx.stroke();
                    }
                    // Draw glow near cursor
                    const dx = mousePos.x - point.x;
                    const dy = mousePos.y - point.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < cursorRadius) {
                        const glowIntensity = (1 - distance / cursorRadius) * 0.6;
                        ctx.fillStyle = `rgba(251, 191, 36, ${glowIntensity * 0.3})`;
                        ctx.beginPath();
                        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [mousePos]);
    return React.createElement('canvas', {
        ref: canvasRef,
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            display: 'block',
        },
    });
}
