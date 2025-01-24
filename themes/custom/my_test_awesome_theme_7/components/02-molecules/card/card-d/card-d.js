/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.CardD = {
    attach: function (context) {
      $(once('CardD', 'body', context)).on('click', function(e) {
        if (!$(e.target).closest('.card-d').length) {
          $('.card-d.active').removeClass('active');
        }
      });

      $(once('CardD', '.card-d', context)).on('click keydown', function (e) {
        if (e.type === 'keydown' && e.keyCode !== 13) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (!$(this).hasClass('active')) {
          $(this).addClass('active')
            .siblings().removeClass('active');
        }
        else {
          $(this).removeClass('active');
        }
      });
    }
  };
})(jQuery, Drupal);
