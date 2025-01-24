/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.buzzsproutAudio = {
    attach: function (context) {
      const $episodesWrapper = $('.buzzsprout-items', context);

      $(window).on('resize', function () {
        equalizeHeights($episodesWrapper);
      });

      function equalizeHeightsForRow($cards) {
        const $titles = $cards.find('.episode_name');

        // Reset card titles heights
        $titles.css('height', '');

        // Reduce to largest card title height
        let largestHeight = 0;

        $cards.each(function () {
          const $card = $(this);
          const height = $card.find('.episode_name').outerHeight();

          if (height > largestHeight) {
            largestHeight = height;
          }
        });

        if ($(window).width() >= 768) {
          // Loop through cards and set card title height to largest
          $titles.css('height', largestHeight + 'px');
        }
      }

      function equalizeHeights($grid) {
        const $cards = $grid.find('.episode');
        const rowCount = Math.ceil($cards.length / 2);

        for (let i = 0; i < rowCount; i++) {
          const startIndex = i * 2;
          const endIndex = Math.min(startIndex + 2, $cards.length);

          // Select two cards in the row
          const $rowCards = $cards.slice(startIndex, endIndex);

          equalizeHeightsForRow($rowCards);
        }
      }

      setTimeout(function () {
        equalizeHeights($episodesWrapper);

        $('.js-buzzsprout-items', context).each(function () {
          $(this).find('.buzz_share a').addClass('external-link-popup-disabled');
        });

        $('.episode', context).each(function () {
          $(this).find('iframe').wrap('<div class="audio-iframe"></div>');
        });

      }, 500);

    }
  };
})(jQuery, Drupal);
