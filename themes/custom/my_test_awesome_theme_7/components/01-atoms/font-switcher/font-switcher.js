/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.changeTypeSize = {
    storageKey: 'changeTypeSize',
    typesSizes: {
      'default': 'font-type-default',
      'bigger': 'font-type-bigger',
    },

    attach: function (context) {
      $(once('changeTypeSize', 'body', context)).each(() => {
        const currentType = this.getCurrentFont();
        this.setCurrentFont(currentType);
      })
      $(once('changeTypeSize', '.font-switcher a', context)).each((key, block) => {
        $(block).on('click', (e) => {
          e.preventDefault();
          const currentType = this.getCurrentFont();
          const nextType = currentType === 'default' ? 'bigger' : 'default';
          this.removeAllFontClasses();
          this.setCurrentFont(nextType);
          return false;
        });
      });
    },

    removeAllFontClasses: function () {
      for (const type in this.typesSizes) {
        $('body').removeClass(this.typesSizes[type]);
      }
    },

    setCurrentFont: function (type) {
      window.localStorage.setItem(this.storageKey, type);
      $('body').addClass(this.typesSizes[type]);
    },

    getCurrentFont: function () {
      return  window.localStorage.getItem(this.storageKey) || 'default';
    },
  };
})(jQuery, Drupal);
