(function ($, Drupal) {
  Drupal.behaviors.SiteSwitcher = {
    attach(context) {
      const currentPath = window.location.pathname;
      const currentSection = currentPath.split('/')[1];
      const desktopSwitcher = $('.header-top .site-switcher', context);
      const mobileSwitcher = $(
        '.header-main-mobile__collapse .site-switcher',
        context,
      );
      const elements = [desktopSwitcher, mobileSwitcher];

      const switchActiveMenu = (event) => {
        $('.site-switcher-link.dropdown-toggle span', desktopSwitcher).text(
          $(event.target).text(),
        );
        $('.site-switcher-link.dropdown-toggle span', mobileSwitcher).text(
          $(event.target).text(),
        );
      };

      $.elements(elements, (key, element) => {
        const section = $('.site-switcher__item--sub', element);
        $.each(section, (key, item) => {
          $(item).on('click', switchActiveMenu);
          const link = $('a', item).attr('href');
          if (link.split('/')[1] === currentSection) {
            $('.site-switcher-link.dropdown-toggle span', desktopSwitcher).text(
              $('a', item).text(),
            );
          }
        });
      });
    },
  };
})(jQuery, Drupal);
