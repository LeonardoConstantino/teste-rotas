import { getComponent, getHeader, getSection } from '../utils/helpers'
import { createButton } from '../components/button'
import { navigateTo } from '../utils/router'
import { HOMEPATH } from './../utils/constantes';

const header = getHeader('SEO e Rotas de Navegação', '')

const section1 = getSection(
  'SEO e Rotas ',
  'As rotas de navegação também desempenham um papel crucial na otimização para motores de busca (SEO). URLs claras e bem estruturadas, juntamente com uma navegação fácil de seguir, melhoram a indexação do site pelos motores de busca, resultando em um melhor posicionamento nas páginas de resultados.'
)

const section2 = getSection(
  'Acessibilidade nas Rotas de Navegação',
  'Garantir que as rotas de navegação sejam acessíveis a todos os usuários, incluindo aqueles com deficiências, é essencial. Isso envolve a implementação de práticas como o uso de texto alternativo para links, teclas de atalho e uma navegação que pode ser facilmente compreendida por tecnologias assistivas.'
)

const section3 = getSection(
  'Teste e Melhoria Contínua das Rotas',
  'O desenvolvimento de rotas de navegação eficazes não termina com a implementação inicial. Testes contínuos, como testes A/B e análises de comportamento do usuário, são necessários para identificar problemas e oportunidades de melhoria. A adaptação constante com base no feedback dos usuários assegura que a navegação permaneça eficiente e satisfatória.'
)

const section4 = getSection(
  'Conclusão',
  'Rotas de navegação web bem planejadas e implementadas são cruciais para a criação de uma experiência de usuário positiva. Desde a arquitetura de informação até a acessibilidade e testes contínuos, cada aspecto deve ser cuidadosamente considerado para garantir que os usuários possam navegar pelo site de maneira intuitiva e eficiente.'
)

const main = getComponent('main', section1, section2, section3, section4)

const footerAction = createButton(
  'Volte para: Introdução às Rotas de Navegação Web',
  () => {
    navigateTo(location.origin + HOMEPATH + '/')
  }
)

const footer = getComponent('footer', footerAction)

const loadContactPage = () => {
  const contact = getComponent('div', header, main, footer)

  contact.props['class'] = 'contact page'

  return contact
}

export const contactPage = loadContactPage()
