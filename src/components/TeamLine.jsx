import React from 'react'
import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'

export default function TeamLine({ row }) {
  const { team, position, playedGames, won, draw, lost, goalDifference, points } = row
  
  let zoneClass = ''
  if (position <= 4) zoneClass = 'zone-champions'
  else if (position <= 6) zoneClass = 'zone-europa'
  else if (position >= 18) zoneClass = 'zone-relegation'

  return (
    <Link to={`/team/${team.id}`} className={`standings-row ${zoneClass}`}>
      <span className="col-pos">{position}</span>
      <span className="col-team">
        <TeamLogo src={team.crest} alt={team.name} size="24px" />
        <span>{team.name}</span>
      </span>
      <span className="col-stat">{playedGames}</span>
      <span className="col-stat">{won}</span>
      <span className="col-stat">{draw}</span>
      <span className="col-stat">{lost}</span>
      <span className="col-stat">{goalDifference > 0 ? '+' : ''}{goalDifference}</span>
      <span className="col-stat col-pts">{points}</span>
    </Link>
  )
}
