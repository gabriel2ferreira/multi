$(document).ready(function() {

  // variáveis para manipulação dos elementos do DOM
  const menuMobile = $(".menu-mobile");
  const navbar = $(".navbar");
  const navbarLinks = $(".navbar-links");
  const logo = $(".logo");
  const topButton = $(".top-button");

  // função para abrir e fechar o menu mobile
  menuMobile.click(function() {
    navbar.toggleClass("navbar-open");
    navbarLinks.slideToggle(300);
    logo.toggleClass("logo-menu-open");
  });

  // função para fechar o menu mobile quando um link for clicado
  navbarLinks.click(function() {
    navbar.removeClass("navbar-open");
    navbarLinks.slideUp(300);
    logo.removeClass("logo-menu-open");
  });

  // função para voltar ao topo da página
  topButton.click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // função para esconder e mostrar o botão de voltar ao topo
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topButton.fadeIn();
    } else {
      topButton.fadeOut();
    }
  });

});
$(document).ready(function() {

  // variáveis para manipulação dos elementos do DOM
  const depoimentos = $(".depoimentos");
  const depoimentoItems = $(".depoimento-item");
  const depoimentoButtons = $(".depoimento-item .botao");
  let depoimentoIndex = 0;

  // função para mostrar o próximo depoimento
  function nextDepoimento() {
    depoimentoItems.eq(depoimentoIndex).removeClass("ativo");
    depoimentoIndex = (depoimentoIndex + 1) % depoimentoItems.length;
    depoimentoItems.eq(depoimentoIndex).addClass("ativo");
  }

  // função para mostrar o depoimento anterior
  function prevDepoimento() {
    depoimentoItems.eq(depoimentoIndex).removeClass("ativo");
    depoimentoIndex = (depoimentoIndex - 1 + depoimentoItems.length) % depoimentoItems.length;
    depoimentoItems.eq(depoimentoIndex).addClass("ativo");
  }

  // função para exibir o botão de próximo depoimento
  function showNextButton() {
    depoimentoButtons.eq(1).fadeIn();
  }

  // função para esconder o botão de próximo depoimento
  function hideNextButton() {
    depoimentoButtons.eq(1).fadeOut();
  }

  // função para exibir o botão de depoimento anterior
  function showPrevButton() {
    depoimentoButtons.eq(0).fadeIn();
  }

});
$(document).ready(function() {

  // variáveis para manipulação dos elementos do DOM
  const depoimentos = $(".depoimentos");
  const depoimentoItems = $(".depoimento-item");
  const depoimentoButtons = $(".depoimento-item .botao");
  let depoimentoIndex = 0;

  // função para esconder o botão de depoimento anterior
  function hidePrevButton() {
    depoimentoButtons.eq(0).fadeOut();
  }

  // função para atualizar a exibição dos botões de navegação
