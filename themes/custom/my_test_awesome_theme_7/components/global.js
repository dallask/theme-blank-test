/* eslint-disable */

(function ($, Drupal, once) {
  Drupal.behaviors.externalLinkLabel = {
    attach: function (context) {
      $(once('external-link-label', 'a[target="_blank"]', context)).each(function () {
        const link = $(this);
        const label = link.attr('aria-label');
        if (!label) {
          link.attr('aria-label', link.text().trim() + ' ' + Drupal.t('(opens in a new window)'));
        }
      });
    }
  };

  Drupal.behaviors.AddWysiwigLinksAnalytics = {
    attach: function (context) {
      once('AddWysiwigLinksAnalytics', '.add-analytics', context).forEach(function (link) {
        const $link = $(link);

        const position = $link
          .closest('footer, header, body')
          .first()
          .prop('tagName')
          .toLowerCase();
        const href = $link.attr('href').startsWith('http')
          ? $link.attr('href')
          : window.location.origin + $link.attr('href');

        const analytics = {
          'name': $link.text().trim(),
          'position': position,
          'group': $link.attr('data-analytics-group'),
          'href': href,
        };

        if ($link.attr('target') && $link.attr('target') === '_blank') {
          analytics.exitmodal = "" + !$link.hasClass('external-link-popup-disabled');
        }

        $link.attr('data-analytics-link', JSON.stringify(analytics));
      });
    }
  };

  Drupal.behaviors.AnalyticsVirtualPageView = {
    attach: function (context) {
      if (context !== document) {
        return;
      }

      $(document).trigger("virtualPageView");
    }
  };
})(jQuery, Drupal, once);
