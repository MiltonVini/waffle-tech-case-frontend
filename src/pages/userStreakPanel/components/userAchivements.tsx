import { Fire } from "phosphor-react";
import { UseUserStatistics } from "../../../hooks/userHooks";
import { useEffect, useState } from "react";

export function UserAchivements() {
    const [userNextStreaks, setUserNextStreaks] = useState<number[]>([])

    const { userStatistics, badges } = UseUserStatistics()

    const userCurrentStreak = userStatistics?.streak

    useEffect(() => {
        setUserNextStreaks(userCurrentStreak ? Array.from({ length: 3 }, (_value, index) => userCurrentStreak + index + 1) : [])
    }, [userCurrentStreak])
    
    return (
        <div className="mt-6 bg-white border border-2 border-gray-200 rounded-lg p-6 w-[29rem] shadow-lg">
            <p className="text-xl font-semibold mb-4">🏆 Suas próximas conquistas</p>
{
                userNextStreaks.map((day) => {
                    const achivement = badges?.find((badge) => badge.streak_required === day)
                    return (
                    <div key={day} className="flex flex-row items-center gap-4 mb-4">
                        <p className="text-lg font-medium">
                        {day} <span className="text-sm font-normal">Dias seguidos</span>
                        </p>
                        <Fire size={36} color="#fc5a03" weight="duotone" />
                        <p className="text-sm italic text-gray-600">{achivement? `Coquista: ${achivement.name}` : '' }</p>
                    </div>
                )})
            }
      </div>
    )
}