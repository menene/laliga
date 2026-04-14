import React from 'react'

export default function CoachInfo({ coach }) {
  if (!coach) return null

  return (
    <div className="team-section">
      <h3>Entrenador</h3>
      <p>
        {coach.name}
        {coach.nationality ? ` — ${coach.nationality}` : ''}
      </p>
    </div>
  )
}
