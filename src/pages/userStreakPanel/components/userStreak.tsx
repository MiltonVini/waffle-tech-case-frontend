import { Fire } from "phosphor-react";
import { UseUserStatistics } from "../../../hooks/userHooks";
import { useEffect, useState } from "react";

export function UserStreak() {

    const [daysUntilBeatRecord, SetDaysUntilBeatRecord] = useState<number>(0)

    const {
        userStatistics
    } = UseUserStatistics()

    useEffect(() => {
        if (userStatistics) {
            SetDaysUntilBeatRecord((userStatistics?.best_streak - userStatistics?.streak) + 1)
        }
    }, [userStatistics])

    return (
        <>  
            <div className="flex flex-col justify-center items-center mt-12">

            <div className="h-56 w-56 rounded-full bg-white flex flex-col items-center border border-2 border-[#FFCE04] mb-4 shadow-lg">
            <Fire size={86} color="#fc5a03" weight="duotone" className="mt-12"/>
                <div className="flex flex-col justify-center items-center mt-3">
                <p className="text-center text-lg font-semibold">
                {userStatistics?.streak} <span className="font-normal">Dias</span> </p>
                <p className="text-center text-sm">Sequência atual</p>
                </div>
            </div>

            <p className="text-lg font-semibold text-gray-800">
                Continue assim, <span className="text-[#FFCE04] font-bold">você está indo muito bem.</span>
            </p>

            {daysUntilBeatRecord > 0 ? (
            <p className="text-lg font-semibold text-gray-800">
                <span className="text-2xl text-[#FFCE04]">{daysUntilBeatRecord}</span> {daysUntilBeatRecord === 1 ? 'Dia para bater o seu recorde pessoal!' : 'Dias para bater o seu recorde pessoal!'}
            </p>
            ) : (
            <p className="text-lg font-semibold text-green-600">
                🎉 Parabéns! <span className="text-[#FFCE04]">Você está no seu maior recorde pessoal!</span>
            </p>
            )}



        </div>
    </>
    )
}