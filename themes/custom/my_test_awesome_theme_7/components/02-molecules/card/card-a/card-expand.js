/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.expandableCard = {
    attach: function (context) {
      const cards = $("[class*='--expandable']", context);
      cards.each(function () {
        const card = $(this);
        $("[class*='__cta']", card).on('click', function (e) {
          e.stopPropagation();
          if (card.hasClass('show')) {
            card.removeClass('show');
          }
          else {
            cards.removeClass('show');
            card.addClass('show');
          }
        });
      });
    }
  };
})(jQuery, Drupal);
