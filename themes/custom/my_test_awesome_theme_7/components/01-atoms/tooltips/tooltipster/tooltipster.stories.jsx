import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './tooltipster.twig';
import data from './tooltipster.yml';

import 'tooltipster/dist/js/tooltipster.bundle.min';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';
import 'tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-noir.min.css';

import './tooltipster';

import docs from './README.md';

export default {
  title: 'Atoms/Tooltips/Tooltipster',
  component: 'Tooltips',
  decorators: [reactToHtml],
  parameters: {
    docs: {
      inlineStories: false,
      description: {
        component: docs,
      },
      source: {
        code: `
{% include '@atoms/tooltips/tooltips.twig' with {
  parameter_name: parameter_value,
  parameter_name_1: parameter_value_1,
  ...
  parameter_name_N: parameter_value_N,
} %}
        `,
        language: 'twig',
      },
    },
    layout: 'centered',
  },
};

const TwigTemplate = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

export const Tooltips = TwigTemplate.bind({});

Tooltips.args = {
  tooltips_content: data.content,
  tooltips_classes: data.classes,
  tooltips_attributes: data.attributes,
  tooltips_options: data.tooltips_options,
};
