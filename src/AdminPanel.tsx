import { MostEngagedUsersCard } from "./pages/adminPanel/components/mostEngagedUsersCard"
import { NewUsersCard } from "./pages/adminPanel/components/newUsersCard"
import { ReadCountByPeriodCard } from "./pages/adminPanel/components/readCountByPeriodCard";
import { ReadCountByPostCard } from "./pages/adminPanel/components/readCountByPostCard";
import { ReadCountBySourceCard } from "./pages/adminPanel/components/readCountBySourceCard"
import { UserCountByStreakCard } from "./pages/adminPanel/components/userCountByStreakCard";

function AdminPanel() {
    return (
        <div className="p-8">
            <h1 className="m-6 text-[#FFCE04] font-semibold text-2xl">Painel Administrativo</h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 flex">
                <NewUsersCard />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <MostEngagedUsersCard />
                <UserCountByStreakCard />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <ReadCountByPostCard />
                <ReadCountBySourceCard />
                <ReadCountByPeriodCard />
            </div>
        </div>
    )
}

export default AdminPanel
