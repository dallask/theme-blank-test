/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.carouselQuestionnaire = {
    attach: function (context) {
      $(once('wrapperCarouselQuestionnaire', '.carousel-questionnaire', context)).each(function () {
        var $slider = $(this);
        var $btnNext = $('.slick-next-alt', context);
        var $btnPrev = $('.slick-prev-alt', context);

        var validation = () => {
          var $fields = $(".slick-active input[type='radio'], .slick-active input[type='checkbox']", $slider);
          var $checked = $(".slick-active input[type='radio']:checked, .slick-active input[type='checkbox']:checked", $slider);

          $fields.change((e) => {
            var fieldsFieldset = "input[type='radio'], input[type='checkbox']";
            var $fieldset = $(e.currentTarget).closest('fieldset');

            if (e.currentTarget.checked === true) {
              $(fieldsFieldset, $fieldset).removeClass('is-invalid');
            }
            else {
              $(fieldsFieldset, $fieldset).addClass('is-invalid');
            }
          });

          if ($checked.length === 0) {
            $fields.addClass('is-invalid');
            return false;
          }
          else {
            $fields.removeClass('is-invalid');
          }
          return true;
        };

        $slider.slick({
          dots: true,
          infinite: false,
          swipe: false,
          speed: 50,
          fade: true,
          cssEase: 'linear'
        }).on('afterChange', function (event, slick, currentSlide) {
          if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
            $btnNext.addClass('d-none');
          }
          else if (currentSlide === 0) {
            $btnPrev.addClass('d-none')
          }
          else {
            $btnPrev.removeClass('d-none');
            $btnNext.removeClass('d-none');
          }
        });
        ;

        $btnPrev.click(() => {
          $slider[0].slick.slickPrev();
        });

        $btnNext.click(() => {
          if (validation()) {
            $slider[0].slick.slickNext();
          }
        });

        $('.slick-dots li button', $slider).click((e) => {
          e.stopPropagation();
        });
      });
    }
  };
})(jQuery, Drupal);
