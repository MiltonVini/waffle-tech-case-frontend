import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

interface AuthProviderProps {
    children: ReactNode
  }

export function AuthProvider({children}: AuthProviderProps) {
    const [loading, setLoading] = useState<boolean>(true)

    
    const authenticate = async () => {
        const authToken = new URLSearchParams(window.location.search).get('token')
        
        if (authToken) {

            try {
                const response = await axios.get('http://localhost:3000/authenticate/verify-token', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })

                if (response.data.message === 'Valid token') {
                    localStorage.setItem('authToken', authToken)

                    setTimeout(() => {
                        window.location.href = '/streak'
                    }, 3000);
                }
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            }
        }

        if (!authToken) {
            localStorage.removeItem('authToken')
            window.location.href = '/'

        }
    }

    useEffect(() => {
        authenticate()
    }, [])



    return (
            <AuthContext.Provider
                value={
                    {
                        authenticate,
                        loading
                    }
                }
            >
                {children}
                </AuthContext.Provider>

    )
}