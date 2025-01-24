import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './error404.yml';
import templateTwig from './error404.twig';

import docs from './README.mdx';

export default {
  title: 'Organisms/Error 404',
  component: 'Error 404',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

export const error404 = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

error404.args = {
  ...data
};
