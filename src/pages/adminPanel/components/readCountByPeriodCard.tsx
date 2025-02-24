import { UseAdmin } from "../../../hooks/adminHooks"

export function ReadCountByPeriodCard() {
    const { readCountByPeriod } = UseAdmin()

    return (
        <div className="flex-1 h-[24rem] bg-white border border-gray-200 rounded-sm shadow-lg p-4">
            <p className="text-lg font-semibold mb-4">📊 Contagem de Leituras por Período</p>
            <div className="grid grid-cols-2 gap-4 m-4">
                {readCountByPeriod.map((data, index) => (
                    <div key={index} className="flex flex-col items-center m-2">
                        <div 
                            className={`flex items-center justify-center rounded-full w-16 h-16 ${data.reading_period === 'Manhã' ? 'bg-yellow-500' : 
                                         data.reading_period === 'Almoço' ? 'bg-red-500' : 
                                         data.reading_period === 'Tarde' ? 'bg-green-500' : 
                                         'bg-blue-500'}`}
                        >
                            <span className="text-3xl">{data.reading_period === 'Manhã' ? '🌅' : 
                                                     data.reading_period === 'Almoço' ? '🍽️' : 
                                                     data.reading_period === 'Tarde' ? '☀️' : 
                                                     '🌙'}</span>
                        </div>
                        <span className="font-semibold text-lg">{data.reading_period}</span>
                        <span className="text-lg">{data.count} leituras</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
