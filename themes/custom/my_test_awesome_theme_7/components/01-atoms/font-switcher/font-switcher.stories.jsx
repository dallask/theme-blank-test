import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './font-switcher.yml';
import templateTwig from './font-switcher.twig';

import docs from "./README.mdx";

export default {
  title: 'Atoms/Font Switcher',
  component: 'Font Switcher',
  decorators: [
    (Story) => (
      <div className="storybook-block__font-switcher">
        <Story/>
      </div>
    ),
    reactToHtml
  ],
  parameters: {
    docs: {
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
};

export const FontSwitcher = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

FontSwitcher.args = {
  content: data.content,
  label: '',
};
