import { createContext } from "react";

interface AuthContextType {
    authenticate: () => Promise<void>
    loading: boolean
}

export const AuthContext = createContext({} as AuthContextType)