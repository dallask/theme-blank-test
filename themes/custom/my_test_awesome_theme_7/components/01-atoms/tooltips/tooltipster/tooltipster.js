/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.tooltipsterTooltip = {
    attach: function (context) {
      $(once('tooltipster', '.tooltipster', context)).each(function () {
        $(this).tooltipster({
          functionInit: function (instance, helper) {

            var $origin = $(helper.origin),
              dataOptions = $origin.attr('data-tooltipster');

            if (dataOptions) {

              dataOptions = JSON.parse(dataOptions);

              $.each(dataOptions, function (name, option) {
                instance.option(name, option);
              });
            }
          },
          functionReady: function (instance, helper) {
            var $origin = $(helper.origin),
              tooltipId = $origin.attr('aria-describedby');
            $('#' + tooltipId).attr('aria-hidden', false);
          },
          functionAfter: function (instance, helper) {
            var $origin = $(helper.origin),
              tooltipId = $origin.attr('aria-describedby');
            $('#' + tooltipId).attr('aria-hidden', true);
          }
        });

        $(this)
          .focus(function () {
            $(this).tooltipster('open');
          })
          .blur(function () {
            $(this).tooltipster('close');
          });
      });
    }
  };
})(jQuery, Drupal);
