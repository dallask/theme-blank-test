/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.carouselSlick = {
    attach: function (context) {
      $(once('wrapperCarouselSlick', '.carousel-slick', context)).each(function () {
        var dataOptions = $(this).data('carousel-options') ? $(this).data('carousel-options') : {};
        dataOptions.prevArrow = '<button type="button" class="slick-prev data-analytics-click-link" data-analytics-link=\'{"name": "Previous", "position": "body", "href": "n/a", "group": "Carousel"}\'>Previous</button>';
        dataOptions.nextArrow = '<button type="button" class="slick-next data-analytics-click-link" data-analytics-link=\'{"name": "Next", "position": "body", "href": "n/a", "group": "Carousel"}\'>Next</button>';

        $(this).on('init', function () {
          $('.slick-dots button').each(function(index) {
            $(this).addClass('data-analytics-click-link');
            $(this).attr('data-analytics-link', `{"name": "Button ${index + 1}", "position": "body", "href": "n/a", "group": "Carousel"}`);
          });
        });

        $(this).slick(dataOptions);
      });
    }
  };
})(jQuery, Drupal);
