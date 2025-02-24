import { eachDayOfInterval, endOfMonth, format, parseISO, startOfMonth } from "date-fns"
import { ptBR } from "date-fns/locale"
import { UseUserStatistics } from "../../../hooks/userHooks"
import { useEffect, useState } from "react";

export function UserReadingMonth() {
    const [readingDays, setReadingDays] = useState<string[]>([])

    const { userReadings } = UseUserStatistics()

    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const currentMonthDays = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })

    useEffect(() => {
        if (userReadings) {
            const days = userReadings.map((reading) => format(parseISO(reading.created_at), "yyyy-MM-dd"))
            setReadingDays(days);
        }
    }, [userReadings])

    return (
        <div className="mt-6 mb-6 bg-white border border-2 border-gray-200 rounded-lg p-6 w-[29rem] shadow-lg">
            <p className="text-xl font-semibold mb-2">📅 Seu histórico de leitura em</p>
            <p className="text-xl mb-4">{format(currentDate, 'MMMM', {locale: ptBR})}</p>
            <div className="grid grid-cols-7 gap-2">

                {
                    currentMonthDays.map((day) => {

                        const formattedDay = format(day, 'yyyy-MM-dd')

                        const hasRead = readingDays?.includes(formattedDay)

                        return (
                        <>
                                <div key={formattedDay} className={`${hasRead ? 'bg-[#FFCE04]' : 'bg-white border border-2 border-gray-200'} rounded-sm shadow-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center`}>
                                    <p className={`${hasRead ? 'font-semibold': 'font-normal'} text-sm italic`}>{format(day, 'd')}</p>
                                </div>
                        </>
                    )})
                }

            </div>

        </div>
    )
}