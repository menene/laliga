import { getStandings } from '@/api.js'

export async function renderTeamList(container, { onTeamClick }) {
  container.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Cargando clasificación...</p>
    </div>
  `

  let table
  try {
    table = await getStandings()
  } catch (err) {
    container.innerHTML = `<div class="error"><p>Error al cargar clasificación: ${err.message}</p></div>`
    return
  }

  const wrapper = document.createElement('div')
  wrapper.className = 'standings'

  wrapper.innerHTML = `
    <div class="standings-header">
      <span class="col-pos">#</span>
      <span class="col-team">Equipo</span>
      <span class="col-stat">PJ</span>
      <span class="col-stat">G</span>
      <span class="col-stat">E</span>
      <span class="col-stat">P</span>
      <span class="col-stat">DG</span>
      <span class="col-stat col-pts">Pts</span>
    </div>
  `

  table.forEach(row => {
    const item = document.createElement('div')
    item.className = 'standings-row'

    if (row.position <= 4) item.classList.add('zone-champions')
    else if (row.position <= 6) item.classList.add('zone-europa')
    else if (row.position >= 18) item.classList.add('zone-relegation')

    item.innerHTML = `
      <span class="col-pos">${row.position}</span>
      <span class="col-team">
        <img src="${row.team.crest}" alt="${row.team.name}" />
        <span>${row.team.name}</span>
      </span>
      <span class="col-stat">${row.playedGames}</span>
      <span class="col-stat">${row.won}</span>
      <span class="col-stat">${row.draw}</span>
      <span class="col-stat">${row.lost}</span>
      <span class="col-stat">${row.goalDifference > 0 ? '+' : ''}${row.goalDifference}</span>
      <span class="col-stat col-pts">${row.points}</span>
    `

    item.addEventListener('click', () => onTeamClick(row.team.id))
    wrapper.appendChild(item)
  })

  const legend = document.createElement('div')
  legend.className = 'standings-legend'
  legend.innerHTML = `
    <span class="legend-item"><span class="legend-dot" style="background:var(--champions)"></span>Champions League</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--europa)"></span>Europa League</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--relegation)"></span>Descenso</span>
  `

  const abbr = document.createElement('div')
  abbr.className = 'standings-abbr'
  abbr.innerHTML = `
    <span><b>PJ</b> Partidos Jugados</span>
    <span><b>G</b> Ganados</span>
    <span><b>E</b> Empates</span>
    <span><b>P</b> Perdidos</span>
    <span><b>DG</b> Diferencia de Goles</span>
    <span><b>Pts</b> Puntos</span>
  `

  container.innerHTML = ''
  const title = document.createElement('p')
  title.className = 'standings-title'
  title.textContent = 'Clasificación · LaLiga EA Sports'
  container.appendChild(title)
  container.appendChild(wrapper)
  container.appendChild(legend)
  container.appendChild(abbr)
}
