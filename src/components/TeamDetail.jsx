import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTeam } from '@/api.js'
import TeamSquadList from './TeamSquadList'
import TeamDetailHeader from './TeamDetailHeader'
import TeamMeta from './TeamMeta'
import CoachInfo from './CoachInfo'
import BackButton from './BackButton'

export default function TeamDetail() {
  const { id } = useParams()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTeam(id)
      .then(data => {
        setTeam(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando equipo...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>Error al cargar el equipo: {error}</p>
      </div>
    )
  }

  return (
    <div className="team-detail">
      <BackButton />
      <TeamDetailHeader 
        crest={team.crest} 
        name={team.name} 
        tla={team.tla} 
      />
      <TeamMeta team={team} />
      <CoachInfo coach={team.coach} />
      <TeamSquadList squad={team.squad} />
    </div>
  )
}
