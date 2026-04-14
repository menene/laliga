import React from 'react'

function TeamMetaItem({ label, value, isLink = false }) {
  return (
    <div className="meta-item">
      <label>{label}</label>
      {isLink && value ? (
        <p>
          <a href={value} target="_blank" rel="noopener">
            {value.replace(/^https?:\/\//, '')}
          </a>
        </p>
      ) : (
        <p>{value || '—'}</p>
      )}
    </div>
  )
}

export default function TeamMeta({ team }) {
  return (
    <div className="team-meta">
      <TeamMetaItem label="Estadio" value={team.venue} />
      <TeamMetaItem label="Fundado" value={team.founded} />
      <TeamMetaItem label="Colores" value={team.clubColors} />
      <TeamMetaItem label="Sitio web" value={team.website} isLink />
    </div>
  )
}
