

$(document).ready(function() {
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
  // Código a ser executado após o carregamento completo da página
  // Adiciona o evento de clique no botão do menu
$('.menu-botao').click(function() {
  // Toggles classe ativo para menu-botao e menu-lista
  $(this).toggleClass('ativo');
  $('.menu-lista').toggleClass('ativo');
});

// Fecha o menu de navegação ao clicar em um link do menu
$('.menu-lista a').click(function() {
  $('.menu-botao').removeClass('ativo');
  $('.menu-lista').removeClass('ativo');
});

  // Inicializa o slider com o plugin slick
$('.slider-principal').slick({
  autoplay: true,
  arrows: false,
  dots: true,
});

// Adiciona o evento de clique no botão de "Próximo" do slider
$('.slider-proximo').click(function() {
  $('.slider-principal').slick('slickNext');
});

// Adiciona o evento de clique no botão de "Anterior" do slider
$('.slider-anterior').click(function() {
  $('.slider-principal').slick('slickPrev');
});
// Adiciona o evento de clique em um link de âncora com classe "scroll-suave"
$('a.scroll-suave').click(function() {
  if (this.hash !== '') {
    event.preventDefault();

    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash;
    });
  }
});
// Inicializa o carrossel de depoimentos com o plugin slick
$('.depoimento-carousel').slick({
  arrows: false,
  dots: true,
});

// Adiciona o evento de clique no botão "Ver Todos" dos depoimentos
$('.depoimento-ver-todos').click(function() {
  $('.depoimento-modal').addClass('ativo');
});

// Adiciona o evento de clique no botão "Fechar" do modal dos depoimentos
$('.depoimento-modal-fechar').click(function() {
  $('.depoimento-modal').removeClass('ativo');
});
// Adiciona o evento de clique no botão "Voltar ao Topo"
$('.voltar-topo').click(function() {
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

});

