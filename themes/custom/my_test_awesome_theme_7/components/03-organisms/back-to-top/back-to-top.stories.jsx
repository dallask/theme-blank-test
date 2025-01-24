import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './back-to-top.yml';
import twigTemplate from './back-to-top.twig';

import './back-to-top';
import docs from './README.mdx';

export default {
  title: 'Organisms/Back To Top',
  component: 'Back To Top',
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

export const BackToTop = (args) => (
  <div className="back-to-top-container container">
    <p>This is some placeholder text and empty space. Scroll to view the back-to-top functionality.</p>
    <div
      dangerouslySetInnerHTML={{
        __html: twigTemplate({
          ...args,
        }),
      }}
    />
  </div>
);

BackToTop.args = {
  content: data.content,
  label: '',
};
