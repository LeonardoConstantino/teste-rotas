import { getComponent, getTextComponent } from '../utils/helpers'
import { HOMEPATH } from './../utils/constantes';

/**
 * Carrega a página de "Não Encontrado" (404) montando os componentes de cabeçalho, parágrafo e link.
 *
 * @returns {object} O componente completo da página "Não Encontrado".
 */
const loadNotFound = () => {
  // Cria o componente de cabeçalho com o texto "404"
  const h1 = getComponent('h1', getTextComponent('404'))

  // Cria o componente de parágrafo com o texto "Página Não Encontrada"
  const p = getComponent('p', getTextComponent('Página Não Encontrada'))

  // Cria o componente de link com o texto "Voltar para a Página Inicial"
  const a = getComponent('a', getTextComponent('Voltar para a Página Inicial'))
  a.props['href'] = HOMEPATH // Define o atributo href para redirecionar à página inicial

  // Monta o componente completo da página "Não Encontrado"
  const notFound = getComponent('div', h1, p, a)
  notFound.props['class'] = 'not-found' // Define a classe CSS para estilização

  return notFound
}

// Exporta a página "Não Encontrado"
export const notFoundPage = loadNotFound()
