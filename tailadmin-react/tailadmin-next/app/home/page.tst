import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center mb-10 z-10 relative">
        <h2 className="text-3xl font-bold text-gray-800">📊 Métricas Gerais</h2>
        <div className="flex gap-4">
          <a
            href="https://teams.microsoft.com"
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700"
          >
            Teams
          </a>
          <a
            href="https://outlook.office.com"
            target="_blank"
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700"
          >
            Outlook
          </a>
          <a
            href="https://app.powerbi.com"
            target="_blank"
            className="px-4 py-2 bg-yellow-600 text-white rounded-xl font-semibold shadow hover:bg-yellow-700"
          >
            Power BI
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        <Card title="Máquinas criadas no Vcenter" value={128} />
        <Card title="Não cadastradas no CMDB" value={7} color="border-red-500" />
        <Card title="Ideias registradas" value={0} color="border-green-500" />
      </section>
    </div>
  );
}
