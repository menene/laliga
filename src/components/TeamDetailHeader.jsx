import React from 'react'
import TeamLogo from './TeamLogo'

export default function TeamDetailHeader({ crest, name, tla }) {
  return (
    <div className="team-detail-header">
      <TeamLogo src={crest} alt={name} size="80px" />
      <div>
        <h2>{name}</h2>
        {tla && <span className="team-tla">{tla}</span>}
      </div>
    </div>
  )
}
