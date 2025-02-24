import { Clock, Newspaper, Trophy } from "phosphor-react";
import { UseUserStatistics } from "../../../hooks/userHooks";

export function UserStatistics() {

    const { userStatistics } = UseUserStatistics()

    return (
        <>
            <div className="mt-6 flex flex-row gap-4">
            <div className="bg-white border border-2 border-gray-200 rounded-sm p-2 w-[9rem] h-[6rem] shadow-lg">
                <div className="flex flex-row mb-2 mt-2">
                <p className="text-xl font-semibold ml-2 mt-2 mr-8">{userStatistics?.best_streak}</p> <Trophy size={44} color="#a29715" weight="duotone" />
                </div>
                <span className="text-center text-sm">Recorde Pessoal</span>
            </div>

            <div className="bg-white border border-2 border-gray-200 rounded-sm p-2 w-[9rem] h-[6rem] shadow-lg">
                <div className="flex flex-row mb-2 mt-2">
                <p className="text-xl font-semibold ml-2 mt-2 mr-8">{userStatistics?.read_count}</p> <Newspaper size={44} color="#9215a2" weight="duotone" />
                </div>
                <span className="text-center text-sm">Total de Leituras</span>
            </div>

            <div className="bg-white border border-2 border-gray-200 rounded-sm p-2 w-[9rem] h-[6rem] shadow-lg">
                <div className="flex flex-row mb-2 mt-2">
                <p className="text-lg font-semibold ml-2 mt-2 mr-4">{userStatistics?.user_favorite_reading_period}</p> <Clock size={32} color="#c7820a" weight="duotone" />
                </div>
                <span className="text-center text-sm">Horario Favorito</span>
            </div>

            <div className="bg-white border border-2 border-gray-200 rounded-sm p-2 w-[9rem] h-[6rem] shadow-lg flex flex-col items-center justify-center">
                <span className="text-sm">Conosco há</span> 
                <div className="flex items-center">
                    <p className="text-lg font-semibold">{userStatistics?.register_days}</p>
                    <Clock size={24} color="#c7820a" weight="duotone" className="ml-1"/>
                </div>
                <span className="text-sm">{userStatistics?.register_days === 1 ? 'Dia' : 'Dias'}</span>
            </div>


            </div>
        </>
    )
}