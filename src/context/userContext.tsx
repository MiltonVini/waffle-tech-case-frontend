import { createContext } from "react";

interface IUserStatistics {
    streak: number
    best_streak: number
    register_days: number
    read_count: number
    user_favorite_reading_period: string
}

interface IUserReadings {
    id: string
    created_at: string
}

interface IBadges {
    id: string
    name: string
    description: string
    streak_required: number
}

interface UserContextType {
    userStatistics: IUserStatistics | null
    getUserStatistics: (email: string) => Promise<void>
    userReadings: IUserReadings[] | null
    getUserReadings: (email: string) => Promise<void>
    getBadges: () => Promise<void>
    badges:IBadges[] | null
}

export const UserContext = createContext({} as UserContextType)
