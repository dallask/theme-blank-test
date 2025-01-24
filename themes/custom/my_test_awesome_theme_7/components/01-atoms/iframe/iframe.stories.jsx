import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './iframe.twig';
import data from './iframe.yml';

import docs from './README.md';

export default {
  title: 'Atoms/Iframe',
  component: 'Iframe',
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
export const Iframe = TwigTemplate.bind({});

Iframe.args = {
  iframe: data.iframe,
};
