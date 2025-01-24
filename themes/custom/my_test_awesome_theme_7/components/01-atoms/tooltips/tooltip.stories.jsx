import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import CTAIcon from '@atoms/cta/cta.twig';
import CTAData from '@atoms/cta/cta.yml';

import './tooltip';

import docs from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Tooltips',
  component: 'Tooltip',
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: CTAData.docs.source.code,
        language: 'twig',
      },
    },
    layout: 'centered',
  },
  decorators: [reactToHtml],
};

const TooltipTemplate = (args) => (
    <div
      dangerouslySetInnerHTML={{
        __html: CTAIcon({
          cta_content: CTAData.cta_content,
          cta_modifiers: ['primary', 'lg'],
          cta_attributes: {
            'data-toggle': 'tooltip',
            'data-placement': 'top',
            'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        }),
      }}
    />
);

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
  cta_url: CTAData.cta_url,
  cta_content: CTAData.cta_content,
  cta_icon: CTAData.cta_icon,
  cta_base_class: CTAData.cta_base_class,
  cta_blockname: CTAData.cta_blockname,
  cta_attributes: CTAData.attributes,
};
