/* eslint-disable */
/*
 * @file:  pharma_isi_stickyfooter.js
 * js for pharma_isi module drawer functionality
 */

var $ = jQuery.noConflict();

(function($) {

    /* global mejs */
    'use strict';
    $(document).ready(
        function() {

            //console.log('pharma_isi_stickyfooter js file loaded');
            isiClickHandler();
            initScrollUpdate();

        }
    );

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
        if (isiSection.length && isiTray.length) {
            var elemTop = isiSection.offset().top;
            if (elemTop <= docViewBottom) {
                $(isiTray).addClass('hide-tray');
            } else {
                $(isiTray).removeClass('hide-tray');
            }
        }
    }
    // check whether to hide/show sticky footer on scroll event
    $(window).scroll($.debounce(100, function(e) { initScrollUpdate(); }));

    function isiClickHandler() {
        $('#isi-drawer-wrapper').on(
            'click',
            function() {
                $('#isi-drawer-handle').toggleClass('open-drawer close-drawer');
                $('#isi-drawer-wrapper').toggleClass('isi-drawer-collapsed isi-drawer-expanded');
            }
        );
    }

})(jQuery);
