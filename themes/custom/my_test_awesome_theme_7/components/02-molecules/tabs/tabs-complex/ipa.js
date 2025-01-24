/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.tabsComplex = {
    attach: function (context) {
      $('.nav-tabs .nav-link', context).on('click', function() {
        let scrollContainer = $(this).closest('.nav-tabs-wrapper')[0];
        let activeElement = $(this)[0];

        let centeredPosition = activeElement.offsetLeft + activeElement.offsetWidth / 2 - scrollContainer.offsetWidth / 2;

        $(scrollContainer).animate({
          scrollLeft: centeredPosition
        }, 100);
      });
    }
  };
})(jQuery, Drupal);
