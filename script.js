$(document).ready(function() {
  // 1. Adicionar classe "ativo" ao menu ativo
  $('.menu a').click(function() {
    $('.menu a').removeClass('ativo');
    $(this).addClass('ativo');
  });

  // 2. Ativar e desativar menu mobile
  $('.btn-menu').click(function() {
    $('nav').toggleClass('ativo');
    $(this).toggleClass('ativo');
  });

  // 3. Efeito de rolagem suave
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
  });

  // 4. Efeito de slide nos depoimentos
  var totalDepoimentos = $('.depoimento-item').length;
  var slideAtual = 0;

  function mudarSlide() {
    $('.depoimento-item').fadeOut();
    $('.depoimento-item').eq(slideAtual).fadeIn();
  }

  function proximoSlide() {
    slideAtual++;
    if (slideAtual >= totalDepoimentos) {
      slideAtual = 0;
    }
    mudarSlide();
  }

  setInterval(proximoSlide, 5000);

  // 5. Efeito de animação no scroll
  $(window).scroll(function() {
    var topoJanela = $(window).scrollTop();
    $('.animar').each(function() {
      var topoObjeto = $(this).offset().top;
      if (topoJanela > topoObjeto - $(window).height() + 200) {
        $(this).addClass('ativo');
      }
    });
  });
});
