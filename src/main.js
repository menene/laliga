import '@/css/style.css'
import logo from '@/assets/logo.png'
import { renderTeamList } from '@/components/TeamList.js'
import { renderTeamDetail } from '@/components/TeamDetail.js'

const app = document.getElementById('app')

let currentTeamId = null

function renderHeader() {
  const header = document.createElement('header')

  const img = document.createElement('img')
  img.src = logo
  img.alt = import.meta.env.VITE_APP_TITLE

  header.appendChild(img)
  return header
}

async function render() {
  app.innerHTML = ''
  app.appendChild(renderHeader())

  const main = document.createElement('main')
  app.appendChild(main)

  if (currentTeamId === null) {
    await renderTeamList(main, {
      onTeamClick: (id) => {
        currentTeamId = id
        render()
      }
    })
  } else {
    await renderTeamDetail(main, {
      teamId: currentTeamId,
      onBack: () => {
        currentTeamId = null
        render()
      }
    })
  }
}

render()
