const openclose = () => {

  $('.services__btn').on('click', function () {
    $('.services__text, .services__btn').toggleClass('active');
  });

}
export default openclose
