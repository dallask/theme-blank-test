/* eslint-disable */

const videoStopEvent = new Event('videoStop', {
  bubbles: true,
  cancelable: true,
});

(function ($, Drupal) {
  Drupal.behaviors.gallery = {
    attach: function (context) {
      $(once('GalleryBehavior', '.gallery', context)).each(function() {
        const $gallery = $(this);
        const switchEvent = $gallery.attr('data-switch-event') && $(window).width() >= 992
          ? $gallery.attr('data-switch-event')
          : 'click';

        $('.gallery-item-update', this).on(switchEvent, function (event) {
          event.preventDefault();
          const $actionItem = $(this);
          const target = $actionItem.attr('data-id');

          if (!$actionItem.hasClass('active') && target) {
            if ($gallery.attr('data-gallery-type') === 'video') {
              document.dispatchEvent(videoStopEvent);
            }

            $('.gallery__list .active', $gallery).removeClass('active');
            $('.gallery__head .active', $gallery).removeClass('active');
            $actionItem.addClass('active');
            $(`#${target}`, $gallery).addClass('active');
          }
        });
      });
    }
  };
})(jQuery, Drupal);
