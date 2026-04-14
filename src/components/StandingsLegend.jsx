import React from 'react'

export default function StandingsLegend() {
  return (
    <div className="standings-legend">
      <span className="legend-item">
        <span className="legend-dot" style={{ background: 'var(--champions)' }}></span>
        Champions League
      </span>
      <span className="legend-item">
        <span className="legend-dot" style={{ background: 'var(--europa)' }}></span>
        Europa League
      </span>
      <span className="legend-item">
        <span className="legend-dot" style={{ background: 'var(--relegation)' }}></span>
        Descenso
      </span>
    </div>
  )
}
