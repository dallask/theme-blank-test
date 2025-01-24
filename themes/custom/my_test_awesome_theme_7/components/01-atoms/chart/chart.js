/* eslint-disable */
(function ($, Drupal) {
  'use strict';

  const prepareAnimationVars = (vars, size) => {
    if (vars.attr) {
      let attr = {};

      if (vars.attr.sizes) {
        attr = { ...attr, ...vars.attr.sizes };
      }

      if (vars.attr.dimensions) {
        const dimensions = Object
          .entries(vars.attr.dimensions)
          .reduce((previousValue, [dimension, value]) => {
            previousValue[dimension] = `${value}${size}`;
            return previousValue;
          }, {});
        attr = { ...attr, ...dimensions };
      }

      vars = { ...vars, attr };
    }

    return vars;
  }

  Drupal.behaviors.chartGsapAnimation = {
    attach: function (context) {
      $(once('chart-gsap-animation', '.js-gsap-chart', context)).each(function() {
        gsap.registerPlugin(ScrollTrigger);

        const $chart = $(this);
        const chartData = $chart.attr('data-gsap-chart');
        const config = JSON.parse(chartData);
        const  { elements, timeline, sizeTarget, animationTargets } = config;

        const animation = gsap.timeline(
          Object.entries(timeline).reduce((previousValue, [key, currentValue]) => {
            previousValue[key] = { ...currentValue, trigger: $chart};
            return previousValue;
          }, {})
        );

        elements.forEach(selector => {
          const $element = $(`${selector} ${sizeTarget.targetName}`, $chart);
          if (!$element.length) {
            return;
          }

          const size = $element.attr(sizeTarget.sizeAttrName);
          Object.entries(animationTargets).forEach(([target, settings]) => {
            const { position, vars } = settings;
            animation.from(
              `${selector} ${target}`,
              prepareAnimationVars(vars, size),
              position
            );
          });
        });
      });
    }
  };

})(jQuery, Drupal);
