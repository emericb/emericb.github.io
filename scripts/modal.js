$(document).ready(function(){

  // MODAL
  var modalText = {
    abc: {
      title: 'ABCWebSite',
      tag: 'Practice website',
      detail: 'Practice website HTML/CSS responsive website I made while learning',
      link: 'https://github.com/emericb/HTML_CSS_Maquette_Introduction'
    },
    safy: {
      title: 'Safy',
      tag: 'Practice website.',
      detail: 'Practice website HTML/CSS responsive website I made while learning.',
      link: 'https://github.com/emericb/HTML_CSS_Maquette_Responsive'
    },
    myquizz: {
      title: 'My Quizz',
      tag: 'My quizz Symfony.',
      detail: 'A quizz website using Symfony and Twig.',
      link: 'https://github.com/emericb/My_quizz'
    },
    twitter: {
      title: 'My Twitter',
      tag: 'twitter reproduction project',
      detail: 'Reproduction of twitter social website using PHP, JavaScript, HTML and CSS.',
      link: ''

    },
    connect4: {
      title: 'connect4',
      tag: 'Jquery game',
      detail: 'Connect 4 using jquery, playable solo or with a friend !',
      link: 'https://github.com/emericb/JavaScript_Puissance4'
    },
    ecorp: {
      title: 'E-Corp',
      tag: 'E-commerce.',
      detail: 'E-Corp is trade website using Symfony 4 API REST and React/Redux view.',
      link: 'https://github.com/emericb/E-Commerce-Symfony-React/tree/master'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
