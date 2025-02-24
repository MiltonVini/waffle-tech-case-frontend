import { UserStreak } from "./pages/userStreakPanel/components/userStreak"
import { UserStatistics } from "./pages/userStreakPanel/components/userStatistics"
import { UserReadingWeek } from "./pages/userStreakPanel/components/userReadingWeek"
import { UserReadingMonth } from "./pages/userStreakPanel/components/userReadingMonth"
import { UserAchivements } from "./pages/userStreakPanel/components/userAchivements"


function App() {
  return (
    <>

      <div className="bg-gray-100 min-h-screen flex flex-col items-center">

      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-lg font-medium text-gray-800">The News - Tech Case</h2>
        <h2 className="text-2xl font-semibold text-[#FFCE04]">Sua Jornada de Leitura</h2>
        <p className="text-gray-600">Acompanhe a sua jornada de leitura no The News</p>
     </div>


      <UserStreak />
      <UserStatistics />
      <UserAchivements />
      <UserReadingWeek />
      <UserReadingMonth />


    </div>
    </>
  )
}

export default App
