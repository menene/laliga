import React from 'react'
import SquadMember from './SquadMember'

export default function TeamSquadList({ squad }) {
  if (!squad || !squad.length) return null

  return (
    <div className="team-section">
      <h3>Plantilla</h3>
      <div className="squad-grid">
        {squad.map(player => (
          <SquadMember key={player.id || player.name} player={player} />
        ))}
      </div>
    </div>
  )
}
