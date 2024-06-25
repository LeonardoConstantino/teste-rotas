import {
  capitalizeFirstLetter,
  getComponent,
  getTextComponent,
} from '../utils/helpers'
import { navigateTo, paths } from '../utils/router'

/**
 * Cria um componente de navegação contendo links para as rotas definidas.
 *
 * @typedef {object} Anchor
 * @property {string} href - O URL do link.
 * @property {string} text - O texto do link.
 */

/**
 * Filtra os caminhos das rotas, excluindo a rota '/404'.
 *
 * @returns {string[]} Os caminhos das rotas filtrados.
 */
const hrefList = paths.filter((i) => i !== '/404')

/**
 * Manipulador de evento para navegação programática.
 *
 * @param {Event} e - O evento de clique no link.
 * @returns {void}
 */
const setRouter = (e) => {
  e.preventDefault()
  navigateTo(e.target.href)
  const anchors = e.currentTarget.closest('nav').querySelectorAll('a')

  anchors.forEach((a) => {
    a.classList.remove('display-none')
    if (a.pathname === location.pathname) {
      a.classList.add('display-none')
    }
  })
}

/**
 * Cria os links de navegação com base nos caminhos das rotas.
 *
 * @returns {object} O componente de navegação completo.
 */
export const createNavigation = () => {
  const anchors = hrefList.map((href) => {
    const a = getComponent(
      'a',
      getTextComponent(
        `${href === '/teste-rotas/' ? 'Introdução' : capitalizeFirstLetter(href.slice(1))}`
      )
    )
    a.props['data-link'] = ''
    a.props['href'] = href
    a.props['onClick'] = (e) => {
      setRouter(e)
    }
    if (href === location.pathname) {
      a.props['class'] = 'display-none'
    }
    return a
  })

  // const doc = getComponent('a', getTextComponent('Doc'))
  // doc.props['href'] = 'https://raw.githubusercontent.com/LeonardoConstantino/teste-rotas/main/out/index.html'
  // doc.props['target'] = '_blank'

  // const nav = getComponent('nav', ...anchors, doc)
  const nav = getComponent('nav', ...anchors)

  return nav
}

// Cria o contêiner de navegação
const divNav = getComponent('div', createNavigation())
divNav.props['data-nav'] = ''

// Exporta o componente de navegação
export const navigation = divNav
