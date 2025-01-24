import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import templateTwig from './spacer.twig';
import data from './spacer.yml';
import docs from './README.mdx';

export default {
  title: 'Atoms/Spacer',
  component: 'Spacer',
  parameters: {
    docs: {
      inlineStories: false,
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="storybook-wrapper">
        <Story/>
      </div>
    ),
    reactToHtml,
  ],
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}
  />
);

export const Spacer = TwigTemplate.bind({});

Spacer.args = {...data};
