import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './ipa.yml';
import templateTwig from './ipa.twig';

import docs from './README.mdx';

// Slick
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@molecules/carousel/carousel';
import './ipa';
import '../../card/card-a/card-expand';

export default {
  title: 'Molecules/Tabs/Tabs Complex',
  component: 'IPA',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

export const ipa = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

ipa.args = {
  ...data
};
