import { getComponent } from '../utils/helpers'
import { navigation } from './navigation'
import Router from '../assets/images/Router.svg'

/**
 * Cria o cabeçalho da página, incluindo o logotipo e a navegação.
 *
 * @returns {object} O componente completo do cabeçalho.
 */
const createHeader = () => {
  // Cria o componente de imagem para o logotipo
  const img = getComponent('img')
  img.props['src'] = Router

  // Cria o componente de logotipo contendo a imagem
  const logo = getComponent('div', img)
  logo.props['class'] = 'header-logo' // Define a classe CSS para estilização

  // Retorna o cabeçalho completo com o logotipo e a navegação
  return getComponent('header', logo, navigation)
}

// Exporta o componente de cabeçalho
export const header = createHeader()
