(function ($, Drupal) {
  // If your modal closing with animation
  // configure this parameter to set focus to the modal trigger
  // after your modal animation ends.
  // I recommend setting minimum 50,
  // even if your modal closes without animation.
  const modalAnimationDelayMs = 50;

  // Add here element classes that can close modal.
  const modalCloseClasses = [
    'btn-close',
  ];

  // Add here element IDs that can close modal.
  const modalCloseIds = [
    'externalLinkPopupModalCloseButton',
  ];

  Drupal.behaviors.focusAdvanced = {
    attach: function (context) {
      let returnFocusElement = null;

      $(once('focus-advanced', 'body', context)).on('keydown', 'a, button',function (e) {
        // Focus on the Modal Trigger element
        if (e.key === 'Enter') {
          const activeElement = document.activeElement;

          const classIntersection = modalCloseClasses.filter(modalCloseClass => {
            return activeElement.classList.contains(modalCloseClass);
          });

          if (activeElement.closest('.modal') === null) {
            // If element NOT in modal
            // return the focus to this element in the future.
            returnFocusElement = activeElement;
          } else if ((modalCloseIds.includes(activeElement.id) || classIntersection.length) && returnFocusElement) {
            // If element is in modal
            // focus the modal trigger element.
            setTimeout(() => {
              returnFocusElement.focus();
            }, modalAnimationDelayMs);
          }
        }
      });
    }
  }
})(jQuery, Drupal);
