import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './card.twig';
import data from './card.yml';

import docs from './README.md';

export default {
  title: 'Molecules/Cards/BS',
  component: 'Card',
  parameters: {
    docs: {
      description: {
        component: docs,
      },
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
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
export const Card = TwigTemplate.bind({});

Card.args = { ...data };
