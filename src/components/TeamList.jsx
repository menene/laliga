import React, { useState, useEffect } from 'react'
import { getStandings } from '@/api.js'
import StandingsTable from './StandingsTable'
import StandingsLegend from './StandingsLegend'
import StandingsAbbr from './StandingsAbbr'

export default function TeamList() {
  const [table, setTable] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getStandings()
      .then(data => {
        setTable(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando clasificación...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>Error al cargar clasificación: {error}</p>
      </div>
    )
  }

  return (
    <>
      <p className="standings-title">Clasificación · LaLiga EA Sports</p>
      <StandingsTable table={table} />
      <StandingsLegend />
      <StandingsAbbr />
    </>
  )
}
