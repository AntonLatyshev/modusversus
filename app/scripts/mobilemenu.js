const mobilemenu = () => {

  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active');
    $('.menu__list').toggleClass('mobile');
    $('.menu__link').removeClass('active');
    $('.menu__insert').css('display', 'none');
  });


  $('.menu__link').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.menu__item'),
        list = $this.closest('.menu__list'),
        links = list.find('.menu__link'),
        items = list.find('.menu__item'),
        content = item.find('.menu__insert'),
        otherContent = list.find('.menu__insert'),
        duration = 300;

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');
      links.removeClass('active');
      $this.addClass('active');
      otherContent.stop().slideUp(duration);
      content.stop().slideDown(duration);
    } else {
      content.stop().slideUp(duration);
      $this.removeClass('active');
      item.removeClass('active');
    }

  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768 ) {
      $('.menu__list').appendTo('.header');
    } else {
      $('.menu__list').appendTo('.menu');
    }

    if ($(window).width() > 1024 ) {
      $('.hamburger').removeClass('active');
      $('.menu__list').removeClass('mobile');
    }
  })

}
export default mobilemenu
