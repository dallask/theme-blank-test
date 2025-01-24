import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import data from './hero.yml';
import templateTwig from './hero.twig';
import templateTwigVideo from './hero.video_background.twig';

import docs from './README.mdx';

export default {
  title: 'Organisms/Hero',
  component: 'Hero',
  parameters: {
    docs: {
      page: (() => docs)(),
    },
  },
  decorators: [reactToHtml],
};

export const Hero = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}
  />
);

Hero.args = {
  hero: data.hero,
  paragraph_behavior_variant: 'hero',
  paragraph_behavior_modifier: 'default',
};

export const HeroVideoBackground = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateTwigVideo({
        ...args,
      }),
    }}
  />
);

HeroVideoBackground.args = {
  hero: data.hero,
  paragraph_behavior_variant: 'hero',
  paragraph_behavior_modifier: 'video_background',
};
