"use client";
import { useEffect, useState, useRef } from "react";

export default function MouseEffect() {
  const [positions, setPositions] = useState<{ x: number; y: number; color: string }[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to generate color based on mouse position for consistency
  const getColor = (x: number, y: number) => {
    const hue = ((x + y) % 360); // Creates a consistent color variation across the page
    return `hsl(${hue}, 100%, 50%)`; // Full saturation, medium brightness for sharp colors
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      setPositions((prev) => [
        ...prev.slice(-10), // Keep only last 10 for a short trail
        { x: e.clientX, y: e.clientY, color: getColor(e.clientX, e.clientY) },
      ]);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);

      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setPositions((prev) => {
            if (prev.length === 0) {
              clearInterval(intervalRef.current!);
              return [];
            }
            return prev.slice(1); // Remove oldest first
          });
        }, 20);
      }, 50);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Always visible main cursor dot */}
      <div
        className="absolute w-4 h-4 rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          backgroundColor: getColor(mousePos.x, mousePos.y),
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Trail that disappears */}
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: pos.color,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}








