"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const links = [
    { name: "📊 Início", href: "/" },
    { name: "🖥️ Vcenter", href: "/vcenter" },
    { name: "📋 CMDB", href: "/cmdb" },
    { name: "💡 Ideias", href: "/ideias" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen p-6 shadow-2xl fixed z-30">
      {/* Logo/Título */}
      <div className="mb-8 pb-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          GPI Dashboard
        </h1>
        <p className="text-xs text-gray-400 mt-1">Sistema de Gestão</p>
      </div>

      {/* Navegação */}
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`flex items-center gap-3 p-3 w-full text-left rounded-lg transition-all duration-200 ${
                path === link.href
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg scale-105"
                  : "hover:bg-gray-700/50 hover:translate-x-1"
              }`}
            >
              <span className="text-base font-medium">{link.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Footer da Sidebar */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="p-3 bg-gray-700/30 rounded-lg border border-gray-600">
          <p className="text-xs text-gray-400">Sistema Vcenter x CMDB</p>
          <p className="text-xs text-gray-500 mt-1">v1.0.0</p>
        </div>
      </div>
    </aside>
  );
}
