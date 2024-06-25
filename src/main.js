// Importando estilos, componentes, serviços e utilitários
import './assets/styles/main.css'
import { renderElement } from './utils/renderElement.js'
import { router } from './utils/router.js'
import { header } from './layout/header'
import { footer } from './layout/footer'
import { pageContainer } from './layout/page.js'

const renderPage = () => {
  try {
    // Seleciona o elemento com o ID 'app' para renderizar os componentes
    const app = document.querySelector('#app')
    if (!app) throw new Error('Elemento #app não encontrado')

    // Renderiza os componentes principais da aplicação
    renderElement(header, true, app)
    renderElement(pageContainer, true, app)
    renderElement(footer, true, app)

    // Chama o roteador para gerenciar a navegação
    router()
  } catch (error) {
    console.error('Erro ao renderizar página:', error.message)
  }
}

document.addEventListener('DOMContentLoaded', renderPage)
window.addEventListener('popstate', router)
