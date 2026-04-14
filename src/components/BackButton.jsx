import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton({ to = '/', label = '← Volver' }) {
  return (
    <Link to={to} className="back-btn">
      {label}
    </Link>
  )
}
