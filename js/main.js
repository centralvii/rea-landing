window.onload = function() {
$('.single-item').slick({
    infinite: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
      const content = title.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  $(window).on('scroll', function() {
    $('.scroll-fade').each(function() {
        var delay = $(this).data('delay');
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top && $(this).css('opacity') == 0) {
            $(this).css('transition-delay', delay + 'ms').css('opacity', '1');
        }
    });
});

$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()*3) { // после 3 блоков (предполагая, что высота блока равна высоте окна)
      $('#back-to-top-btn').fadeIn();
    } else {
      $('#back-to-top-btn').fadeOut();
    }
  });

  $('#back-to-top-btn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

$('#go-to-element-btn').click(function() {
  $('html, body').animate({
    scrollTop: $("#programma").offset().top
  }, 1000);  // 2000 - это время анимации в миллисекундах (2 секунды)
});

$('#go-to-element-btn2').click(function() {
  $('html, body').animate({
    scrollTop: $("#buy").offset().top
  }, 1000);  // 2000 - это время анимации в миллисекундах (2 секунды)
});

$(document).ready(function() {
  setTimeout(function(){
    $('#preloader').fadeOut('slow');
  }, 1000);  // 2000 - это время в миллисекундах (2 секунды)
});



}; 