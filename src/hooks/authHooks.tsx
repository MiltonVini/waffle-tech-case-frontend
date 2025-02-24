import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export function UseAuth() {
  const context = useContext(AuthContext)

  return context
}