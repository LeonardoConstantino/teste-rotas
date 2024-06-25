import { HOMEPATH } from './constantes.js';
import { aboutPage } from '../pages/about'
import { contactPage } from '../pages/contact'
import { HomePage } from '../pages/home'
import { notFoundPage } from '../pages/notFound'
import { renderElement } from './renderElement'

/**
 * Define as rotas e suas visualizações.
 *
 * @typedef {object} Route
 * @property {string} path - O caminho da rota.
 * @property {function} view - A função que retorna a visualização da rota.
 */

/**
 * Array de rotas com seus caminhos e visualizações.
 * @type {Route[]}
 */
const routes = [
  // { path: '/teste-rotas/', view: HomePage },
  { path: HOMEPATH + '/', view: HomePage },
  { path: HOMEPATH + '/Ferramentas', view: aboutPage },
  { path: HOMEPATH + '/SEO', view: contactPage },
  { path: HOMEPATH + '/404', view: notFoundPage },
]

/**
 * Transforma um caminho em uma expressão regular.
 *
 * @param {string} path - O caminho a ser transformado.
 * @returns {RegExp} A expressão regular correspondente ao caminho.
 */
const pathToRegex = (path) => new RegExp(`^${path.replace(/\//g, '\\/')}$`)

/**
 * Encontra a rota correspondente ao caminho atual.
 *
 * @param {string} currentPath - O caminho atual.
 * @returns {Route} A rota correspondente.
 */
const matchRoute = (currentPath) => {
  return (
    routes.find((route) => pathToRegex(route.path).test(currentPath)) ||
    routes.find((route) => route.path === HOMEPATH + '/404')
  )
}

/**
 * Função do roteador que atualiza a visualização com base no caminho atual.
 * @async
 * @returns {void}
 */
export const router = async () => {
  const currentPath = location.pathname
  const matchedRoute = matchRoute(currentPath)
  const page = await matchedRoute.view

  const containerPage = document.querySelector('[data-page]')
  containerPage.innerHTML = ''

  renderElement(page, true, containerPage)
}

/**
 * Array com os caminhos das rotas.
 * @type {string[]}
 */
export const paths = routes.map((route) => route.path)

/**
 * Navega para uma URL específica.
 *
 * @param {string} url - A URL para navegação.
 * @returns {void}
 */
export const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}
