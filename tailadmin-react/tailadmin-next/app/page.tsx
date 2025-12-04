"use client";
import { useState } from "react";

interface Ideia {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  data: string;
}

export default function IdeiasPage() {
  const [ideias, setIdeias] = useState<Ideia[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo || !descricao || !autor) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaIdeia: Ideia = {
      id: Date.now(),
      titulo,
      descricao,
      autor,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    setIdeias([...ideias, novaIdeia]);
    setTitulo("");
    setDescricao("");
    setAutor("");
  };

  return (
    <div className="space-y-8 relative z-10">
      <header>
        <h2 className="text-3xl font-bold text-gray-800">💡 Ideias</h2>
        <p className="text-gray-600 mt-2">
          Registre suas ideias e sugestões de melhorias
        </p>
      </header>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Nova Ideia</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Automatizar backup de VMs"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Descreva sua ideia em detalhes..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Autor
            </label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Seu nome"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Registrar Ideia
          </button>
        </form>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Ideias Registradas ({ideias.length})
        </h3>

        {ideias.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Nenhuma ideia registrada ainda. Seja o primeiro!
          </p>
        ) : (
          <div className="space-y-4">
            {ideias.map((ideia) => (
              <div
                key={ideia.id}
                className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-gray-800">
                    {ideia.titulo}
                  </h4>
                  <span className="text-sm text-gray-500">{ideia.data}</span>
                </div>
                <p className="text-gray-600 mb-3">{ideia.descricao}</p>
                <p className="text-sm text-gray-500">
                  <strong>Autor:</strong> {ideia.autor}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
