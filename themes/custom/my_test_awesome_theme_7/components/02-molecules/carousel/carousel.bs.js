/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.carouselBS = {
    attach: function (context) {
      $(once('wrapperCarouselBS', '.carousel-bs', context)).each(function () {
        var dataOptions = $(this).data('carousel-options') ? $(this).data('carousel-options') : {};
        $(this).carousel(dataOptions);
      });
    }
  };
})(jQuery, Drupal);
