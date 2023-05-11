// Função para mudar a classe do menu responsivo para mostrar/esconder o menu ao clicar no ícone
function toggleMenu() {
  const menu = document.querySelector('.menu-navegacao');
  menu.classList.toggle('mostrar');
}

// Seleciona todos os links do menu
const links = document.querySelectorAll('.menu-navegacao a');

// Percorre todos os links e adiciona o evento de clique para fechar o menu responsivo
links.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.menu-navegacao');
    menu.classList.remove('mostrar');
  });
});

// Seleciona o botão de "Topo" e adiciona um evento de clique
const btnTopo = document.querySelector('.botao-topo');
btnTopo.addEventListener('click', () => {
  // Faz a transição suave para o topo da página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Seleciona a seção de depoimentos
const depoimentos = document.querySelector('.depoimentos');

// Seleciona todos os botões de depoimento
const btnDepoimentos = document.querySelectorAll('.depoimento-item .botao');

// Adiciona o evento de clique para expandir ou contrair o depoimento
btnDepoimentos.forEach(botao => {
  botao.addEventListener('click', () => {
    const depoimento = botao.parentElement;
    depoimento.classList.toggle('expandido');
    depoimentos.classList.toggle('expandido');
  });
});

