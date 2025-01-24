import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './share-button.yml';
import templateTwig from './share-button.twig';

import docs from './README.mdx';
import './share-button';

export default {
  title: 'Molecules/Share Button',
  component: 'Share Button',
  parameters: {
    docs: {
      page: (() => docs)(),
      source: {
        code: data.docs.source.code,
        language: 'twig',
      },
    },
  },
  decorators: [reactToHtml],
};

export const ShareButton = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

ShareButton.args = {
  content: data.content,
};

export const ShareButtonDropdown = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

ShareButtonDropdown.args = {
  content: data.content,
  share_button__modifiers: ['dropdown'],
};
