"use client";
import "./globals.css";
import { useState } from "react";
import dynamic from "next/dynamic";

// Importação dinâmica para evitar problemas de SSR
const Loader = dynamic(() => import("../components/Loader"), { ssr: false });
const Sidebar = dynamic(() => import("../components/Sidebar"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showVideo, setShowVideo] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowVideo(false);
    setShowContent(true);
  };

  return (
    <html lang="pt-br">
      <body className="flex overflow-hidden bg-gray-100">
        {/* Vídeo de fundo - só aparece durante o loader */}
        {showVideo && (
          <video
            id="bg-video"
            className="fixed inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/fundo.mp4" type="video/mp4" />
          </video>
        )}

        {/* Loader GPI */}
        <Loader onComplete={handleLoaderComplete} />

        {/* Conteúdo após loader */}
        {showContent && (
          <>
            <Sidebar />
            <main className="flex-1 p-8 ml-64 relative z-20 overflow-y-auto h-screen">
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  );
}
