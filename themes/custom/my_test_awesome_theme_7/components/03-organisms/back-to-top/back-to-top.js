/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.backToTopBlock = {
    attach: function (context) {
      $button = $('.block__back-to-top-button', context);

      var showHide = function (scrollTop) {
        if (scrollTop > 500) {
          $button.fadeIn();
        } else {
          $button.fadeOut();
        }
      };

      // Determine scroll position after page reloading.
      showHide(document.documentElement.scrollTop || document.body.scrollTop);

      // Determine scroll position during scroll.
      onscroll = function() {
        showHide(document.documentElement.scrollTop || document.body.scrollTop)
      };

      // Scroll to top by click.
      $button.click(function(e) {
        e.preventDefault();

        $('body,html').animate({
          scrollTop: 0
        }, 300);
      })
    },
  };
})(jQuery, Drupal);
