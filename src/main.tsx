import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserProvider } from './provider/userProvider.tsx'
import Routes from './Routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </StrictMode>,
)
