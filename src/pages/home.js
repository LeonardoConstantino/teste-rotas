import { getComponent, getHeader, getSection } from '../utils/helpers'
import { navigateTo } from '../utils/router'
import { createButton } from './../components/button'

const header = getHeader(
  'Rotas de Navegação Web',
  'Introdução às Rotas de Navegação Web'
)

const section1 = getSection(
  'Introdução',
  'As rotas de navegação web são fundamentais para a experiência do usuário em um site. Elas determinam como as diferentes páginas e recursos de um site estão interligados, permitindo que os visitantes encontrem rapidamente as informações de que precisam. A definição de rotas claras e intuitivas melhora significativamente a usabilidade e a satisfação do usuário.'
)

const section2 = getSection(
  'Importância da Arquitetura de Informação',
  'A arquitetura de informação é a base para a criação de rotas de navegação eficientes. Ela envolve a organização e a estruturação do conteúdo de um site de maneira lógica e acessível. Uma arquitetura bem planejada ajuda os usuários a compreenderem o layout do site e a encontrarem o que procuram sem frustrações.'
)

const section3 = getSection(
  'Tipos de Rotas de Navegação',
  'A instalação do Drawall é rápida e prática, acelerando o progresso da obra. Com menos tempo gasto em cada etapa, seus projetos são concluídos mais rápido, permitindo iniciar novos empreendimentos com maior frequência.'
)

const main = getComponent('main', section1, section2, section3)

const footerAction = createButton(
  'Veja sobre: Ferramentas para Mapear Rotas',
  () => {
    navigateTo(location.origin + '/Ferramentas')
  }
)

const footer = getComponent('footer', footerAction)

const loadHomePage = () => {
  const home = getComponent('div', header, main, footer)

  home.props['class'] = 'home page'

  return home
}

export const HomePage = loadHomePage()
