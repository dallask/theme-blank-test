import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './prc.yml';
import templateTwig from './prc.twig';

import docs from './README.mdx';

export default {
  title: 'Atoms/PRC Code and Date',
  component: 'PRC Code and Date',
  decorators: [reactToHtml],
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

export const PRCCodeDate = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

PRCCodeDate.args = {
  content: data.content,
  label: '',
};
