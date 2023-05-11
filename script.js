// Definindo uma função para checar o tamanho da janela
function checarTamanhoJanela() {
  // Se o tamanho da janela for menor que 768px, adicionar classe "menu-mobile"
  if ($(window).width() < 768) {
    $('nav').addClass('menu-mobile');
  }
  // Senão, remover classe "menu-mobile"
  else {
    $('nav').removeClass('menu-mobile');
  }
}

$(document).ready(function() {

  // Chamando a função para checar o tamanho da janela no carregamento da página
  checarTamanhoJanela();

  // Definindo uma função para abrir e fechar o menu mobile
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('menu-aberto');
  });

  // Definindo uma função para fechar o menu mobile ao clicar em um item
  $('.menu-mobile a').click(function() {
    $('nav').removeClass('menu-aberto');
  });

});

// Chamando a função para checar o tamanho da janela sempre que a janela for redimensionada
$(window).resize(checarTamanhoJanela);

$(document).ready(function () {

  // Seleciona todos os elementos <a> dentro de <li>
  var menuItens = $("nav ul li a");

  // Seleciona a barra de navegação
  var navbar = $("nav");

  // Seleciona o botão de scroll para o topo
  var scrollTopButton = $("#scroll-top-btn");

  // Função para mudar a classe ativa do item de menu selecionado
  function toggleActiveClass(selectedMenu) {
    menuItens.removeClass("active");
    selectedMenu.addClass("active");
  }

  // Função para fechar o menu móvel quando um link é clicado
  function closeMobileMenu() {
    if (navbar.hasClass("mobile-menu-active")) {
      navbar.removeClass("mobile-menu-active");
    }
  }

  // Função para rolar suavemente para o topo da página
  function scrollToTop() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  }

  // Adiciona um evento de clique em cada item do menu
  menuItens.click(function (event) {
    event.preventDefault();
    var selectedMenu = $(this);
    var target = selectedMenu.attr("href");
    toggleActiveClass(selectedMenu);

    $("html, body").animate({
      scrollTop: $(target).offset().top - 100
    }, "slow");

    closeMobileMenu();
  });

  // Adiciona um evento de clique no botão de scroll para o topo
  scrollTopButton.click(function () {
    scrollToTop();
  });

  // Adiciona um evento de rolagem para mostrar o botão de scroll para o topo
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 500) {
      scrollTopButton.addClass("show-scroll-top");
    } else {
      scrollTopButton.removeClass("show-scroll-top");
    }
  });

  // Adiciona um evento de clique no ícone do menu móvel para exibir/ocultar o menu
  $(".menu-toggle").click(function () {
    navbar.toggleClass("mobile-menu-active");
  });

});
