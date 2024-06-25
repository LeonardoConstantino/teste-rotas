import { getTextComponent, getComponent } from '../utils/helpers.js'
import copy from '../assets/images/copy.svg'

/**
 * Cria o rodapé da página, incluindo informações sobre o autor e o ano atual.
 *
 * @typedef {object} Icon
 * @property {string} type - O tipo de ícone (por exemplo, 'i').
 * @property {object} props - As propriedades do ícone (por exemplo, classe e estilo).
 */

/**
 * Obtém o componente de texto com o ano atual.
 *
 * @param {string} text - O texto a ser exibido (por exemplo, '2023').
 * @returns {object} O componente de texto.
 */
const currentYear = getTextComponent(`${new Date().getFullYear()}`)

/**
 * Obtém o componente de texto com o nome do autor.
 *
 * @param {string} text - O nome do autor (por exemplo, 'Leonardo H. Constantino').
 * @returns {object} O componente de texto.
 */
const autor = getTextComponent('Leonardo H. Constantino')

/**
 * Cria o ícone com a imagem de cópia.
 *
 * @type {Icon}
 */
const icone = {
  type: 'i',
  props: {
    class: 'copy', // Define a classe CSS para estilização do ícone
    style: `background-image: url("${copy}")`, // Define o estilo com a imagem de cópia
  },
}

/**
 * Cria o rodapé da página com o ícone, ano atual e nome do autor.
 *
 * @returns {object} O componente completo do rodapé.
 */
const createFooter = () => {
  // Cria o componente de parágrafo contendo os elementos de texto e ícone
  return getComponent(
    'footer',
    getComponent(
      'p',
      getComponent('span', icone),
      getComponent('span', currentYear),
      getComponent('span', autor)
    )
  )
}

// Exporta o componente de rodapé
export const footer = createFooter()
