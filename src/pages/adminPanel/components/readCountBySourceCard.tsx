import { UseAdmin } from "../../../hooks/adminHooks"

export function ReadCountBySourceCard() {
    const { readCountBySource } = UseAdmin();

    return (
        <div className="flex-1 h-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">📊 Leituras por Origem</h2>

            <div className="mt-4 overflow-y-auto max-h-[10rem] rounded-sm">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-3 text-left font-medium">Origem</th>
                            <th className="px-4 py-3 text-center font-medium">Quantidade de Leituras</th>
                        </tr>
                    </thead>
                    <tbody>
                        {readCountBySource?.map((source, index) => (
                            <tr key={index} className={`text-gray-800 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}>
                                <td className="px-4 py-3">{source.utm_source || "Desconhecido"}</td>
                                <td className="px-4 py-3 text-center">{source.read_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
