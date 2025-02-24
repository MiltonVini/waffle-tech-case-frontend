import { UseAdmin } from "../../../hooks/adminHooks"

export function NewUsersCard() {
    const { newUsers } = UseAdmin()

    const growthPercentage = newUsers?.growth_percentage ?? 0


    return (
        <div className="flex flex-col justify-center w-full h-[9.5rem] bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">📊 Novos Usuários</h2>

            <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <div>
                    <p className="text-2xl font-medium text-gray-600">Semana Atual</p>
                    <span className="text-xl font-semibold text-gray-900">
                        {newUsers?.last_7_days_new_users_count ?? "-"}
                    </span>
                </div>
                <div>
                    <p className="text-2xl font-medium text-gray-600">Semana Passada</p>
                    <span className="text-xl font-semibold text-gray-900">
                        {newUsers?.previous_week_new_users_count ?? "-"}
                    </span>
                </div>
                <div>
                    <p className="text-2xl font-medium text-gray-600">Crescimento</p>
                    <span className={`text-xl font-semibold ${growthPercentage > 0 ? 'text-green-500' : growthPercentage <= 0 ? 'text-red-500' : 'text-gray-500'}`}>
                                {`${growthPercentage ?? '-'}%`}
                    </span>
                </div>
            </div>
        </div>
    )
}
