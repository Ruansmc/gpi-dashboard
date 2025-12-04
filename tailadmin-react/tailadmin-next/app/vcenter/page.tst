import Card from "../../components/Card";

export default function VcenterPage() {
  const vms = [
    { name: "VM-WEB-01", status: "Ativo", cpu: "4 vCPUs", ram: "8 GB" },
    { name: "VM-DB-02", status: "Ativo", cpu: "8 vCPUs", ram: "16 GB" },
    { name: "VM-APP-03", status: "Inativo", cpu: "2 vCPUs", ram: "4 GB" },
    { name: "VM-TEST-04", status: "Ativo", cpu: "2 vCPUs", ram: "4 GB" },
  ];

  return (
    <div className="space-y-8 relative z-10">
      <header>
        <h2 className="text-3xl font-bold text-gray-800">🖥️ Vcenter</h2>
        <p className="text-gray-600 mt-2">
          Gerenciamento de máquinas virtuais
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total de VMs" value={128} color="border-blue-500" />
        <Card title="VMs Ativas" value={115} color="border-green-500" />
        <Card title="VMs Inativas" value={13} color="border-yellow-500" />
        <Card
          title="Sem registro CMDB"
          value={7}
          color="border-red-500"
        />
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Máquinas Virtuais</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  RAM
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vms.map((vm, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {vm.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        vm.status === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {vm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {vm.cpu}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {vm.ram}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}