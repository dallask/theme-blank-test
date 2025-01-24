import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './videoReact.yml';
import template from './videoReact.twig';

import './videoReactGlobal';
import './videoReact';

export default {
  title: 'Organisms/Video/Video React',
  component: 'Video React',
  decorators: [reactToHtml],
};

export const VideoReact = (args) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: template({
          ...args,
        }),
      }}
    />
  );
};

VideoReact.args = data;
