import { createContext } from "react";

interface IUsersStreaks {
    id: string
    email: string
    streak: number
    best_streak: number
}

export interface INewUsers {
    last_7_days_new_users_count: number
    previous_week_new_users_count: number
    growth_percentage: number
}

/*
interface IReadCountByPost {
    id: string
    count: number
}
*/

interface IReadCountBySource {
    utm_source: string
    read_count: number
}

export interface IReadCountByPost {
    id: string
    read_count: number
}

export interface IUsersCountByStreak {
    streak: string
    current_streak_count: number
}

export interface IReadCountByPeriod {
    reading_period: string
    count: number
}

export interface IDateRange {
    startDate: Date;
    endDate: Date;
    key: string;
  }
  


interface AdminContextType {
    usersStreaks: IUsersStreaks[] | null
    getUsersStreaks: () => Promise<void>
    getNewUsers: () => Promise<void>
    newUsers: INewUsers | null
    // readCountByPost: IReadCountByPost[]
    readCountBySource: IReadCountBySource[] | []
    getReadCountBySource: () => Promise<void>
    readCountByPost: IReadCountByPost[] | []
    getReadCountByPost: () => Promise<void>
    userCountByStreak: IUsersCountByStreak[]
    getUserCountByStreak: () => Promise<void>
    readCountByPeriod: IReadCountByPeriod[],
    getReadCountByPeriod: () => Promise<void>
}

export const AdminContext = createContext({} as AdminContextType)