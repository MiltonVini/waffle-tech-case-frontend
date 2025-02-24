import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from './App'
import Auth from "./Auth"
import { AuthProvider } from "./provider/authProvider"
import AdminPanel from "./AdminPanel"
import { AdminProvider } from "./provider/adminProvider"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={
                    <AuthProvider>
                        <Auth />
                    </AuthProvider>
                    } />
                <Route path='/streak' element={<App />} />
                <Route path='/admin' element={
                    <AdminProvider>
                        <AdminPanel />
                    </AdminProvider>
                    } />
            </Routes>
        </Router>
    )
}

export default AppRoutes
