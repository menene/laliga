const BASE_URL = '/api/'

export async function getStandings() {
  const res = await fetch(`${BASE_URL}competitions/PD/standings`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return data.standings[0].table
}

export async function getTeam(id) {
  const res = await fetch(`${BASE_URL}teams/${id}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
