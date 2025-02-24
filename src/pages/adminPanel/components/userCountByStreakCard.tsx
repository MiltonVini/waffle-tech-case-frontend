import { UseAdmin } from "../../../hooks/adminHooks"
import { Fire } from 'phosphor-react' // Importando o ícone fire

export function UserCountByStreakCard() {
    const { userCountByStreak } = UseAdmin()

    return (
        <div className="flex-1 bg-white border border-gray-200 rounded-sm shadow-lg p-4">
            <p className="text-lg font-semibold mb-4">Contagem de Leitores por Streak</p>
            <div className="overflow-y-auto max-h-[30rem]">
                {userCountByStreak.map((data, index) => (
                    <div key={index} className="flex items-center m-2">
                        <div className="flex items-center m-2">
                            <Fire className="text-orange-500 mr-2" size={30} />
                            <span className="font-semibold text-xl">{`Streak ${data.streak}`}</span>
                        </div>
                        <div className="flex-1 h-6 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-[#FFCE04] rounded-full"
                                style={{ width: `${(data.current_streak_count / 15) * 100}%` }}
                            ></div>
                        </div>
                        <span className="m-2 text-xl font-semibold">{data.current_streak_count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
