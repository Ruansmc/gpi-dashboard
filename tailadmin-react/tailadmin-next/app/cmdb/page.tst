import Card from "../../components/Card";

export default function CMDBPage() {
  const ativos = [
    {
      id: "CMDB-001",
      nome: "Servidor Principal",
      tipo: "Servidor",
      status: "Ativo",
    },
    {
      id: "CMDB-002",
      nome: "Switch Core",
      tipo: "Rede",
      status: "Ativo",
    },
    {
      id: "CMDB-003",
      nome: "Storage NAS",
      tipo: "Armazenamento",
      status: "Manutenção",
    },
    {
      id: "CMDB-004",
      nome: "Firewall Principal",
      tipo: "Segurança",
      status: "Ativo",
    },
  ];

  return (
    <div className="space-y-8 relative z-10">
      <header>
        <h2 className="text-3xl font-bold text-gray-800">📋 CMDB</h2>
        <p className="text-gray-600 mt-2">
          Configuration Management Database - Gestão de ativos
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total de Ativos"
          value={256}
          color="border-purple-500"
        />
        <Card
          title="Ativos Ativos"
          value={240}
          color="border-green-500"
        />
        <Card
          title="Em Manutenção"
          value={8}
          color="border-yellow-500"
        />
        <Card
          title="Inativos"
          value={8}
          color="border-red-500"
        />
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Ativos Cadastrados</h3>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
            + Novo Ativo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ativos.map((ativo) => (
                <tr key={ativo.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ativo.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {ativo.nome}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {ativo.tipo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ativo.status === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {ativo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Distribuição por Tipo</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Servidores</span>
              <span className="font-bold text-gray-900">120</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Equipamentos de Rede</span>
              <span className="font-bold text-gray-900">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Armazenamento</span>
              <span className="font-bold text-gray-900">30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Segurança</span>
              <span className="font-bold text-gray-900">25</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Outros</span>
              <span className="font-bold text-gray-900">36</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">
            Alertas Recentes
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <span className="text-yellow-600">⚠️</span>
              <div>
                <p className="font-medium text-gray-900">
                  Storage NAS em manutenção
                </p>
                <p className="text-sm text-gray-600">Há 2 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-600">🔴</span>
              <div>
                <p className="font-medium text-gray-900">
                  7 VMs sem registro no CMDB
                </p>
                <p className="text-sm text-gray-600">Há 5 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-600">✅</span>
              <div>
                <p className="font-medium text-gray-900">
                  Backup concluído com sucesso
                </p>
                <p className="text-sm text-gray-600">Há 1 dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}