/*
 * @file:  pharma_isi_initial_visit.js
 * js for pharma_isi module drawer functionality
 */

var $ = jQuery.noConflict();

$(document).ready(
    function() {

        //console.log('pharma_isi_initial_visit js file loaded');

        //test and set cookie as needed	
        var cookieName = "InitialSiteVisitCookie";
        var initVisit = $.cookie(cookieName);

        if (initVisit == true || initVisit == null || initVisit === undefined) {
            //this is the initial visit, cookie being initialized and temporarily set to true until animation occurs;
            $.cookie(cookieName, true, { path: '/' });
            var isi = $("#isi-top");
            var position = $(window).scrollTop();
            var vertOffset = 20; // top padding to leave above ISI when scrolling into focus
            if (position <= 1) {
                setTimeout(
                    function() {
                        $('html, body').animate({ scrollTop: isi.offset().top - vertOffset }, 500);
                        $.cookie(cookieName, false, { expires: 365, path: '/' });
                    }, 1000
                );
            }
        } else {
            //this is not the initial visit, cookie exists- keep it false
            $.cookie(cookieName, false, { path: '/' });
        }

    }
);