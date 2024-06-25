import { getComponent } from '../utils/helpers'

/**
 * Cria um contêiner de página com os componentes fornecidos.
 *
 * @param {...object} childres - Os componentes filhos a serem incluídos na página.
 * @returns {object} O contêiner de página completo.
 */
const getPage = (...childres) => {
  // Cria o componente de página com os componentes filhos fornecidos
  const page = getComponent('div', ...childres)
  page.props['class'] = 'page' // Define a classe CSS para estilização
  page.props['data-page'] = '' // Define o atributo data-page

  return page
}

// Exporta o contêiner de página
export const pageContainer = getPage()
