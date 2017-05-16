const carousel = () => {

  $('.main-carousel').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 418,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.big-slider__box').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          centerMode: false,
          dots: true
        }
      }
    ]
  });

  $('.slider-bottom__box').slick({
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 849,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

}
export default carousel;
