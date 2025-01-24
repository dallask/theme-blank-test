/**
 * @file
 * Theme javascript.
 */

(function($) {

    /* global mejs */
    'use strict';
    $(document).ready(
        function() {
            $('.jsIsiMinimize').addClass('isi-jump-link');
            $('.isi-tray').addClass('isi-drawer-collapsed').removeClass('isi-drawer-expanded');
            initTray();
            initScrollUpdate();
        }
    );

    // isi tray behaviour.
    function initTray() {
        var isiContainer = $('.jsIsiContainer');
        var isiDrawerHandle = $('.jsIsiMinimize');
        var isiDrawer = $('#drawer-isi .isi-header');
        isiDrawerHandle.on(
            'click',
            function() {
                isiContainer.toggleClass('opened');
                //auto scroll behavior for ISI jumplinks
                var isi = $("#isi-top");
                var vertOffset = 20; // top padding to leave above ISI when scrolling into focus
                $('html, body').animate({ scrollTop: isi.offset().top - vertOffset }, 250);
                isiDrawer.addClass('visited'); //add visited class to div to support fallback for pseudo :visited behavior
            }
        );
    }

    function initScrollUpdate() {
        var $window = $(window);
        var isiSection;
        if (window.location.href.indexOf('importantsafetyinformation') > 0) {
            isiSection = $('.info-with-summary-section');
        } else {
            isiSection = $('.isi-section');
        }
        var isiTray = $('.isi-tray');
        var windowOffset = $window.scrollTop();
        var docViewBottom = windowOffset + $window.height() - isiTray.height();
        var vertTopMargin = 80; // conceal tray when 80 px above isiTop anchor
        if (isiSection.length && isiTray.length) {
            var elemTop = isiSection.offset().top - vertTopMargin;
            if (elemTop <= docViewBottom) {
                $(isiTray).addClass('hide-tray');
            } else {
                $(isiTray).removeClass('hide-tray');
            }
        }
    }
    // Minimize tray on scroll event
    $(window).on(
        'scroll resize', function() {
            initScrollUpdate();
        }
    );

})(jQuery);