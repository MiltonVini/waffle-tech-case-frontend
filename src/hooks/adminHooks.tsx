import { useContext } from 'react'
import { AdminContext } from '../context/adminContext'

export function UseAdmin() {
  const context = useContext(AdminContext)

  return context
}