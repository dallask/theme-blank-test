/* eslint-disable */

const videoStopEvent = new Event('videoStop', {
  bubbles: true,
  cancelable: true,
});

(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.videoBlock = {
    attach(context) {
      $(once('videoReact', '.videoReact__wrapper', context)).each(function () {
        const $videoWrapper = $(this);
        const $video = $('.react-player-video', this);
        const $play = $('.thumbnail', this);

        const container = $video[0];
        const url = $video.attr('data-url');
        let initPlayer = function() {
          renderReactPlayer(container, {
            url,
            playing: false,
            controls: true,
            playsinline: true,
          });

          const play = () => {
            document.dispatchEvent(videoStopEvent);
            $videoWrapper.addClass('play');
            renderReactPlayer(container, {
              url,
              playing: true,
              controls: true,
              playsinline: true,
            });

            $(document).trigger("virtualVideoView");
          };

          const stop = () => {
            $videoWrapper.removeClass('play');
            renderReactPlayer(container, {
              url,
              playing: false,
            });
          };

          document.addEventListener('videoStop', () => {
            stop();
          });
          play();
          // Dispatch loadPlayer event for react_player.
          const e = new Event("loadPlayer");
          e.id = $videoWrapper[0].getAttribute("id");
          document.dispatchEvent(e);
        };

        let playVideoAction = function () {
          if (typeof OtsukaPCM !== "undefined") {
            const { provider } = OtsukaPCM.isManagedSrc(url);
            OtsukaPCM.doConsentModal({
              target: $videoWrapper[0],
              provider: provider,
              consentCallback: initPlayer
            });
          }
          else {
            initPlayer();
          }
        };

        $play.on('click', (e) => {
          e.preventDefault();
          playVideoAction();
        });

        $play.on('keydown', (e) => {
          if (e.key === 'Enter') {
            playVideoAction();
          }
        });

      });
    },
  };
})(jQuery, Drupal, renderReactPlayer);
