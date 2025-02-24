import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { UserContext } from "../context/userContext";
import { jwtDecode } from "jwt-decode";

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

interface DecodedToken {
    email: string
}

interface UserProviderProps {
    children: ReactNode
  }

export function UserProvider({children}: UserProviderProps) {
    const [userStatistics, setUserStatistics] = useState<IUserStatistics | null>(null)
    const [userReadings, setUserReadings] = useState<IUserReadings[] | null>(null)
    const [badges, setBadges] = useState<IBadges[] | null>(null)
    const [userEmail, setUserEmail] = useState<string>('')

    const getUserEmailFromDecodeToken = async () => {
        const authToken = localStorage.getItem('authToken')

        if (authToken) {
            try {
                const decoded: DecodedToken = jwtDecode(authToken)
                setUserEmail(decoded.email)
                console.log(decoded.email)
            } catch (error) {
                console.error(error)
            }
        }

    }


    const getUserStatistics = async (email: string) => {
        const response = await api.get('/statistics', {
            params: {
                email: email
            }
        })
        setUserStatistics(response.data)

    }

    const getUserReadings = async (email: string) => {
        const response = await api.get('/readings', {
            params: {
                email: email
            }
        })

        setUserReadings(response.data)
    }

    const getBadges = async () => {
        const response = await api.get('/badge')

        setBadges(response.data)
    }

    useEffect(() => {
        getUserEmailFromDecodeToken()
    }, [])

    useEffect(() => {
        getUserStatistics(userEmail)
        getUserReadings(userEmail)
        getBadges()
    }, [userEmail])

    return (
        <UserContext.Provider
            value={
                {
                    userStatistics,
                    getUserStatistics,
                    userReadings,
                    getUserReadings,
                    badges,
                    getBadges
                }
            }
        >
            {children}
            </UserContext.Provider>
    )
}