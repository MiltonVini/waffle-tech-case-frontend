import { format, isWithinInterval, parseISO, subDays } from "date-fns";
import { UseUserStatistics } from "../../../hooks/userHooks"
import { ptBR } from "date-fns/locale";

export function UserReadingWeek() {

    const { userReadings } = UseUserStatistics()

    const weekDays = [
        'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
    ]

    const currentDate = new Date();
    const weekStart = subDays(currentDate, 6)

    const recentReadings = userReadings?.filter((reading) => {
        const readingDate = parseISO(reading.created_at)

        return isWithinInterval(readingDate, {start: weekStart, end: currentDate})
    })

    const readingWeekDays = recentReadings?.map((reading) => {
        return format(parseISO(reading.created_at), 'ccc', {locale: ptBR})
    })

    return (
        <div className="mt-6 bg-white border border-2 border-gray-200 rounded-lg p-6 w-[29rem] shadow-lg">
        <p className="text-xl font-semibold mb-4">📰 Sua semana de leitura</p>
  
        <div className="flex flex-row items-center gap-4 mb-4">
            {
                weekDays.map((day) => {
                    const hasRead = readingWeekDays?.includes(day)
                    return (
                        <div className="flex flex-col items-center">
                        <p>{day}</p>
                        <div className={`${hasRead ? 'bg-[#FFCE04]' : 'bg-white border border-2 border-gray-200'} rounded-sm shadow-lg w-[3.5rem] h-[3.5rem]`}>
                        </div>
                      </div>
                    )
                })
            }
        </div>
      </div>
    )
}