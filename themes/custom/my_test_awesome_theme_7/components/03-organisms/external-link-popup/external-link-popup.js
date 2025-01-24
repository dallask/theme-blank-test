/**
 * @file
 * Dialog initialization external link popup dialog
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  // Replace openDialog function from the external_link_popup module.
  Drupal.behaviors.externalLinkPopup.openDialog = function (element, popup, domain) {
    // Take care about tokens.
    var url = $(element).attr('href');
    var text = $(element).text();
    var bodyHtml = popup.body
      .replace('[link:url]', this.htmlEncode(url))
      .replace('[link:text]', this.htmlEncode(text));

    $('#externalLinkPopupModalLabel').html(popup.title);
    $('#externalLinkPopupModalCloseButton').html(popup.labelno);
    $('#externalLinkPopupModalContinueButton').html(popup.labelyes);
    $('#externalLinkPopupModalContinueButton').unbind();
    $('#externalLinkPopupModalContinueButton').click(function () {
      window.open(url, element.target);
    });
    $('#externalLinkPopupModalBody').html(bodyHtml);
    $('#externalLinkPopupModal').modal('show');
  };

})(jQuery, Drupal, drupalSettings);
