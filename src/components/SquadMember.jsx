import React from 'react'

export default function SquadMember({ player }) {
  return (
    <div className="squad-player">
      <span className="player-name">{player.name}</span>
      <span className="player-pos">{player.position || '—'}</span>
    </div>
  )
}
