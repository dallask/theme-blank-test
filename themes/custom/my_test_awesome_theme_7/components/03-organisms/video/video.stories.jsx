import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './video.yml';
import templateTwig from './video.twig';

import docs from './README.mdx';

import '@atoms/videos/video-embed';

export default {
  title: 'Organisms/Video',
  component: 'Video',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
  },
  decorators: [reactToHtml],
};

export const Video = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

Video.args = {
  video: data.video,
};

