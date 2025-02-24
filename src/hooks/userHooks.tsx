import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export function UseUserStatistics() {
  const context = useContext(UserContext)

  return context
}