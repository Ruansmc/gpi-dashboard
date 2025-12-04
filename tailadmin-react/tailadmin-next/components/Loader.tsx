"use client";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 300); // Delay para transição suave
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-[100] backdrop-blur-sm transition-opacity duration-300">
      {/* Letras GPI com animação */}
      <div className="flex space-x-8 mb-4">
        {["G", "P", "I"].map((letter, i) => (
          <span
            key={i}
            className="text-white text-8xl font-extrabold animate-bounce drop-shadow-2xl"
            style={{
              animationDelay: `${i * 0.15}s`,
              textShadow: "0 0 30px rgba(255,255,255,0.5)",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Barra de carregamento */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mt-8">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
          style={{ animation: "loading 2.5s ease-in-out" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
