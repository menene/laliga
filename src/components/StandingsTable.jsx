import React from 'react'
import TeamLine from './TeamLine'

export default function StandingsTable({ table }) {
  return (
    <div className="standings">
      <div className="standings-header">
        <span className="col-pos">#</span>
        <span className="col-team">Equipo</span>
        <span className="col-stat">PJ</span>
        <span className="col-stat">G</span>
        <span className="col-stat">E</span>
        <span className="col-stat">P</span>
        <span className="col-stat">DG</span>
        <span className="col-stat col-pts">Pts</span>
      </div>
      {table.map(row => (
        <TeamLine key={row.team.id} row={row} />
      ))}
    </div>
  )
}
