/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.shareButton = {
    attach: function (context) {
      const $shareButtonBlock = $('.share-button', context)
        , $shareList = $('.addtoany_list', $shareButtonBlock);

      $shareButtonBlock
        .on('mouseover focusin', function () {
          $(this).addClass('show');
        })
        .on('mouseout', function () {
          $(this).removeClass('show');
        });

      $shareList.find('a:last-of-type').on('blur', function () {
        $shareButtonBlock.removeClass('show');
      });
    }
  };

})(jQuery, Drupal);
