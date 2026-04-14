import '@/css/style.css'
import logo from '@/assets/logo.png'
import { renderTeamList } from '@/components/TeamList.js'
import { renderTeamDetail } from '@/components/TeamDetail.js'
import { Router } from '@/router.js'

const app = document.getElementById('app')

function renderHeader() {
  const header = document.createElement('header')

  const img = document.createElement('img')
  img.src = logo
  img.alt = import.meta.env.VITE_APP_TITLE

  // Make the logo a link to home
  const logoLink = document.createElement('a')
  logoLink.href = '/'
  logoLink.setAttribute('data-link', '')
  logoLink.appendChild(img)

  header.appendChild(logoLink)
  return header
}

// Setup initial structure
app.appendChild(renderHeader())
const main = document.createElement('main')
app.appendChild(main)

// Setup Router
const routes = [
  {
    path: '/',
    view: (container) => renderTeamList(container)
  },
  {
    path: '/team/:id',
    view: (container, params) => renderTeamDetail(container, params.id)
  }
]

export const router = new Router(routes, main)
