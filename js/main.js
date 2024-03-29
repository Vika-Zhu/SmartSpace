  const owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
  });
  $('.slider__btn-left').click(function() {
      owl.trigger('next.owl.carousel');
  })
  $('.slider__btn-right').click(function() {
      owl.trigger('prev.owl.carousel',);
  })