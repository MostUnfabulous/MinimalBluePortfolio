
$('.slick').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 centerMode: false,
 focusOnSelect: true,
 responsive: [
    {
      breakpoint: 922,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:647,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }]
});
