import { getComponent, getHeader, getSection } from '../utils/helpers'
import { navigateTo } from '../utils/router'
import { createButton } from './../components/button'
import { HOMEPATH } from './../utils/constantes';

const header = getHeader(
  'Rotas de Navegação Web',
  'Ferramentas para Mapear Rotas.'
)

const section1 = getSection(
  'Ferramentas',
  'Para mapear rotas de navegação, ferramentas como diagramas de fluxo, wireframes e sitemaps são extremamente úteis. Estas ferramentas ajudam os desenvolvedores e designers a visualizar a estrutura do site e a planejar as melhores rotas possíveis para a navegação dos usuários.'
)

const section2 = getSection(
  'Navegação Intuitiva e UX',
  'A usabilidade e a experiência do usuário (UX) estão intimamente ligadas à navegação intuitiva. Sites com navegação intuitiva permitem que os usuários encontrem facilmente o que estão procurando, sem precisar adivinhar onde clicar. Menus claros, links visíveis e breadcrumbs são elementos que contribuem para uma navegação intuitiva.'
)

const section3 = getSection(
  'Rotas Dinâmicas e SPA (Single Page Applications)',
  'As Single Page Applications (SPA) utilizam rotas dinâmicas para carregar conteúdo sem a necessidade de recarregar a página inteira. Este tipo de navegação oferece uma experiência de usuário mais rápida e fluida, utilizando frameworks como React, Angular e Vue.js para gerenciar rotas e estados da aplicação.'
)

const main = getComponent('main', section1, section2, section3)

const footerAction = createButton(
  'Veja sobre: SEO e Rotas de Navegação',
  () => {
    navigateTo(location.origin + HOMEPATH + '/SEO')
  }
)

const footer = getComponent('footer', footerAction)

const loadAbout = () => {
  const about = getComponent('div', header, main, footer)

  about.props['class'] = 'about page'

  return about
}

export const aboutPage = loadAbout()
