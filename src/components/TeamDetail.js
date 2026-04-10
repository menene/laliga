import { getTeam } from '@/api.js'

export async function renderTeamDetail(container, { teamId, onBack }) {
  container.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Cargando equipo...</p>
    </div>
  `

  let team
  try {
    team = await getTeam(teamId)
  } catch (err) {
    container.innerHTML = `<div class="error"><p>Error al cargar el equipo: ${err.message}</p></div>`
    return
  }

  const detail = document.createElement('div')
  detail.className = 'team-detail'

  detail.innerHTML = `
    <button class="back-btn">← Volver</button>
    <div class="team-detail-header">
      <img src="${team.crest}" alt="${team.name}" />
      <div>
        <h2>${team.name}</h2>
        ${team.tla ? `<span class="team-tla">${team.tla}</span>` : ''}
      </div>
    </div>
    <div class="team-meta">
      <div class="meta-item">
        <label>Estadio</label>
        <p>${team.venue || '—'}</p>
      </div>
      <div class="meta-item">
        <label>Fundado</label>
        <p>${team.founded || '—'}</p>
      </div>
      <div class="meta-item">
        <label>Colores</label>
        <p>${team.clubColors || '—'}</p>
      </div>
      <div class="meta-item">
        <label>Sitio web</label>
        <p>${team.website
          ? `<a href="${team.website}" target="_blank" rel="noopener">${team.website.replace(/^https?:\/\//, '')}</a>`
          : '—'}</p>
      </div>
    </div>
    ${team.coach ? `
      <div class="team-section">
        <h3>Entrenador</h3>
        <p>${team.coach.name}${team.coach.nationality ? ` — ${team.coach.nationality}` : ''}</p>
      </div>
    ` : ''}
    ${team.squad && team.squad.length ? `
      <div class="team-section">
        <h3>Plantilla</h3>
        <div class="squad-grid">
          ${team.squad.map(p => `
            <div class="squad-player">
              <span class="player-name">${p.name}</span>
              <span class="player-pos">${p.position || '—'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `

  detail.querySelector('.back-btn').addEventListener('click', onBack)

  container.innerHTML = ''
  container.appendChild(detail)
}
