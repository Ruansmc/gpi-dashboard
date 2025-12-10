import { useEffect, useState } from "react";

function Loader() {
  return (
    <div id="loader">
      <div></div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-3">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Home
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Usuários
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Relatórios
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Configurações
        </a>
      </nav>
    </aside>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">Bem-vindo, Ruan</h2>
      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Perfil
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Sair
        </button>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">Card 1</div>
      <div className="bg-white p-4 rounded shadow">Card 2</div>
      <div className="bg-white p-4 rounded shadow">Card 3</div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-xl font-semibold mb-2">Tabela de Usuários</h3>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Ruan</td>
            <td className="px-4 py-2">ruan@email.com</td>
            <td className="px-4 py-2">Ativo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex h-screen">
      <video id="bg-video" autoPlay muted loop>
        <source src="video fundo.mp4" type="video/mp4" />
      </video>
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-auto">
        <Navbar />
        <div className="p-6 flex-1">
          <Cards />
          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
