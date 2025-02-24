import { UseAdmin } from "../../../hooks/adminHooks"

export function MostEngagedUsersCard() {
    const { usersStreaks } = UseAdmin()

    return (
        <div className="flex-1 h-[30rem] bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">🏆 Ranking dos Leitores mais Engajados</h2>

            <div className="overflow-y-auto max-h-[24rem] rounded-sm">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-3 text-left font-medium">Email</th>
                            <th className="px-4 py-3 text-center font-medium">🔥 Streak Atual</th>
                            <th className="px-4 py-3 text-center font-medium">🏅 Melhor Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersStreaks?.map((user, index) => (
                            <tr key={user.id} className={`text-gray-800 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3 text-center">{user.streak}</td>
                                <td className="px-4 py-3 text-center">{user.best_streak}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
