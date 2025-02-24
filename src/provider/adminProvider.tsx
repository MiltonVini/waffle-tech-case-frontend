import { useEffect } from "react"
import { ReactNode, useState } from "react"
import { AdminContext, INewUsers, IReadCountByPeriod, IReadCountByPost, IUsersCountByStreak } from "../context/adminContext"
import { api } from "../lib/axios"

interface IUsersStreaks {
    id: string
    email: string
    streak: number
    best_streak: number
}

interface IReadCountBySource {
    utm_source: string
    read_count: number
}

interface AdminProviderProps {
    children: ReactNode
  }

export function AdminProvider({children}: AdminProviderProps) {
    const [usersStreaks, setUserStreaks] = useState<IUsersStreaks[] | null >(null)
    const [newUsers, setNewUsers] = useState<INewUsers | null>(null)
    const [readCountBySource, setReadCountBySource] = useState<IReadCountBySource[]>([])
    const [readCountByPost, setReadCountByPost] = useState<IReadCountByPost[]>([])
    const [userCountByStreak, setUserCountByStreak] = useState<IUsersCountByStreak[]>([])
    const [readCountByPeriod, setReadCountByPeriod] = useState<IReadCountByPeriod[]>([])

    const getUsersStreaks = async () => {
        try {
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'users_streaks'
                }
            })
    
            setUserStreaks(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getNewUsers = async () => {
        try {
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'new_users'
                }
            })

            setNewUsers(response.data) 
        } catch (error) {
            console.error(error)
        }
    }

    const getReadCountBySource = async () => {
        try {
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'read_count_by_source'
                }
            })

            setReadCountBySource(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getReadCountByPost = async () => {
        try {     
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'read_count_by_post'
                }
            })

            setReadCountByPost(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getUserCountByStreak = async () => {
        try {
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'users_count_by_streaks'
                }
            })

            setUserCountByStreak(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getReadCountByPeriod = async () => {
        try {
            const response = await api.get('/admin/statistics', {
                params: {
                    statistic: 'read_count_by_reading_period'
                }
            })

            setReadCountByPeriod(response.data)
        } catch (error) {
            console.error(error)
        }
    }



    useEffect(() => {
        getUsersStreaks()
        getNewUsers()
        getReadCountBySource()
        getReadCountByPost()
        getUserCountByStreak()
        getReadCountByPeriod()
    }, [])

    return (
        <AdminContext.Provider
            value={
                {
                    usersStreaks,
                    getUsersStreaks,
                    getNewUsers,
                    newUsers,
                    getReadCountBySource,
                    readCountBySource,
                    getReadCountByPost,
                    readCountByPost,
                    userCountByStreak,
                    getUserCountByStreak,
                    readCountByPeriod,
                    getReadCountByPeriod
                }
            }
        >
        {children}
        </AdminContext.Provider>
    )
}